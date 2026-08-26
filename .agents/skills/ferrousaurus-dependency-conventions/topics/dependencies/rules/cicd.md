---
title: CI/CD
tags: CI, CD, continuous integration, continuous deployment, coolify, GitHub Actions
---

## CI/CD

### Go-To

- **Coolify auto-deploy on push** — Coolify's built-in Git integration triggers deployments on push to configured branches. This eliminates the need for external CI/CD pipelines for most deployment workflows. Configure your repository in Coolify, set the branch, and deployments happen automatically.

### Acceptable

- **GitHub Actions** — When more complex CI/CD pipelines are needed (test suites, linting, staging environments, multi-step approval) and the git repository is hosted on GitHub. GitHub Actions integrates natively with GitHub PRs, issues, and releases.
- **Forgejo Actions** — When more complex CI/CD pipelines are needed and the git repository is hosted on Forgejo. Forgejo Actions provides GitHub Actions-compatible workflows for self-hosted git infrastructure.

### Unacceptable

- **GitLab CI** — Requires GitLab's ecosystem and adds complexity that Coolify's auto-deploy or GitHub/Forgejo Actions handle more simply for this stack.
- **Drone CI** — Container-native CI that adds operational overhead for a pipeline that Coolify auto-deploy and GitHub/Forgejo Actions cover adequately.
- **Jenkins** — Legacy CI/CD with excessive configuration overhead, plugin management, and maintenance burden. Jenkins' flexibility is disproportionate to the needs of this stack.

### Cross-References

- Related: [deployment-hosting.md](../../dependencies/rules/deployment-hosting.md), [container-orchestration.md](../../dependencies/rules/container-orchestration.md), [linter.md](../../dependencies/rules/linter.md), [testing.md](../../dependencies/rules/testing.md)
