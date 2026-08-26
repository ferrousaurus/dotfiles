---
title: Secrets Management
tags: secrets, environment variables, varlock, Coolify
---

## Secrets Management

### Go-To

- **Varlock** — AI-safe .env file management with typed schemas, leak prevention, and secrets scanning. Varlock provides `.env.schema` files that give AI agents full context without exposing secret values, built-in encryption for local overrides, and integrations with secret providers (1Password, Bitwarden, etc.). Actual secret values are stored in Coolify's environment variable management.

### Acceptable

None.

### Unacceptable

- **Doppler** — Managed secrets management service that adds vendor dependency. Varlock + Coolify provides equivalent functionality self-hosted.
- **Infisical** — Open-source secrets management that adds infrastructure complexity beyond what Varlock + Coolify provide natively.
- **dotenv** — No validation, no type safety, no leak prevention. Plain `.env` files are untyped, unvalidated, and frequently committed to git by mistake. Varlock is a strict upgrade from dotenv.
- **HashiCorp Vault** — Enterprise secrets management that is massively over-provisioned for the stack's needs. Vault's operational complexity (seal/unseal, HA setup, token management) is disproportionate to managing application secrets.

### Cross-References

- Related: [deployment-hosting.md](../../dependencies/rules/deployment-hosting.md), [cicd.md](../../dependencies/rules/cicd.md)