---
title: Formatter
tags: formatter, code style, oxfmt, prettier
---

## Formatter

### Go-To

- **Oxfmt** — Written in Rust for extreme performance (50-100x faster than Prettier). Part of the Oxc toolchain alongside Oxlint, providing a unified, fast formatting and linting experience.

### Acceptable

None.

### Unacceptable

- **Biome** — While fast and Rust-based, Biome bundles formatting with linting, which conflicts with the stack's preference for separate, specialized tools. Using Oxfmt + Oxlint keeps concerns cleanly separated.
- **Prettier** — Slow JavaScript-based formatter. Prettier's performance is a bottleneck in large projects, and its opinionated output style provides no advantage over Oxfmt's faster formatting.

### Cross-References

- Related: [linter.md](./linter.md)