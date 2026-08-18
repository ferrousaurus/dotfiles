---
title: Rendering Library
tags: react, ui, rendering, framework
---

## Rendering Library

### Go-To

- **React** — Industry standard, massive ecosystem, first-class support from all other Go-To libraries in this stack (TanStack Router, TanStack Start, TanStack Query, TanStack Form, Mantine). The entire Ferrousaurus stack is optimized for React.

### Acceptable

- **Svelte** — When performance is the primary concern and the project can accept a smaller ecosystem. Svelte's compiler-based approach eliminates runtime overhead.
- **Solid** — When performance is the primary concern and fine-grained reactivity without a virtual DOM is desired. Solid's reactive primitives offer excellent performance characteristics.

### Unacceptable

- **Vue** — Does not align with the stack's TanStack-centric architecture. Vue's reactivity model and ecosystem are separate from the chosen tooling.
- **HTMX** — Not a rendering library in the SPA sense. HTMX trades frontend complexity for server coupling, which conflicts with the stack's type-safe API-first approach.

### Cross-References

- Related: [component-library.md](./component-library.md), [ssr-library.md](./ssr-library.md), [routing-library.md](./routing-library.md), [utility.md](./utility.md)