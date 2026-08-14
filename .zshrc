# Load completions
autoload -Uz compinit
compinit

# Auto-expand things such as "!!"
bindkey ' ' magic-space

eval "$(mise activate zsh)"
source <(usage g completion-init zsh)

eval "$(zoxide init zsh)"
eval "$(starship init zsh)"
eval "$(atuin init zsh)"

source "$(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"

export PATH="$HOME/.local/bin:$PATH"

if [[ -n "$KITTY_INSTALLATION_DIR" ]]; then
    export KITTY_SHELL_INTEGRATION="enabled"
    autoload -Uz -- "$KITTY_INSTALLATION_DIR/shell-integration/zsh/kitty-integration"
    kitty-integration
    unfunction kitty-integration
fi
