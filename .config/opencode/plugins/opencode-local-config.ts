import type { Plugin } from "@opencode-ai/plugin";
import { merge } from "es-toolkit";
import { access, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { z } from "zod";

// Generated from https://opencode.ai/config.json on 2026-08-31
export const configValidator = z.looseObject({
  $schema: z.string().optional(),
  model: z.string().optional(),
  share: z.string().optional(),
  username: z.string().optional(),
  shell: z.union([
    z.string(),
    z.object({
      path: z.string(),
      args: z.array(z.string()).optional(),
    }),
  ]).optional(),
  instructions: z.array(z.string()).optional(),
  permissions: z.array(
    z.object({
      action: z.string(),
      resource: z.string(),
      effect: z.enum(["allow", "deny", "ask"]),
    })
  ).optional(),
  provider: z.record(
    z.string(),
    z.object({
      name: z.string().optional(),
      npm: z.string().optional(),
      options: z.record(z.string(), z.any()).optional(),
      blacklist: z.array(z.string()).optional(),
      models: z.record(
        z.string(),
        z.object({
          id: z.string().optional(),
          modelID: z.string().optional(),
          name: z.string().optional(),
          settings: z.record(z.string(), z.any()).optional(),
          headers: z.record(z.string(), z.string()).optional(),
          body: z.record(z.string(), z.any()).optional(),
        }).passthrough()
      ).optional(),
    }).passthrough()
  ).optional(),
  agents: z.record(
    z.string(),
    z.object({
      description: z.string().optional(),
      mode: z.string().optional(),
      system: z.string().optional(),
      model: z.string().optional(),
      maxTokens: z.number().int().positive().optional(),
      permissions: z.array(
        z.object({
          action: z.string(),
          resource: z.string(),
          effect: z.enum(["allow", "deny", "ask"]),
        })
      ).optional(),
    })
  ).optional(),
  references: z.record(
    z.string(),
    z.union([
      z.string(),
      z.object({
        path: z.string().optional(),
        repository: z.string().optional(),
        branch: z.string().optional(),
        description: z.string().optional(),
        hidden: z.boolean().optional(),
      }),
    ])
  ).optional(),
});


const localConfigPath = fileURLToPath(new URL(`file://${process.env.HOME}/.config/opencode/opencode.local.json`))

const loadLocalConfig = async () => {
  try {
    access(localConfigPath)
  } catch (e) {
    console.warn(`Failed to load local config from ${localConfigPath}:`, e)
    return {};
  }
  const contents = await readFile(localConfigPath, "utf-8")
  const parsed = JSON.parse(contents);
  return configValidator.parse(parsed);
}

const opencodeLocalConfigPlugin: Plugin = async () => ({
  config: async (config) => {
    const localConfig = await loadLocalConfig();
    merge(config, localConfig);
  }
})

export default opencodeLocalConfigPlugin
