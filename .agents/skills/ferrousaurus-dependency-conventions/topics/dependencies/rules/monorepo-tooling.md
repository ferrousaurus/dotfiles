---
title: Monorepo Tooling
tags: monorepo, pnpm workspaces, turborepo, nx
---

## Monorepo Tooling

### Go-To

- **pnpm workspaces** — Simple, lightweight workspace protocol built into the Go-To package manager. pnpm workspaces provide dependency hoisting, workspace protocol linking, and filtering without additional tooling. Sufficient for most projects.

### Acceptable

- **Turborepo** — When developing a Next.js application within a monorepo. Turborepo provides task orchestration, remote caching, and smart build ordering that benefit large monorepos. A simple pnpm workspace is still preferred when Turborepo's features aren't needed.
- **Nx** — As a last resort when a proper monorepo with complex inter-dependencies, affected-project detection, and distributed caching is absolutely required. Nx's convention-based approach adds significant configuration overhead and should only be adopted when pnpm workspaces and Turborepo are insufficient.

### Unacceptable

- **Lerna** — Legacy monorepo manager that has been superseded by pnpm workspaces (for simple monorepos) and Turborepo/Nx (for complex ones). Lerna adds tooling complexity without providing capabilities that modern alternatives don't offer better.

### Cross-References

- Related: [package-manager.md](../../dependencies/rules/package-manager.md), [bundler.md](../../dependencies/rules/bundler.md)
