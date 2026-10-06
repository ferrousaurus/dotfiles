# Dotfiles

- Install or refresh links with `mise bootstrap`; macOS and Linux use the Unix mise layer, while native Windows x64 uses the PowerShell layer. macOS may install Rosetta and configure Docker CLI integration.
- `.config/mise/config.toml` contains shared declarations; platform-specific files contain platform-specific links, tools, and bootstrap side effects.
- When reading `~/.config/...`, first check the corresponding path under `./.config/...`. If it is not found there, ask before checking `~/.config/...`.
- Merged OpenCode and Zed configs use tracked `*.git.*` inputs and ignored `*.local.*` overrides. Unix bootstrap combines them with `jq`; Windows uses an inline PowerShell Zed merge hook. OpenCode and Oxlint package postinstalls use platform-specific shell commands; see `docs/mise-windows.md` for details.
- Preserve local overrides. Root `.gitignore` intentionally excludes `*.local.*`.
- OpenCode source lives under `.config/opencode`; obey its nested `AGENTS.md`. Neovim starts at `.config/nvim/init.lua`, loads LazyVim through `lua/config/lazy.lua`, then imports local `lua/plugins` overrides.
- No repository-wide build, test, lint, or CI workflow exists; verify edited config with its owning tool.
