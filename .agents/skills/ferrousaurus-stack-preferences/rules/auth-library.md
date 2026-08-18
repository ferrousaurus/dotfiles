---
title: Auth Library
tags: authentication, authorization, betterauth
---

## Auth Library

### Go-To

- **BetterAuth** — Modern, type-safe authentication library for Node.js. Self-hostable, framework-agnostic, and provides a comprehensive set of auth features (OAuth, MFA, session management) without vendor lock-in. Pairs well with the self-hosted Coolify deployment model.

### Acceptable

None.

### Unacceptable

- **Next.js Auth (NextAuth / Auth.js)** — Tightly coupled to the Next.js ecosystem. NextAuth assumes Next.js conventions (API routes, middleware) and does not integrate cleanly with the TanStack Start + Hono stack. Using Next.js auth would require pulling in Next.js dependencies that conflict with the chosen architecture.

### Cross-References

- Related: [ssr-library.md](./ssr-library.md), [api-layer.md](./api-layer.md), [database.md](./database.md)