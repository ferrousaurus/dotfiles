---
title: API Layer
tags: API, REST, Hono, tRPC, OpenAPI
---

## API Layer

### Go-To

- **TanStack Start Server Functions** — When the application is built on TanStack Start, use its built-in server functions for type-safe RPC. Server Functions provide end-to-end type safety without additional API layer tooling.
- **Hono + Zod + OpenAPI** — When not using TanStack Start, build REST APIs with Hono, validate with Zod schemas, and generate OpenAPI documentation. Hono is fast, lightweight, and has first-class OpenAPI support via `@hono/zod-openapi`, reusing the same Zod schemas for validation and type generation.

### Acceptable

- **tRPC** — When a framework lacks a simple RPC solution and end-to-end type safety is critical. Note: tRPC is unacceptable in TanStack Start projects (use Server Functions instead), but may be useful in other contexts.
- **Express** — When library maturity and ecosystem breadth are a key concern. Express has the largest middleware ecosystem and most battle-tested patterns, but lacks the modern developer experience of Hono.
- **Nitro** — TanStack Start uses Nitro internally as its server engine. It is acceptable to build upon when working within the TanStack Start ecosystem, but should not be adopted as a standalone API framework.

### Unacceptable

- **GraphQL** — Adds schema definition complexity, resolver boilerplate, and N+1 query problems that REST + OpenAPI handles more simply. GraphQL's flexibility is not worth the operational overhead for the stack's use cases.
- **gRPC** — Protocol buffer definitions and binary serialization add tooling complexity that is disproportionate for most web applications. gRPC is better suited for internal microservice communication than for public-facing APIs.
- **Fastify** — Hono provides comparable performance with better TypeScript support, native OpenAPI integration, and a simpler API. Fastify's plugin system adds indirection that Hono avoids.
- **Elysia** — Bun-native runtime dependency conflicts with the Node.js-first stack. Elysia's performance comes from Bun-specific optimizations that don't apply in the chosen runtime.

### Cross-References

- Related: [ssr-library.md](../../dependencies/rules/ssr-library.md), [api-schema.md](../../dependencies/rules/api-schema.md), [validation-library.md](../../dependencies/rules/validation-library.md), [javascript-runtime.md](../../dependencies/rules/javascript-runtime.md)