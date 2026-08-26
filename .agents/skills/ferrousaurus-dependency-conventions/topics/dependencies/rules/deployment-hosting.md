---
title: Deployment / Hosting Platform
tags: deployment, hosting, coolify, self-hosted
---

## Deployment / Hosting Platform

### Go-To

- **Self-hosted Coolify** — Open-source PaaS alternative that provides Git-based deployments, Docker orchestration, SSL, and database management on your own infrastructure. Coolify pairs with Docker Compose for full control over deployment, scaling, and costs. No vendor lock-in.

### Acceptable

None.

### Unacceptable

- **Vercel** — Vendor lock-in, pricing at scale, and optimized for Next.js. Vercel's edge network and serverless model add complexity that self-hosted Coolify eliminates.
- **Cloudflare Workers/Pages** — Proprietary runtime environment with compatibility limitations. Cloudflare's edge model is powerful but introduces vendor-specific APIs and deployment constraints.
- **AWS (Amplify, Lambda, ECS, etc.)** — Excessive complexity for small-to-medium projects. AWS's service sprawl and configuration overhead don't justify the flexibility when Coolify + Docker Compose provides sufficient control.
- **Railway** — Simpler than AWS but still managed PaaS with vendor lock-in and pricing that scales unpredictably.
- **Fly.io** — Container-based edge deploys with persistent volumes, but adds vendor-specific configuration and pricing structures that self-hosting eliminates.
- **DigitalOcean App Platform** — Managed PaaS that sacrifices control for convenience. When self-hosting is an option, the convenience premium isn't justified.

### Cross-References

- Related: [container-orchestration.md](../../dependencies/rules/container-orchestration.md), [cicd.md](../../dependencies/rules/cicd.md), [secrets-management.md](../../dependencies/rules/secrets-management.md)
