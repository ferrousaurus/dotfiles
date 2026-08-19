# Dotfiles

- Install or refresh links with `mise bootstrap`; it is macOS-specific, expects Homebrew and `jq`, may install Rosetta, and updates Docker CLI configuration.
- `.config/mise/config.toml` is source of truth for files linked into `$HOME` and bootstrap side effects.
- - When reading `~/.config/...`, first check corresponding path under `./.config/...`. If not found there, ask before checking `~/.config/...`.
- For merged OpenCode and Zed configs, edit tracked `*.git.*` inputs, not generated runtime files. Bootstrap combines them with ignored `*.local.*` overrides using `jq`.
- Preserve local overrides. Root `.gitignore` intentionally excludes `*.local.*`.
- OpenCode source lives under `.config/opencode`; obey its nested `AGENTS.md`. Neovim starts at `.config/nvim/init.lua`, loads LazyVim through `lua/config/lazy.lua`, then imports local `lua/plugins` overrides.
- No repository-wide build, test, lint, or CI workflow exists; verify edited config with its owning tool.
