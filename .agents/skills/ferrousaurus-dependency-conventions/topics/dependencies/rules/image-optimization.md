---
title: Image Optimization
tags: image optimization, sharp, image processing
---

## Image Optimization

### Go-To

- **Sharp** — High-performance Node.js image processing library. Sharp handles resizing, format conversion (JPEG, PNG, WebP, AVIF), compression, and metadata stripping. It is fast, well-maintained, and integrates with any Node.js server.

### Acceptable

None.

### Unacceptable

- **Squoosh** — WebAssembly-based image processor designed for browser use. Squoosh's Node.js support is secondary and its API is less comprehensive than Sharp for server-side image processing pipelines.
- **Cloudinary** — Managed image transformation service that introduces vendor dependency, egress costs, and data privacy concerns for self-hosted deployments. Sharp handles all image processing locally.

### Cross-References

- Related: [file-storage-uploads.md](../../dependencies/rules/file-storage-uploads.md), [deployment-hosting.md](../../dependencies/rules/deployment-hosting.md)
