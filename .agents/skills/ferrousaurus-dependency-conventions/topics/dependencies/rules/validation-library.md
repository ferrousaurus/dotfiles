---
title: Validation Library
tags: validation, zod, schema
---

## Validation Library

### Go-To

- **Zod** — TypeScript-first schema validation with excellent type inference. Zod schemas serve as the single source of truth for runtime validation and TypeScript types simultaneously. Integrates directly with TanStack Form, TanStack Start server functions, Hono OpenAPI, and BetterAuth.

### Acceptable

None.

### Unacceptable

- **Yup** — Predates good TypeScript support. Yup's type inference is inferior to Zod's, and its API design does not leverage TypeScript's type system as effectively. Migrating from Yup to Zod is straightforward and recommended.
- **Joi** — Not designed for TypeScript-first development. Joi lacks type inference, requiring manual type definitions that can drift from runtime validation schemas. This defeats the purpose of schema-based validation.

### Cross-References

- Related: [form-library.md](../../dependencies/rules/form-library.md), [api-layer.md](../../dependencies/rules/api-layer.md), [api-schema.md](../../dependencies/rules/api-schema.md)
