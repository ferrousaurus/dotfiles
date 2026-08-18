# Ferrousaurus Stack Preferences

**Version 1.0.0**
Ferrousaurus
May 2026

> **Note:**
> This document is for agents and LLMs to follow when selecting dependencies for an application. Every library is classified as Go-To, Acceptable, or Unacceptable. Always prefer Go-To. Use Acceptable only when the stated conditions apply. Never use Unacceptable libraries.

---

## Quick Reference

| Domain | Go-To | Acceptable | Unacceptable |
|--------|-------|------------|--------------|
| Rendering Library | React | Svelte, Solid (performance) | Vue, HTMX |
| Routing Library | TanStack Router | — | React Router, Next.js |
| SSR Library | TanStack Start | — | Astro, Next.js |
| Bundler | Vite 8 | — | Vite ≤7, Webpack |
| Linter | Oxlint | — | Biome, ESLint |
| Formatter | Oxfmt | — | Biome, Prettier |
| Async State Mgmt | TanStack Query | — | Redux RTK |
| Local State Mgmt | Zustand | Jotai (many instances) | Redux |
| Auth Library | BetterAuth | — | Next.js Auth |
| Component Library | Mantine | Shadcn (custom look) | MUI |
| Form Library | TanStack Form | React Hook Form (uncontrolled) | — |
| Validation Library | Zod | — | Yup, Joi |
| ORM | Prisma | Drizzle (no preprocess) | — |
| CSS/Styling | CSS Modules (w/ Mantine) | Tailwind (w/ Shadcn/custom) | Panda CSS, Vanilla Extract, Styled Components, Emotion, Inline Styles |
| Testing | Vitest + Testing Library | Playwright, Storybook | Jest, Cypress |
| Package Manager | pnpm | Deno (TS scripts) | Bun, npm, Yarn |
| Deployment/Hosting | Self-hosted Coolify | — | Vercel, Cloudflare, AWS, Railway, Fly.io, DigitalOcean |
| API Layer | TanStack Start Server Functions / Hono+Zod+OpenAPI | tRPC, Express, Nitro | GraphQL, gRPC, Fastify, Elysia |
| Database | PostgreSQL | SQLite, MongoDB, Valkey | MySQL |
| Monorepo Tooling | pnpm workspaces | Turborepo, Nx | Lerna |
| Animation | Motion (Framer Motion) | CSS transitions | GSAP, React Spring |
| Real-time/WebSockets | SSE / Socket.IO | ws | Liveblocks, Ably, Pusher |
| Email | Resend | — | React Email, MJML, Nodemailer, SendGrid |
| File Storage/Uploads | MinIO (self-hosted) | — | AWS S3, Cloudflare R2, Uploadthing, Local FS |
| CI/CD | Coolify auto-deploy | GitHub Actions, Forgejo Actions | GitLab CI, Drone CI, Jenkins |
| Container/Orchestration | Docker Compose | Aspire | Kubernetes, Podman |
| JS Runtime | Node.js | Deno (TS scripts) | Bun |
| API Client | Native fetch + TanStack Query | — | ky, axios, got |
| API Schema | TanStack Start Server Functions / OpenAPI types | — | tRPC (in Start) |
| Task Queue | BullMQ | pg-boss | — |
| Image Optimization | Sharp | — | Squoosh, Cloudinary |
| Secrets Management | Varlock + Coolify | — | Doppler, Infisical, dotenv, Vault |
| Code Documentation | JSDoc/TSDoc | Storybook | TypeDoc, Docusaurus |
| Table/Data Grid | TanStack Table | Mantine DataTable | AG Grid |
| Utility | es-toolkit | Radash | lodash, Underscore, Ramda |

---

## Detailed Rules by Domain

### 1. Rendering Library

**Go-To: React** — Industry standard, massive ecosystem, first-class support from all other Go-To libraries (TanStack Router, Start, Query, Form, Mantine). The entire stack is optimized for React.

**Acceptable:**
- **Svelte** — When performance is the primary concern and the project can accept a smaller ecosystem.
- **Solid** — When performance is the primary concern and fine-grained reactivity without a virtual DOM is desired.

**Unacceptable:**
- **Vue** — Does not align with the TanStack-centric architecture. Separate reactivity model and ecosystem.
- **HTMX** — Trades frontend complexity for server coupling, conflicting with the type-safe API-first approach.

See: [rendering-library.md](./rules/rendering-library.md)

---

### 2. Routing Library

**Go-To: TanStack Router** — Fully type-safe routing with first-class TypeScript, built-in search params validation, seamless TanStack ecosystem integration.

**Unacceptable:**
- **React Router** — Lacks type-safety guarantees. Untyped search params, no compile-time route validation.
- **Next.js** — Imposes file-based routing and full-framework coupling. Conflicts with composable library preferences.

See: [routing-library.md](./rules/routing-library.md)

---

### 3. SSR Library

**Go-To: TanStack Start** — Full-stack React framework built on TanStack Router and Vite. Type-safe server functions, file-based routing, SSR, seamless TanStack ecosystem integration.

**Unacceptable:**
- **Astro** — Island architecture differs from React-first approach. Multi-framework support adds unnecessary complexity.
- **Next.js** — Opinionated conventions conflict with TanStack Router, Hono APIs, and composable tooling preferences.

See: [ssr-library.md](./rules/ssr-library.md)

---

### 4. Bundler

**Go-To: Vite 8** — Fast HMR, native ESM development, excellent plugin ecosystem, first-class TanStack Start support.

**Unacceptable:**
- **Vite ≤7** — Lacks performance improvements and features of Vite 8. Always use latest major.
- **Webpack** — Slow builds, complex configuration, outdated module bundling compared to Vite.

See: [bundler.md](./rules/bundler.md)

---

### 5. Linter

**Go-To: Oxlint** — Rust-based, 10-100x faster than ESLint, excellent rule coverage, integrates with Oxc toolchain (Oxfmt).

**Unacceptable:**
- **Biome** — Bundles linting with formatting, conflicts with separate specialized tools (Oxlint + Oxfmt).
- **ESLint** — Slow JavaScript-based, heavy configuration overhead, plugin system adds complexity.

See: [linter.md](./rules/linter.md)

---

### 6. Formatter

**Go-To: Oxfmt** — Rust-based, 50-100x faster than Prettier, part of Oxc toolchain alongside Oxlint.

**Unacceptable:**
- **Biome** — Bundles formatting with linting. Separate specialized tools preferred.
- **Prettier** — Slow JavaScript-based formatter. Performance bottleneck in large projects.

See: [formatter.md](./rules/formatter.md)

---

### 7. Asynchronous State Management

**Go-To: TanStack Query** — Purpose-built for server state with automatic caching, background refetching, stale-while-revalidate, optimistic updates. Eliminates manual cache management.

**Unacceptable:**
- **Redux RTK** — Brings entire Redux paradigm as baggage. Boilterplate and indirection unnecessary when TanStack Query provides a simpler solution.

See: [async-state-management.md](./rules/async-state-management.md)

---

### 8. Local State Management

**Go-To: Zustand** — Minimal, unopinionated, performant. Simple API (create store, use hook), subscriptions prevent unnecessary re-renders.

**Acceptable:**
- **Jotai** — When many independent instances of state are needed (per-row, per-widget). Atom-based model scales horizontally.

**Unacceptable:**
- **Redux** — Excessive boilerplate for local state. Single-store pattern adds complexity without proportional benefit.

See: [local-state-management.md](./rules/local-state-management.md)

---

### 9. Auth Library

**Go-To: BetterAuth** — Modern, type-safe, self-hostable, framework-agnostic. Comprehensive auth features (OAuth, MFA, sessions) without vendor lock-in. Pairs with self-hosted Coolify.

**Unacceptable:**
- **Next.js Auth (NextAuth/Auth.js)** — Tightly coupled to Next.js ecosystem. Assumes Next.js conventions, doesn't integrate with TanStack Start + Hono.

See: [auth-library.md](./rules/auth-library.md)

---

### 10. Component Library

**Go-To: Mantine** — 100+ components, hooks, theming system, excellent TypeScript support, integrates with CSS Modules.

**Acceptable:**
- **Shadcn/ui** — When a highly-customized visual design is required. Copy-paste components, Radix UI primitives, Tailwind CSS styling. Only when Mantine's design cannot achieve the desired look.

**Unacceptable:**
- **MUI** — Heavy bundle, Material Design hard to override, complex API, Emotion/styled-components conflicts with CSS Modules approach.

See: [component-library.md](./rules/component-library.md)

---

### 11. Form Library

**Go-To: TanStack Form** — Headless, type-safe, fine-grained reactivity, seamless Zod integration. Same composable philosophy as TanStack ecosystem.

**Acceptable:**
- **React Hook Form** — When uncontrolled fields are required. Minimizes re-renders for large forms.

See: [form-library.md](./rules/form-library.md)

---

### 12. Validation Library

**Go-To: Zod** — TypeScript-first, excellent type inference, single source of truth for runtime validation and types. Integrates with TanStack Form, TanStack Start, Hono OpenAPI, BetterAuth.

**Unacceptable:**
- **Yup** — Inferior TypeScript type inference compared to Zod.
- **Joi** — Not designed for TypeScript-first development. Lacks type inference.

See: [validation-library.md](./rules/validation-library.md)

---

### 13. ORM

**Go-To: Prisma** — Type-safe, intuitive schema language, excellent migration system, comprehensive query API. Types generated from schema stay in sync.

**Acceptable:**
- **Drizzle** — When no preprocess/build step is desired. "If it compiles, it works" approach. SQL-first schema definition.

See: [orm.md](./rules/orm.md)

---

### 14. CSS/Styling

**Go-To: CSS Modules (with Mantine)** — Locally scoped, no runtime overhead, native Vite support, pairs with Mantine theming.

**Acceptable:**
- **Tailwind CSS** — When using Shadcn or when highly-customized CSS is needed. Tailwind is Shadcn's styling backbone. Do not mix Tailwind and Mantine on the same project.

**Unacceptable:**
- **Panda CSS, Vanilla Extract, Styled Components, Emotion, Inline Styles** — See rule file for details.

See: [css-styling.md](./rules/css-styling.md)

---

### 15. Testing

**Go-To: Vitest + Testing Library** — Vite-native test runner with fast startup, ESM-first. Testing Library encourages testing user behavior over implementation.

**Acceptable:**
- **Playwright** — For headless browser E2E testing.
- **Storybook** — When the web app is needed for visual development.

**Unacceptable:**
- **Jest** — Slower, configuration-heavy, duplicates Vite's transform pipeline.
- **Cypress** — Architecturally slower than Playwright, in-browser limitations.

See: [testing.md](./rules/testing.md)

---

### 16. Package Manager

**Go-To: pnpm** — Fast, disk-efficient, strict symlinked node_modules prevents phantom dependencies, first-class workspace support.

**Acceptable:**
- **Deno** — When running TS scripts is simpler than bundling (CLI tools, scripts).

**Unacceptable:**
- **Bun** — Compatibility issues, less mature ecosystem.
- **npm** — Slower, less disk-efficient, flat node_modules create phantom dependency risks.
- **Yarn** — Ecosystem fragmented between v1 and v2+. pnpm provides same benefits without fragmentation.

See: [package-manager.md](./rules/package-manager.md)

---

### 17. Deployment/Hosting

**Go-To: Self-hosted Coolify** — Open-source PaaS alternative. Git-based deployments, Docker orchestration, SSL, database management. No vendor lock-in.

**Unacceptable:**
- **Vercel, Cloudflare, AWS, Railway, Fly.io, DigitalOcean** — See rule file for details.

See: [deployment-hosting.md](./rules/deployment-hosting.md)

---

### 18. API Layer

**Go-To:**
- **TanStack Start Server Functions** — When on TanStack Start. Type-safe RPC without additional tooling.
- **Hono + Zod + OpenAPI** — When not on TanStack Start. Fast, lightweight, first-class OpenAPI support, Zod schema reuse.

**Acceptable:**
- **tRPC** — When framework lacks simple RPC (unacceptable in TanStack Start).
- **Express** — When maturity is critical.
- **Nitro** — Within TanStack Start ecosystem.

**Unacceptable:**
- **GraphQL, gRPC, Fastify, Elysia** — See rule file for details.

See: [api-layer.md](./rules/api-layer.md)

---

### 19. Database

**Go-To: PostgreSQL** — Most capable open-source relational DB. JSONB, full-text search, CTEs, window functions, extensions. First-class Prisma/Drizzle support.

**Acceptable:**
- **SQLite** — When data must be co-located with the application.
- **MongoDB** — Only when document DB strengths outweigh weaknesses.
- **Valkey/Redis** — For transient, non-fail-safe data (caches). Prefer Valkey for server instance.

**Unacceptable:**
- **MySQL** — PostgreSQL provides superior features with comparable performance. No benefit.

See: [database.md](./rules/database.md)

---

### 20. Monorepo Tooling

**Go-To: pnpm workspaces** — Simple, lightweight, built into Go-To package manager. Sufficient for most projects.

**Acceptable:**
- **Turborepo** — When developing Next.js apps in a monorepo. pnpm workspace still preferred.
- **Nx** — Last resort for complex monorepos with heavy inter-dependencies.

**Unacceptable:**
- **Lerna** — Superseded by pnpm workspaces and Turborepo/Nx.

See: [monorepo-tooling.md](./rules/monorepo-tooling.md)

---

### 21. Animation

**Go-To: Motion (Framer Motion)** — Declarative React animation, layout animations, gesture support, spring physics.

**Acceptable:**
- **CSS transitions/keyframes** — Simple hover effects, visibility toggles, state-driven transitions.

**Unacceptable:**
- **GSAP** — Imperative, operates outside React's rendering model.
- **React Spring** — Steeper learning curve, harder to preview and tune.

See: [animation.md](./rules/animation.md)

---

### 22. Real-time/WebSockets

**Go-To:**
- **SSE** — For simple server-to-client real-time data push.
- **Socket.IO** — For full-duplex real-time communication (chat, collaboration, dashboards).

**Acceptable:**
- **ws** — When low-level WebSocket control is needed.

**Unacceptable:**
- **Liveblocks, Ably, Pusher** — Vendor dependency, not self-hosted.

See: [realtime-websockets.md](./rules/realtime-websockets.md)

---

### 23. Email

**Go-To: Resend** — Modern email API, excellent DX, TypeScript SDK, handles deliverability and DKIM/SPF/DMARC.

**Unacceptable:**
- **React Email, MJML, Nodemailer, SendGrid** — See rule file for details.

See: [email.md](./rules/email.md)

---

### 24. File Storage/Uploads

**Go-To: MinIO (self-hosted on Coolify)** — S3-compatible, no vendor lock-in, no egress fees. Same API as AWS S3.

**Unacceptable:**
- **AWS S3, Cloudflare R2, Uploadthing** — Vendor dependency, not self-hosted.
- **Local filesystem** — Ephemeral in containerized deployments.

See: [file-storage-uploads.md](./rules/file-storage-uploads.md)

---

### 25. CI/CD

**Go-To: Coolify auto-deploy on push** — Built-in Git integration, automatic deployments on push to configured branches.

**Acceptable:**
- **GitHub Actions** — When complex CI/CD is needed and repo is on GitHub.
- **Forgejo Actions** — When complex CI/CD is needed and repo is on Forgejo.

**Unacceptable:**
- **GitLab CI, Drone CI, Jenkins** — See rule file for details.

See: [cicd.md](./rules/cicd.md)

---

### 26. Container/Orchestration

**Go-To: Docker Compose** — Multi-container orchestration, declarative config, dependency management. Pairs with Coolify.

**Acceptable:**
- **Aspire** — When more complex orchestration logic is needed.

**Unacceptable:**
- **Kubernetes** — Excessive complexity for self-hosted single-server/small cluster.
- **Podman** — No meaningful advantage over Docker for this stack.

See: [container-orchestration.md](./rules/container-orchestration.md)

---

### 27. JavaScript Runtime

**Go-To: Node.js** — Largest ecosystem, best tooling support, first-class support from all stack libraries.

**Acceptable:**
- **Deno** — When running TS scripts is simpler than bundling. Same condition as package manager.

**Unacceptable:**
- **Bun** — Compatibility issues, ecosystem maturity gap.

See: [javascript-runtime.md](./rules/javascript-runtime.md)

---

### 28. API Client

**Go-To: Native fetch + TanStack Query** — Built-in `fetch()` API with TanStack Query managing caching, refetching, and state. No library lock-in.

**Unacceptable:**
- **ky, axios, got** — See rule file for details.

See: [api-client.md](./rules/api-client.md)

---

### 29. API Schema

**Go-To:**
- **TanStack Start Server Functions** — When on TanStack Start. End-to-end type safety without separate schema layer.
- **OpenAPI-generated types** — When on Hono REST API. Zod schemas generate OpenAPI specs, enabling type-safe client generation.

**Unacceptable:**
- **tRPC** — Unnecessary in TanStack Start (use Server Functions). Conflicts with stack's API-first approach.

See: [api-schema.md](./rules/api-schema.md)

---

### 30. Task Queue / Background Jobs

**Go-To: BullMQ** — Redis-based, retries, rate limiting, scheduled jobs. Leverages existing Valkey/Redis instance.

**Acceptable:**
- **pg-boss** — PostgreSQL-based. Use when project doesn't run Valkey/Redis.

See: [task-queue.md](./rules/task-queue.md)

---

### 31. Image Optimization

**Go-To: Sharp** — High-performance, handles resizing, format conversion, compression, metadata stripping. Well-maintained.

**Unacceptable:**
- **Squoosh** — Browser-focused, less comprehensive API for server-side.
- **Cloudinary** — Vendor dependency, egress costs, privacy concerns for self-hosted.

See: [image-optimization.md](./rules/image-optimization.md)

---

### 32. Secrets Management

**Go-To: Varlock + Coolify** — AI-safe .env schemas, leak prevention, type safety. Actual secrets stored in Coolify's environment variable management.

**Unacceptable:**
- **Doppler, Infisical, dotenv, HashiCorp Vault** — See rule file for details.

See: [secrets-management.md](./rules/secrets-management.md)

---

### 33. Code Documentation

**Go-To: JSDoc/TSDoc** — Inline documentation, editor IntelliSense, stays close to implementation. TypeScript's type system reduces need for external doc tools.

**Acceptable:**
- **Storybook** — When its web app is needed for visual development.

**Unacceptable:**
- **TypeDoc** — Produces static docs that drift from code. JSDoc provides immediate editor value.
- **Docusaurus** — Significant tooling overhead for app projects.

See: [code-documentation.md](./rules/code-documentation.md)

---

### 34. Table/Data Grid

**Go-To: TanStack Table** — Headless, type-safe, sorting, filtering, pagination, row selection. Full rendering control, integrates with Mantine.

**Acceptable:**
- **Mantine DataTable** — When TanStack Table's flexibility is a hindrance. Pre-built Mantine component.

**Unacceptable:**
- **AG Grid** — Heavy bundle, commercial licensing for advanced features, conflicts with Mantine/CSS Modules.

See: [table-data-grid.md](./rules/table-data-grid.md)

---

### 35. Utility

**Go-To: es-toolkit** — Modern, tree-shakeable, TypeScript-first utility library. Small bundle, high-performance implementations of debounce, throttle, deep merge, clone, equality, partition, groupBy, keyBy, and more. Replaces lodash entirely with better DX and no bundle bloat.

**Acceptable:**
- **Radash** — When es-toolkit doesn't cover a specific need and native APIs are insufficient. Modern, tree-shakeable, TypeScript-first, but smaller API surface than es-toolkit.

**Unacceptable:**
- **lodash** — Monolithic architecture, poor tree-shaking in practice, large bundle cost even with per-function imports. Completely superseded by es-toolkit.
- **Underscore** — Same lineage as lodash, same problems: monolithic, poor tree-shaking, large bundle footprint.
- **Ramda** — Niche FP-first API that conflicts with the stack's TypeScript/imperative style. Small ecosystem, adds cognitive overhead.

See: [utility.md](./rules/utility.md)