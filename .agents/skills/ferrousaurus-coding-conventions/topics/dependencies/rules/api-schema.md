---
title: Type-Safe API Schema
tags: API schema, OpenAPI, types, RPC
---

## Type-Safe API Schema

### Go-To

- **TanStack Start Server Functions** — When the application is built on TanStack Start, server functions provide end-to-end type safety without a separate schema definition layer. Types flow from server function signatures directly to the client.
- **OpenAPI-generated types** — When building a REST API with Hono, use OpenAPI specifications to generate TypeScript types for the client. The `@hono/zod-openapi` package generates OpenAPI specs from Zod schemas, enabling type-safe client generation.

### Acceptable

None.

### Unacceptable

- **tRPC** — In TanStack Start projects, tRPC is unnecessary and conflicts with Server Functions. TanStack Start's server functions provide the same type-safe RPC capability without adding a separate tRPC router and procedure definitions.

### Cross-References

- Related: [api-layer.md](../../dependencies/rules/api-layer.md), [validation-library.md](../../dependencies/rules/validation-library.md), [api-client.md](../../dependencies/rules/api-client.md)