---
title: Asynchronous State Management
tags: async, state, data fetching, tanstack query
---

## Asynchronous State Management

### Go-To

- **TanStack Query** — Purpose-built for server state management with automatic caching, background refetching, stale-while-revalidate, optimistic updates, and seamless integration with the TanStack ecosystem. Eliminates the need for manual cache management in async state.

### Acceptable

None.

### Unacceptable

- **Redux RTK** — Redux Toolkit Query addresses async state, but brings the entire Redux paradigm (actions, reducers, slices) as baggage. The boilerplate and indirection of Redux are unnecessary when TanStack Query provides a simpler, more focused solution.

### Cross-References

- Related: [local-state-management.md](./local-state-management.md), [api-client.md](./api-client.md), [validation-library.md](./validation-library.md), [utility.md](./utility.md)