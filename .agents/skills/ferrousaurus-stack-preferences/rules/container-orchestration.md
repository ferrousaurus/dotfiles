---
title: Container / Docker Orchestration
tags: Docker, containers, orchestration, Docker Compose, Kubernetes
---

## Container / Docker Orchestration

### Go-To

- **Docker Compose** — Multi-container orchestration on a single host. Docker Compose provides simple, declarative container configuration with dependency management, networking, and volume mounting. Pairs with Coolify for deployment management.

### Acceptable

- **Aspire** — When more complicated orchestration logic is needed, particularly for .NET services or multi-service development environments. Aspire provides service discovery, health checks, and orchestration beyond what Docker Compose offers.

### Unacceptable

- **Kubernetes** — Excessive complexity for self-hosted Coolify deployments. Kubernetes' operational overhead (etcd, control plane, RBAC, manifests) is disproportionate to the needs of a self-hosted single-server or small cluster setup.
- **Podman** — Rootless Docker alternative that provides no meaningful advantage over Docker for the stack. Podman's compatibility mode and different CLI semantics add friction without solving a problem Docker Compose doesn't already handle.

### Cross-References

- Related: [deployment-hosting.md](./deployment-hosting.md), [cicd.md](./cicd.md), [database.md](./database.md), [file-storage-uploads.md](./file-storage-uploads.md)