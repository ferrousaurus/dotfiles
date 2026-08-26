---
title: Component Library
tags: UI, components, mantine, shadcn
---

## Component Library

### Go-To

- **Mantine** — Comprehensive, accessible React component library with 100+ components, hooks, and a theming system. Mantine provides consistent design out of the box, excellent TypeScript support, and integrates with CSS Modules (the Go-To styling approach).

### Acceptable

- **Shadcn/ui** — When a specific, highly-customized visual design is required. Shadcn provides copy-paste components built on Radix UI primitives with Tailwind CSS styling, allowing complete design control. Use only when Mantine's opinionated design cannot achieve the desired look.

### Unacceptable

- **MUI (Material UI)** — Heavy bundle size, Material Design aesthetic is difficult to override, and the component API is complex with too many props. MUI's styling solution (Emotion or styled-components) conflicts with the Go-To CSS Modules approach.

### Cross-References

- Related: [css-styling.md](../../dependencies/rules/css-styling.md), [form-library.md](../../dependencies/rules/form-library.md), [validation-library.md](../../dependencies/rules/validation-library.md)