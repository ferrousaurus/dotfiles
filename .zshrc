# Load completions
autoload -Uz compinit
compinit

# Auto-expand things such as "!!"
bindkey ' ' magic-space

eval "$(mise activate zsh)"
source <(usage g completion-init zsh)

eval "$(zoxide init zsh)"
eval "$(starship init zsh)"

source "$(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh"
source "$(brew --prefix)/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh"
source "$(brew --prefix)/share/zsh-history-substring-search/zsh-history-substring-search.zsh"

bindkey '^[[A' history-substring-search-up
bindkey '^[[B' history-substring-search-down
