# Dotfiles

Cross-platform configuration managed with [mise](https://mise.jdx.dev/). The repository includes shell, terminal, editor, Git, and OpenCode configuration for macOS and Linux.

## Setup

### Prerequisites

- macOS or Linux
- `jq`
- `mise`

Install prerequisites using your platform's package manager.

On macOS, install [Homebrew](https://brew.sh/) and then:

```sh
brew install jq mise
```

On Debian or Ubuntu, install `jq` and `mise` before bootstrapping. The repository's `apt:` package declarations install `mosh`, `mise`, and `zsh` during bootstrap:

```sh
sudo apt update
sudo apt install jq
```

Install `mise` using its [Linux installation instructions](https://mise.jdx.dev/installing-mise.html), then continue with bootstrap below.

Clone this repository to `~/.dotfiles`, then run bootstrap:

```sh
git clone git@github.com:ferrousaurus/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
mise bootstrap
```

Bootstrap will:

- Install tools declared in `.config/mise/config.toml`.
- Link tracked files into `$HOME`.
- Create or merge local OpenCode and Zed configuration files.
- Install OpenCode package dependencies.
- Install Linux packages declared with the `apt:` backend.
- Apply macOS-specific defaults, Dock, Finder, keyboard, and trackpad settings on macOS.
- Configure Docker CLI integration.

macOS-only bootstrap settings do not run on Linux. Bootstrap may install Rosetta on Apple silicon Macs. Review platform-specific changes before using this repository on a new machine.

## Configuration

`.config/mise/config.toml` is the source of truth for linked files, tools, environment variables, shell aliases, and bootstrap side effects.

Machine-specific overrides use ignored `*.local.*` files. For merged OpenCode and Zed configuration, edit the tracked `*.git.*` inputs and keep personal changes in the corresponding local file. Do not edit generated runtime files directly.

## Updating

Pull repository changes and rerun bootstrap:

```sh
cd ~/.dotfiles
git pull
mise bootstrap
```

No repository-wide build, test, or lint workflow exists. Verify configuration changes with the owning tool.
