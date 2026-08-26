---
title: Type-Safe API Client
tags: API client, fetch, HTTP, TanStack Query
---

## Type-Safe API Client

### Go-To

- **Native fetch + TanStack Query** — Use the browser and Node.js built-in `fetch()` API for HTTP requests, with TanStack Query managing caching, refetching, and state. This avoids library lock-in, keeps the client layer minimal, and leverages the Go-To async state management solution.

### Acceptable

None.

### Unacceptable

- **ky** — Thin fetch wrapper that adds syntactic sugar (hooks, retry, prefix) without solving a real problem. The built-in `fetch` API plus TanStack Query handles these concerns.
- **axios** — Heavy HTTP client with a different API shape than `fetch` (response wrapping, interceptor model). Adds bundle size and an abstraction layer that isn't needed when `fetch` is standardized across browsers and Node.js.
- **got** — Node.js-only HTTP client. For server-side requests, native `fetch` in Node.js 18+ eliminates the need for a separate library.

### Cross-References

- Related: [async-state-management.md](../../dependencies/rules/async-state-management.md), [api-layer.md](../../dependencies/rules/api-layer.md), [api-schema.md](../../dependencies/rules/api-schema.md)
