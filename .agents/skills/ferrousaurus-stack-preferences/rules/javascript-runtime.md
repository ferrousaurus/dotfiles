---
title: JavaScript Runtime
tags: runtime, node.js, deno, bun
---

## JavaScript Runtime

### Go-To

- **Node.js** — The established runtime with the largest ecosystem, best tooling support, and widest library compatibility. All stack libraries (Vite, TanStack Start, Hono, Prisma) have first-class Node.js support.

### Acceptable

- **Deno** — When running TypeScript scripts is simpler than bundling the application (CLI tools, scripts, one-off utilities). Deno's native TypeScript support and single-file execution model simplify these use cases. The same condition applies as for Deno as a package manager.

### Unacceptable

- **Bun** — Fast runtime with compatibility issues across the ecosystem. Some packages don't work correctly under Bun, and the ecosystem maturity gap makes it risky for production use. Not worth the speed benefit given the compatibility risk.

### Cross-References

- Related: [package-manager.md](./package-manager.md), [bundler.md](./bundler.md), [testing.md](./testing.md)