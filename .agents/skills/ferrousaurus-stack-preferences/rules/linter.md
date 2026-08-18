---
title: Linter
tags: linter, code quality, oxlint, eslint
---

## Linter

### Go-To

- **Oxlint** — Written in Rust for extreme performance (10-100x faster than ESLint). Provides excellent lint rules out of the box, growing rule coverage, and seamless integration with the Oxc toolchain (Oxfmt formatter).

### Acceptable

None.

### Unacceptable

- **Biome** — While also Rust-based and fast, Biome bundles linting with formatting, conflicting with the stack's preference for separate, specialized tools (Oxlint + Oxfmt). Biome's rule set is less mature than Oxlint's growing ecosystem.
- **ESLint** — Slow JavaScript-based linter with heavy configuration overhead. ESLint's plugin system adds complexity and performance costs that are unnecessary when Oxlint provides faster, simpler linting.

### Cross-References

- Related: [formatter.md](./formatter.md)