zstyle ':completion:*' matcher-list '' 'm:{a-zA-Z}={A-Za-z}'

# Load completions
autoload -Uz compinit
zcompdump="${ZDOTDIR:-$HOME}/.zcompdump-${ZSH_VERSION}"
if [[ -r "$zcompdump" ]]; then
    compinit -C -d "$zcompdump"
else
    # Safe fallback for machines that have not run bootstrap yet.
    compinit -d "$zcompdump"
fi
unset zcompdump

# Auto-expand things such as "!!"
bindkey ' ' magic-space

eval "$(mise activate zsh)"
source <(usage g completion-init zsh)

eval "$(zoxide init zsh)"
eval "$(starship init zsh)"
eval "$(atuin init zsh)"

if [[ "$(uname)" == "Darwin" ]] && command -v brew >/dev/null 2>&1; then
    brew_prefix="$(brew --prefix)"
    [[ -r "$brew_prefix/share/zsh-autosuggestions/zsh-autosuggestions.zsh" ]] && source "$brew_prefix/share/zsh-autosuggestions/zsh-autosuggestions.zsh"
    [[ -r "$brew_prefix/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" ]] && source "$brew_prefix/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"
fi

export PATH="$HOME/.local/bin:$PATH"

if [[ -n "$KITTY_INSTALLATION_DIR" ]]; then
    export KITTY_SHELL_INTEGRATION="enabled"
    autoload -Uz -- "$KITTY_INSTALLATION_DIR/shell-integration/zsh/kitty-integration"
    kitty-integration
    unfunction kitty-integration
fi
