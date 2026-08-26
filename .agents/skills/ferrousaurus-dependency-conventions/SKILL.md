---
name: ferrousaurus-dependency-conventions
description: Selective dependency guidance for choosing, adding, or replacing application packages and services. Triggers when bootstrapping an application, adding or replacing a package, or evaluating a library choice.
license: MIT
metadata:
  author: Ferrousaurus
  version: "1.0.0"
---

# Ferrousaurus Dependency Conventions

Dependency guidance for agents, organized by solution area so they load only relevant rules. Rule files provide guidance, reasons, examples, and related rules. Each rule labels choices as Go-To, Acceptable, or Unacceptable.

## When to Apply

- Bootstrapping an application.
- Adding, replacing, or removing a package or service.
- Evaluating a library or platform choice.
- Applying a React or TypeScript rule that names a package or library.

The matching rule in this skill owns package and service choices. Coding conventions can identify which kind of tool an implementation needs, but they do not replace this skill's guidance for the relevant solution area.

## Precedence

Apply instructions in this order:

1. Repository and project instructions.
2. Dependency rules for the relevant solution area.
3. These conventions.
4. User constraints override preferences when compatible with higher-priority instructions and technical requirements.

When rules from another skill name a package or library, use this skill's matching rule to choose among options. Do not infer a library choice from a neighboring area.

## Selective Loading Procedure

1. Identify task signals: package names, framework APIs, rule terms, solution domain, and requested change.
2. Inspect the matching topic index below. Use rule filenames and each candidate file's available frontmatter (`title`, optional `impact`, and `tags`) to select rules.
3. Load only rule files matching identified signals. Do not load all rules by default.
4. Load a related rule only when the selected rule references it, the task crosses its subject boundary, or resolving the task requires its context. Use related links as navigation, not as an instruction to load every related rule.
5. Report selected rule paths in the response, along with any related paths additionally loaded.

## Topic Index

| Rule group | Rule files | Trigger terms |
| --- | --- | --- |
| API and data | `api-client`, `api-layer`, `api-schema`, `database`, `orm`, `validation-library` | API, fetch, REST, OpenAPI, database, ORM, Prisma, schema, validation |
| Application libraries | `animation`, `async-state-management`, `auth-library`, `component-library`, `form-library`, `rendering-library`, `routing-library`, `ssr-library`, `table-data-grid`, `utility` | React, router, SSR, auth, forms, components, animation, async state, tables, utilities |
| Tooling | `bundler`, `code-documentation`, `formatter`, `linter`, `package-manager`, `javascript-runtime`, `testing`, `monorepo-tooling` | Vite, formatter, linter, package manager, Node, tests, workspace, monorepo |
| Operations | `cicd`, `container-orchestration`, `deployment-hosting`, `file-storage-uploads`, `image-optimization`, `secrets-management`, `task-queue` | deploy, CI/CD, Docker, storage, images, secrets, jobs |
| Platform services | `css-styling`, `email`, `local-state-management`, `realtime-websockets` | CSS, styling, email, Zustand, Jotai, real-time, WebSocket |

Paths: `topics/dependencies/rules/<rule-file>.md`. Always inspect the matching rule for the relevant solution area.

## Rule Selection Output

When applying this skill, report paths selected, for example:

```text
Selected rules:
- topics/dependencies/rules/async-state-management.md
- topics/dependencies/rules/api-client.md
Related rules loaded:
- topics/dependencies/rules/validation-library.md
```
