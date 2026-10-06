# Dotfiles

Cross-platform configuration managed with [mise](https://mise.jdx.dev/). The repository includes shell, terminal, editor, Git, and OpenCode configuration for macOS, Linux, and native Windows x64 through PowerShell.

## Setup

### Prerequisites

- macOS, Linux, or native Windows x64
- `jq` on macOS and Linux
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

On Windows, install mise using its [Windows installation instructions](https://mise.jdx.dev/installing-mise.html#windows-winget), then use PowerShell 7. The Windows configuration targets Windows x64 and uses Windows application paths where required.

Clone this repository to `~/.dotfiles`, then run the platform-specific first
bootstrap command:

```sh
git clone git@github.com:ferrousaurus/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
mise -E unix bootstrap       # macOS or Linux
# mise -E windows bootstrap  # native Windows PowerShell
```

After the first bootstrap installs the mise configuration, `mise bootstrap`
can select the platform layer automatically through `auto_env`.

Bootstrap will:

- Install tools declared in the shared and selected platform mise files.
- Link the selected tracked files into the user's home directory.
- Run the platform-specific bootstrap hooks and postinstall commands.
- Install Linux packages declared with the `apt:` backend on Linux.
- Apply macOS-specific defaults, Dock, Finder, keyboard, and trackpad settings on macOS.
- Configure Docker CLI integration on Unix systems.

Mise selects `config.unix.toml` on Linux and macOS and `config.windows.toml` on Windows because `.config/mise/miserc.toml` enables `auto_env`. The Windows layer omits Unix-only tools, shell aliases, and POSIX postinstall commands. See [`docs/mise-windows.md`](docs/mise-windows.md) for the omissions and their intended future behavior.

The Unix and Windows layers merge the tracked and local Zed settings before
deploying the Zed configuration. Both platforms install OpenCode and Oxlint
package dependencies with platform-specific postinstall commands. The detailed
Windows tool notes are in [`docs/mise-windows.md`](docs/mise-windows.md).

macOS-only bootstrap settings do not run on Linux or Windows. Bootstrap may install Rosetta on Apple silicon Macs. Review platform-specific changes before using this repository on a new machine.

## Configuration

`.config/mise/config.toml` contains shared linked files, tools, and environment variables. Platform-specific declarations live in `config.unix.toml`, `config.macos.toml`, `config.linux.toml`, and `config.windows.toml`.

Machine-specific overrides use ignored `*.local.*` files. For merged OpenCode and Zed configuration, edit the tracked `*.git.*` inputs and keep personal changes in the corresponding local file. Do not edit generated runtime files directly.

## Updating

Pull repository changes and rerun bootstrap:

```sh
cd ~/.dotfiles
git pull
mise bootstrap
```

No repository-wide build, test, or lint workflow exists. Verify configuration changes with the owning tool.
