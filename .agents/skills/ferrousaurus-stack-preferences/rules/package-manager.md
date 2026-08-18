---
title: Package Manager
tags: package manager, pnpm, npm, yarn, deno, bun
---

## Package Manager

### Go-To

- **pnpm** — Fast, disk-efficient package manager with strict symlinked `node_modules` that prevents phantom dependencies. pnpm's content-addressable store saves disk space across monorepos and projects. First-class monorepo support via pnpm workspaces.

### Acceptable

- **Deno** — When creating an application that requires an entrypoint where running the application as a TypeScript script is simpler than bundling it (e.g., CLI tools, scripts, one-off utilities). Deno's native TypeScript support and single-file execution model simplify these use cases.

### Unacceptable

- **Bun** — While fast, Bun's package manager has compatibility issues with some packages, and the Bun runtime ecosystem is less mature. The risk of compatibility problems outweighs the speed benefit.
- **npm** — Slower and less disk-efficient than pnpm. npm's flat `node_modules` structure creates phantom dependency risks that pnpm's symlinked approach eliminates.
- **Yarn** — The Yarn ecosystem is fragmented between v1 (Classic) and v2+ (Berry), with different plugin systems, config formats, and behaviors. pnpm provides the same benefits (workspaces, caching, strictness) without the fragmentation.

### Cross-References

- Related: [monorepo-tooling.md](./monorepo-tooling.md), [javascript-runtime.md](./javascript-runtime.md), [bundler.md](./bundler.md)