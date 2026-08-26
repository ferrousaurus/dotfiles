---
title: Table / Data Grid
tags: table, data grid, TanStack Table
---

## Table / Data Grid

### Go-To

- **TanStack Table** — Headless, type-safe table primitives with sorting, filtering, pagination, row selection, and column visibility. TanStack Table gives full control over rendering and styling, integrating naturally with the Mantine component library and CSS Modules.

### Acceptable

- **Mantine DataTable** — When TanStack Table's headless flexibility becomes a hindrance and a pre-built component with sensible defaults is needed. Mantine DataTable provides a ready-to-use table component within the Mantine ecosystem, trading customization for development speed.

### Unacceptable

- **AG Grid** — Enterprise data grid with heavy bundle size and a commercial licensing model for advanced features. AG Grid's opinionated rendering and styling conflict with the stack's component library (Mantine) and styling approach (CSS Modules). The headless flexibility of TanStack Table makes AG Grid unnecessary.

### Cross-References

- Related: [component-library.md](../../dependencies/rules/component-library.md), [async-state-management.md](../../dependencies/rules/async-state-management.md)