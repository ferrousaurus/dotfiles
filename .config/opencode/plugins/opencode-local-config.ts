import type { Plugin } from "@opencode-ai/plugin";
import { merge } from "es-toolkit";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const configValidator = z.record(z.string(), z.unknown());

const localConfigPath = fileURLToPath(new URL(`file://${process.env.HOME}/.config/opencode/opencode.local.json`))

const loadLocalConfig = async () => {
  try {
    const contents = await readFile(localConfigPath, "utf-8")
    const parsed = JSON.parse(contents);
    return configValidator.parse(parsed);
  } catch (e) {
    console.warn(`Failed to load local config from ${localConfigPath}:`, e)
    return {};
  }
}

const opencodeLocalConfigPlugin: Plugin = async () => ({
  config: async (config) => {
    const localConfig = await loadLocalConfig();
    merge(config, localConfig);
  }
})

export default opencodeLocalConfigPlugin
