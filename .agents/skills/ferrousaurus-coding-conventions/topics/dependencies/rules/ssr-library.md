---
title: SSR Library
tags: SSR, server-side rendering, full-stack, framework
---

## SSR Library

### Go-To

- **TanStack Start** — Full-stack React framework built on TanStack Router and Vite. Provides type-safe server functions, file-based routing, SSR, and seamless integration with the entire TanStack ecosystem. The natural choice for the Ferrousaurus stack.

### Acceptable

None.

### Unacceptable

- **Astro** — Astro's island architecture fundamentally differs from the stack's React-first approach. Its multi-framework support adds complexity that is unnecessary when standardizing on React.
- **Next.js** — Next.js imposes opinionated conventions (file-based routing, server components model, built-in API routes) that conflict with the stack's preference for TanStack Router, Hono APIs, and composable tooling. Next.js's coupling of routing, SSR, and API layers reduces flexibility.

### Cross-References

- Related: [routing-library.md](../../dependencies/rules/routing-library.md), [api-layer.md](../../dependencies/rules/api-layer.md), [bundler.md](../../dependencies/rules/bundler.md)