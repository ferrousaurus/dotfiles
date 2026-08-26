---
title: File Storage / Uploads
tags: file storage, uploads, S3, MinIO
---

## File Storage / Uploads

### Go-To

- **MinIO** — Self-hosted, S3-compatible object storage deployed on Coolify. MinIO provides the full S3 API, enabling use of standard AWS SDKs and S3 clients without vendor lock-in or egress fees. Pairs with the self-hosted deployment model.

### Acceptable

None.

### Unacceptable

- **AWS S3** — Introduces AWS vendor dependency, egress costs, and requires AWS credentials management. MinIO provides the same S3-compatible API self-hosted.
- **Cloudflare R2** — S3-compatible but introduces Cloudflare vendor dependency. Not self-hosted, conflicting with the Coolify deployment model.
- **Uploadthing** — Managed file upload abstraction that is not self-hostable. Adds vendor dependency and cost for functionality that MinIO + a direct upload endpoint handles natively.
- **Local filesystem** — Does not persist reliably between container restarts in Docker-based deployments. Local filesystem storage is ephemeral in containerized environments and should not be used for persistent data.

### Cross-References

- Related: [deployment-hosting.md](../../dependencies/rules/deployment-hosting.md), [container-orchestration.md](../../dependencies/rules/container-orchestration.md), [image-optimization.md](../../dependencies/rules/image-optimization.md)