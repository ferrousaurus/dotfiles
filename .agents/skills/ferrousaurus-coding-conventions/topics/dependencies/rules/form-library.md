---
title: Form Library
tags: forms, tanstack form, react-hook-form
---

## Form Library

### Go-To

- **TanStack Form** — Headless, type-safe form library with fine-grained reactivity and seamless integration with Zod validation. TanStack Form follows the same design philosophy as the rest of the TanStack ecosystem: composable, framework-agnostic primitives with full TypeScript inference.

### Acceptable

- **React Hook Form** — When uncontrolled fields are required. React Hook Form's uncontrolled approach minimizes re-renders for large forms and provides a mature API for complex form scenarios. Use only when TanStack Form's controlled approach causes performance issues.

### Unacceptable

None.

### Cross-References

- Related: [validation-library.md](../../dependencies/rules/validation-library.md), [component-library.md](../../dependencies/rules/component-library.md), [local-state-management.md](../../dependencies/rules/local-state-management.md)