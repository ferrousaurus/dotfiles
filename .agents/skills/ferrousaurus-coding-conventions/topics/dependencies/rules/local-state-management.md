---
title: Local State Management
tags: state, zustand, jotai, redux
---

## Local State Management

### Go-To

- **Zustand** — Minimal, unopinionated, and performant local state management. Zustand's straightforward API (create a store, use a hook) avoids the boilerplate of Redux while providing subscriptions that prevent unnecessary re-renders.

### Acceptable

- **Jotai** — When many independent instances of state are needed (e.g., per-row state in a table, per-widget state in a dashboard). Jotai's atom-based model shines when you need fine-grained, composable state primitives that scale horizontally.

### Unacceptable

- **Redux** — Excessive boilerplate (actions, reducers, selectors, thunks/sagas) for local state management. Redux's single-store pattern and action/reducer indirection add complexity without proportional benefit when TanStack Query handles server state and Zustand handles local state more simply.

### Cross-References

- Related: [async-state-management.md](../../dependencies/rules/async-state-management.md), [form-library.md](../../dependencies/rules/form-library.md), [utility.md](../../dependencies/rules/utility.md)