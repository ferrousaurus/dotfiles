---
name: ferrousaurus-stack-preferences
description: Decide on dependencies for an application. Use when either bootstrapping an application, or when deciding on a dependency to add.
---

# Ferrousaurus Stack Preferences

Evaluate all technical requirements and enforce the strict library rules defined in the `rules/` directory. Every library is classified explicitly as Go-To, Acceptable, or Unacceptable within its solution domain. You must use the documented strengths, weaknesses, and use cases to justify your choices or reject alternative requests.

## When to Apply

Reference these rules when:
- Bootstrapping a new application and selecting dependencies
- Adding a new dependency to an existing project
- Evaluating whether an existing dependency should be replaced
- Resolving conflicts between team member preferences

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
| API Layer | TanStack Start / Hono+Zod+OpenAPI | tRPC, Express, Nitro | GraphQL, gRPC, Fastify, Elysia |
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
| API Schema | Server Functions / OpenAPI types | — | tRPC (in Start) |
| Task Queue | BullMQ | pg-boss | — |
| Image Optimization | Sharp | — | Squoosh, Cloudinary |
| Secrets Management | Varlock + Coolify | — | Doppler, Infisical, dotenv, Vault |
| Code Documentation | JSDoc/TSDoc | Storybook | TypeDoc, Docusaurus |
| Table/Data Grid | TanStack Table | Mantine DataTable | AG Grid |
| Utility | es-toolkit | Radash | lodash, Underscore, Ramda |

## How to Use

Read individual rule files for detailed explanations, rationale, and cross-references:

```
rules/rendering-library.md
rules/routing-library.md
rules/ssr-library.md
...
```

Each rule file contains:
- Go-To libraries with rationale
- Acceptable libraries with conditions for use
- Unacceptable libraries with reasons for rejection
- Cross-references to related rules

## Full Compiled Document

For the complete guide with all rules expanded: `AGENTS.md`