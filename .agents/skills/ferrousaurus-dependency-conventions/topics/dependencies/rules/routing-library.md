---
title: Routing Library
tags: routing, navigation, SPA
---

## Routing Library

### Go-To

- **TanStack Router** — Fully type-safe routing with first-class TypeScript support, built-in search params validation, and seamless integration with the rest of the TanStack ecosystem (Start, Query, Form). Type-safe navigation catches routing errors at compile time.

### Acceptable

None.

### Unacceptable

- **React Router** — Lacks the type-safety guarantees of TanStack Router. Search params are untyped, route definitions lack compile-time validation, and it does not integrate with the TanStack ecosystem.
- **Next.js** — Next.js imposes a file-based routing convention and couples routing to its full-framework approach, conflicting with the stack's preference for composable, decoupled libraries. See also [ssr-library.md](../../dependencies/rules/ssr-library.md).

### Cross-References

- Related: [ssr-library.md](../../dependencies/rules/ssr-library.md), [rendering-library.md](../../dependencies/rules/rendering-library.md)
