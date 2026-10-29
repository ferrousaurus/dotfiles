import { existsSync, readFileSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

import type {
    ExtensionAPI,
    ExtensionCommandContext,
    ExtensionContext,
    ExtensionFactory,
} from "@earendil-works/pi-coding-agent";
import { z } from "zod";

type ThinkingLevel = ReturnType<ExtensionAPI["getThinkingLevel"]>;

type CommandOptions = Parameters<ExtensionAPI["registerCommand"]>[1];

type CapturedCommand = {
  handler: (args: string, ctx: ExtensionContext) => Promise<void>;
};

type Preset = {
  name: string;
  model: string;
  thinking: ThinkingLevel;
  loadout: string;
  systemPrompt: string;
};

type PresetFields = {
  model?: string;
  thinking?: ThinkingLevel;
  loadout?: string;
  systemPrompt?: string;
};

type LoadoutProfile = {
  enabledTools: string[];
  enabledSkills: string[];
  codemodeTools: string[];
};

type PresetConfig = {
  initialPreset: string;
  providerPriority: string[];
  basePresets: Map<string, PresetFields>;
  providerOverrides: Map<string, Map<string, PresetFields>>;
};

const AGENT_DIR = join(homedir(), ".pi", "agent");

const PRESETS_PATH = join(AGENT_DIR, "pi-presets.json");

const LOADOUT_PROFILES_PATH = join(AGENT_DIR, "loadout-profiles.json");

const GLOBAL_LOADOUT_PATH = join(AGENT_DIR, "loadout.json");

const SYSTEM_PROMPT_STATE_PATH = join(AGENT_DIR, "state", "system-prompt.json");

const SYSTEM_PROMPT_DIR =
  process.env.PI_SYSTEM_PROMPT_DIR?.trim() || join(AGENT_DIR, "system-prompts");

const LOADOUT_COMMAND = "loadout";

const SYSTEM_PROMPT_SELECT_COMMAND = "system-prompt-select";

const SYSTEM_PROMPT_TOGGLE_COMMAND = "system-prompt-toggle";

const LOADOUT_STATE_ENTRY = "pi-loadout:selection";

const nonEmptyStringSchema = z.string().min(1);

const safeNameSchema = z.string().regex(/^[A-Za-z0-9][A-Za-z0-9._-]*$/);

const thinkingLevelSchema = z.enum(["off", "minimal", "low", "medium", "high", "xhigh", "max"]);

const presetFieldInputSchema = z.object({
  model: nonEmptyStringSchema.optional(),
  thinking: thinkingLevelSchema.optional(),
  loadout: safeNameSchema.optional(),
  "system-prompt": safeNameSchema.optional(),
});

const presetOverrideInputSchema = presetFieldInputSchema.strict();

const presetEntryInputSchema = presetFieldInputSchema.extend({ name: nonEmptyStringSchema });

const presetConfigInputSchema = z
  .object({
    initialPreset: nonEmptyStringSchema,
    providerPriority: z.array(safeNameSchema).min(1),
    presets: z.array(presetEntryInputSchema).min(1),
    presetOverridesByProvider: z
      .record(z.string(), z.record(z.string(), presetOverrideInputSchema))
      .optional(),
  })
  .superRefine((config, context) => {
    const providers = new Set<string>();
    for (const [index, provider] of config.providerPriority.entries()) {
      if (providers.has(provider)) {
        context.addIssue({
          code: "custom",
          path: ["providerPriority", index],
          message: `Duplicate provider in providerPriority: ${provider}`,
        });
      }
      providers.add(provider);
    }

    const presetNames = new Set<string>();
    for (const [index, preset] of config.presets.entries()) {
      if (presetNames.has(preset.name)) {
        context.addIssue({
          code: "custom",
          path: ["presets", index, "name"],
          message: `Duplicate preset name: ${preset.name}`,
        });
      }
      presetNames.add(preset.name);
    }

    if (!presetNames.has(config.initialPreset)) {
      context.addIssue({
        code: "custom",
        path: ["initialPreset"],
        message: `Unknown initial preset: ${config.initialPreset}`,
      });
    }

    for (const [providerName, entries] of Object.entries(config.presetOverridesByProvider ?? {})) {
      for (const presetName of Object.keys(entries)) {
        if (!presetNames.has(presetName)) {
          context.addIssue({
            code: "custom",
            path: ["presetOverridesByProvider", providerName, presetName],
            message: `Unknown preset in presetOverridesByProvider.${providerName}: ${presetName}`,
          });
        }
      }
    }
  });

const resolvedPresetSchema = z.object({
  name: nonEmptyStringSchema,
  model: nonEmptyStringSchema,
  thinking: thinkingLevelSchema,
  loadout: safeNameSchema,
  systemPrompt: safeNameSchema,
});

const loadoutProfileSchema = z.object({
  enabledTools: z.array(z.string()),
  enabledSkills: z.array(z.string()),
  codemodeTools: z.unknown().optional().transform((value) => {
    const parsed = z.array(z.string()).safeParse(value);
    return parsed.success ? parsed.data : [];
  }),
});

const loadoutProfilesFileSchema = z.object({
  profiles: z.record(z.string(), loadoutProfileSchema),
});

const systemPromptStateSchema = z
  .object({
    enabled: z.boolean().catch(() => true),
    selectedFile: z.string().catch(() => ""),
  })
  .catch(() => ({ enabled: true, selectedFile: "" }));

const loadoutStateEntrySchema = z.object({
  type: z.literal("custom"),
  customType: z.literal(LOADOUT_STATE_ENTRY),
  data: z.unknown(),
});

const modelReferenceSchema = z
  .string()
  .refine((value) => {
    const separator = value.indexOf("/");
    return separator > 0 && separator < value.length - 1;
  })
  .transform((value) => {
    const separator = value.indexOf("/");
    return { provider: value.slice(0, separator), id: value.slice(separator + 1) };
  });

const commandContextSchema = z.object({
  getSystemPromptOptions: z.function(),
  waitForIdle: z.function(),
  newSession: z.function(),
  fork: z.function(),
  navigateTree: z.function(),
  switchSession: z.function(),
  reload: z.function(),
});

type PresetFieldInput = z.infer<typeof presetFieldInputSchema>;

const formatZodError = (error: z.ZodError) => error.issues
  .map((issue) => {
    const path = issue.path.length > 0 ? ` at ${issue.path.map(String).join(".")}` : "";
    return `${issue.message}${path}`;
  })
  .join("; ");

const parseSchema = <T>(schema: z.ZodType<T>, value: unknown, label: string) => schema.parse(value);

function toPresetFields(value: PresetFieldInput) {
  const fields: PresetFields = {};
  if (value.model !== undefined) fields.model = value.model;
  if (value.thinking !== undefined) fields.thinking = value.thinking;
  if (value.loadout !== undefined) fields.loadout = value.loadout;
  if (value["system-prompt"] !== undefined) fields.systemPrompt = value["system-prompt"];
  return fields;
}

const isExtensionFactory = (value: unknown): value is ExtensionFactory =>
  z.function().safeParse(value).success;

const isCommandContext = (value: ExtensionContext): value is ExtensionCommandContext =>
  commandContextSchema.safeParse(value).success;

function readJson(path: string) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return undefined;
  }
}

function parsePresetConfig(value: unknown) {
  const config = presetConfigInputSchema.parse(value);
  const basePresets = new Map<string, PresetFields>(
    config.presets.map(({ name, ...fields }) => [name, toPresetFields(fields)]),
  );
  const providerOverrides = new Map<string, Map<string, PresetFields>>();

  for (const [providerName, entries] of Object.entries(config.presetOverridesByProvider ?? {})) {
    providerOverrides.set(
      providerName,
      new Map(Object.entries(entries).map(([presetName, fields]) => [presetName, toPresetFields(fields)])),
    );
  }

  return {
    initialPreset: config.initialPreset,
    providerPriority: config.providerPriority,
    basePresets,
    providerOverrides,
  };
}

function resolvePresets(config: PresetConfig, provider?: string) {
  const selectedOverrides = provider ? config.providerOverrides.get(provider) : undefined;
  const presets: Preset[] = [];
  for (const [name, base] of config.basePresets) {
    const candidate = { name, ...base, ...selectedOverrides?.get(name) };
    const parsed = resolvedPresetSchema.safeParse(candidate);
    if (!parsed.success) {
      throw new Error(`Invalid preset entry: ${JSON.stringify(candidate)}: ${formatZodError(parsed.error)}`);
    }
    presets.push(parsed.data);
  }

  return presets;
}

function parseLoadoutProfile(value: unknown) {
  const result = loadoutProfileSchema.safeParse(value);
  return result.success ? result.data : undefined;
}

const readLoadoutProfiles = () => new Map<string, LoadoutProfile>(Object.entries(loadoutProfilesFileSchema.parse(
  readJson(LOADOUT_PROFILES_PATH),
).profiles));

function readSystemPromptState() {
  const state = systemPromptStateSchema.parse(readJson(SYSTEM_PROMPT_STATE_PATH));
  return { enabled: state.enabled, selectedFile: state.selectedFile || listSystemPromptFiles()[0] || "" };
}

function listSystemPromptFiles() {
  try {
    return readdirSync(SYSTEM_PROMPT_DIR, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

const uniq = <T>(values: readonly T[]) => [...new Set(values)];

function sameValues(left: readonly string[], right: readonly string[]) {
  const leftSorted = uniq(left).toSorted();
  const rightSorted = uniq(right).toSorted();
  return leftSorted.length === rightSorted.length && leftSorted.every((value, index) => value === rightSorted[index]);
}

function modelReference(value: string) {
  const result = modelReferenceSchema.safeParse(value);
  return result.success ? result.data : undefined;
}

function currentLoadout(ctx: ExtensionContext, pi: ExtensionAPI) {
  let latest: LoadoutProfile | undefined;
  for (const entry of ctx.sessionManager.getBranch()) {
    const stateEntry = loadoutStateEntrySchema.safeParse(entry);
    if (!stateEntry.success) continue;
    const parsed = parseLoadoutProfile(stateEntry.data.data);
    if (parsed) latest = parsed;
  }
  if (latest) return latest;

  const global = parseLoadoutProfile(readJson(GLOBAL_LOADOUT_PATH));
  if (global) return global;

  return {
    enabledTools: pi.getActiveTools(),
    enabledSkills: [],
    codemodeTools: [],
  };
}

function loadoutMatches(current: LoadoutProfile, target: LoadoutProfile) {
  return (
    sameValues(current.enabledTools, target.enabledTools) &&
    sameValues(current.enabledSkills, target.enabledSkills) &&
    sameValues(current.codemodeTools, target.codemodeTools)
  );
}

function presetMatches(
  preset: Preset,
  currentModel: ExtensionContext["model"],
  ctx: ExtensionContext,
  pi: ExtensionAPI,
  profiles: Map<string, LoadoutProfile>,
) {
  const targetModel = modelReference(preset.model);
  if (!targetModel || !currentModel || currentModel.provider !== targetModel.provider || currentModel.id !== targetModel.id) {
    return false;
  }
  if (pi.getThinkingLevel() !== preset.thinking) return false;

  const profile = profiles.get(preset.loadout);
  if (!profile || !loadoutMatches(currentLoadout(ctx, pi), profile)) return false;

  const promptState = readSystemPromptState();
  return promptState.enabled && promptState.selectedFile === `${preset.systemPrompt}.md`;
}

function toCommandContext(ctx: ExtensionContext) {
  if (isCommandContext(ctx)) return ctx;

  const unsupported = (): never => {
    throw new Error("This command is not allowed from the preset shortcut");
  };

  return {
    ...ctx,
    getSystemPromptOptions: unsupported,
    waitForIdle: async () => undefined,
    newSession: unsupported,
    fork: unsupported,
    navigateTree: unsupported,
    switchSession: unsupported,
    reload: async () => undefined,
  };
}

function commandProxy(pi: ExtensionAPI, commands: Map<string, CapturedCommand>) {
  return new Proxy(pi, {
    get(target, property, receiver) {
      if (property === "registerCommand") {
        return (name: string, options: CommandOptions) => {
          commands.set(name, {
            handler: async (args, ctx) => options.handler(args, toCommandContext(ctx)),
          });
          target.registerCommand(name, options);
        };
      }

      const value = Reflect.get(target, property, receiver);
      return typeof value === "function" ? value.bind(target) : value;
    },
  });
}

function selectionContext(ctx: ExtensionContext, targetFile: string) {
  const ui = new Proxy(ctx.ui, {
    get(target, property, receiver) {
      if (property === "select") {
        return async (_title: string, options: string[]) =>
          options.find((option) => option.replace(/\s+✓$/, "") === targetFile);
      }

      const value = Reflect.get(target, property, receiver);
      return typeof value === "function" ? value.bind(target) : value;
    },
  });

  return new Proxy(ctx, {
    get(target, property, receiver) {
      if (property === "ui") return ui;
      const value = Reflect.get(target, property, receiver);
      return typeof value === "function" ? value.bind(target) : value;
    },
  });
}

async function runCommand(
  commands: Map<string, CapturedCommand>,
  name: string,
  args: string,
  ctx: ExtensionContext,
) {
  const command = commands.get(name);
  if (!command) {
    ctx.ui.notify(`Required command is not available: /${name}`, "error");
    return false;
  }
  await command.handler(args, ctx);
  return true;
}

async function applyPreset(
  preset: Preset,
  currentModel: ExtensionContext["model"],
  ctx: ExtensionContext,
  pi: ExtensionAPI,
  commands: Map<string, CapturedCommand>,
) {
  const targetModel = modelReference(preset.model);
  if (!targetModel) {
    ctx.ui.notify(`Invalid model in preset "${preset.name}": ${preset.model}`, "error");
    return false;
  }

  const model = ctx.modelRegistry.find(targetModel.provider, targetModel.id);
  if (!model) {
    ctx.ui.notify(`Model not found for preset "${preset.name}": ${preset.model}`, "error");
    return false;
  }

  const promptFile = `${preset.systemPrompt}.md`;
  if (!existsSync(join(SYSTEM_PROMPT_DIR, promptFile))) {
    ctx.ui.notify(`System prompt not found for preset "${preset.name}": ${promptFile}`, "error");
    return false;
  }

  const profiles = readLoadoutProfiles();
  const profile = profiles.get(preset.loadout);
  if (!profile) {
    ctx.ui.notify(`Loadout not found for preset "${preset.name}": ${preset.loadout}`, "error");
    return false;
  }
  if (
    !commands.has(LOADOUT_COMMAND) ||
    !commands.has(SYSTEM_PROMPT_SELECT_COMMAND) ||
    !commands.has(SYSTEM_PROMPT_TOGGLE_COMMAND)
  ) {
    ctx.ui.notify("Pi preset dependencies are not fully initialized", "error");
    return false;
  }

  if (currentModel?.provider !== targetModel.provider || currentModel.id !== targetModel.id) {
    if (!(await pi.setModel(model))) {
      ctx.ui.notify(`Could not activate model for preset "${preset.name}": ${preset.model}`, "error");
      return false;
    }
  }

  pi.setThinkingLevel(preset.thinking);
  if (pi.getThinkingLevel() !== preset.thinking) {
    ctx.ui.notify(`Thinking level is not supported by model ${preset.model}: ${preset.thinking}`, "error");
    return false;
  }

  if (!(await runCommand(commands, LOADOUT_COMMAND, `use ${preset.loadout}`, ctx))) return false;

  const systemPromptState = readSystemPromptState();
  if (!systemPromptState.enabled && !(await runCommand(commands, SYSTEM_PROMPT_TOGGLE_COMMAND, "", ctx))) {
    return false;
  }

  const promptContext = selectionContext(ctx, promptFile);
  if (!(await runCommand(commands, SYSTEM_PROMPT_SELECT_COMMAND, "", promptContext))) return false;
  if (!loadoutMatches(currentLoadout(ctx, pi), profile)) {
    ctx.ui.notify(`Loadout did not activate for preset "${preset.name}"`, "error");
    return false;
  }
  const finalPromptState = readSystemPromptState();
  if (!finalPromptState.enabled || finalPromptState.selectedFile !== promptFile) {
    ctx.ui.notify(`System prompt did not activate for preset "${preset.name}"`, "error");
    return false;
  }

  ctx.ui.notify(`Preset activated: ${preset.name}`, "info");
  return true;
}

export default async function piPresetsExtension(pi: ExtensionAPI) {
  const commands = new Map<string, CapturedCommand>();
  let currentModel: ExtensionContext["model"];
  let cycleInProgress = Promise.resolve();
  const packageApi = commandProxy(pi, commands);
  const loadoutModulePath = "pi-loadout/extensions/index.ts";
  const systemPromptModulePath = "pi-custom-system-prompt/extensions/system-prompt.ts";
  const loadoutModule = await import(loadoutModulePath);
  const systemPromptModule = await import(systemPromptModulePath);
  if (!isExtensionFactory(loadoutModule.default) || !isExtensionFactory(systemPromptModule.default)) {
    throw new Error("Pi preset dependencies do not expose valid extension factories");
  }
  await loadoutModule.default(packageApi);
  await systemPromptModule.default(packageApi);

  const cycle = async (ctx: ExtensionContext) => {
    const operation = cycleInProgress.then(async () => {
      if (!ctx.isIdle()) {
        ctx.ui.notify("Cannot change presets while Pi is busy.", "warning");
        return;
      }

      try {
        const presets = resolvePresets(parsePresetConfig(readJson(PRESETS_PATH)), currentModel?.provider);
        const profiles = readLoadoutProfiles();
        const currentIndex = presets.findIndex((preset) =>
          presetMatches(preset, currentModel, ctx, pi, profiles),
        );
        const next = presets[currentIndex < 0 ? 0 : (currentIndex + 1) % presets.length];
        if (!next) return;

        await applyPreset(next, currentModel, ctx, pi, commands);
      } catch (error) {
        ctx.ui.notify(error instanceof Error ? error.message : String(error), "error");
      }
    });
    cycleInProgress = operation.catch(() => undefined);
    await operation;
  };

  pi.registerShortcut("ctrl+/", {
    description: "Cycle Pi presets",
    handler: cycle,
  });

  pi.registerCommand("pi-presets", {
    description: "Cycle Pi presets",
    handler: async (_args, ctx) => {
      await cycle(ctx);
    },
  });

  pi.on("session_start", async (_event, ctx) => {
    currentModel = ctx.model;
    try {
      const config = parsePresetConfig(readJson(PRESETS_PATH));
      const provider = config.providerPriority.find((provider) => ctx.modelRegistry.getProviderAuthStatus(provider).configured);
      if (!provider) {
        throw new Error(
          `No authenticated provider found in providerPriority: ${config.providerPriority.join(", ")}`,
        );
      }

      const presets = resolvePresets(config, provider);
      const initial = presets.find((preset) => preset.name === config.initialPreset);
      if (!initial) {
        throw new Error(`Initial preset not found: ${config.initialPreset}`);
      }

      const applied = await applyPreset(initial, currentModel, ctx, pi, commands);
    } catch (error) {
      if (ctx.hasUI) ctx.ui.notify(error instanceof Error ? error.message : String(error), "warning");
    }
  });

  pi.on("model_select", async (event) => {
    currentModel = event.model;
  });

  pi.on("session_shutdown", async (_event, ctx) => {
  });
}
