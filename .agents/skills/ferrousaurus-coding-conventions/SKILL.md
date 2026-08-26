---
name: ferrousaurus-coding-conventions
description: Selective coding conventions for React, TypeScript, and dependency choices. Triggers when writing, reviewing, or refactoring React or TypeScript code, or when selecting, adding, or replacing application dependencies.
license: MIT
metadata:
  author: Ferrousaurus
  version: "1.0.0"
---

# Ferrousaurus Coding Conventions

Coding conventions for agents, split into selectively loadable `react`, `typescript`, and `dependencies` topics. Rule files contain canonical guidance, rationale, examples, and related rules.

## When to Apply

- **React:** `.tsx` or `.jsx` components, hooks, rendering, effects, state, composition, or React project structure.
- **TypeScript:** `.ts` or `.tsx` types, functions, safety, nullability, control flow, async code, modules, style, or naming.
- **Dependencies:** bootstrapping an application, adding or replacing a package, or evaluating a library choice.

For `.tsx`, load matching React rules first, then matching TypeScript rules. React-specific rules override generic TypeScript rules where they conflict.

## React Exceptions

React projects intentionally override two generic TypeScript module rules:

- Use type-based directories such as `components/`, `hooks/`, and `utils/`, not the TypeScript `module-flat-by-feature` layout.
- Use PascalCase for component filenames, while hooks, utilities, and types remain camelCase; this overrides `module-file-naming` only for component files.

React state and data rules determine the appropriate React primitive. When they name a library, the matching dependency rule is authoritative for that library choice.

## Precedence

Apply instructions in this order:

1. Repository and project instructions.
2. React-specific rules, which override generic TypeScript rules for `.tsx` files.
3. Source-specific dependency rules, which govern library choices in their solution domain.
4. These conventions.
5. User constraints override preferences when compatible with higher-priority instructions and technical requirements.

## Selective Loading Procedure

1. Identify task signals: file extensions, framework APIs, rule terms, package or solution domain, and requested change.
2. Inspect the matching topic index below. Use rule filenames and each candidate file's available frontmatter (`title`, optional `impact`, and `tags`) to select rules.
3. Load only rule files matching identified signals. Do not load all rules by default.
4. Load a related rule only when the selected rule references it, the task crosses its subject boundary, or resolving the task requires its context. Use related links as navigation, not as an instruction to load every related rule.
5. Report selected rule paths in the response, along with any related paths additionally loaded.

## Topic Indexes

### React

| Prefix | Rule files | Trigger terms |
| --- | --- | --- |
| `component-` | `component-arrow-vs-declaration`, `component-exports`, `component-function-over-class`, `component-no-react-fc`, `component-server-client-boundary` | component, export, props, class, hook, server, client, RSC |
| `state-` | `state-key-reset`, `state-no-context-runtime`, `state-no-prop-drilling`, `state-use-ref-only`, `state-usereducer-nontrivial` | state, useState, useReducer, Context, props, store, useRef |
| `effect-` | `effect-external-systems-only`, `effect-no-derived-state`, `effect-sync-external-store` | useEffect, derived state, external system, subscription |
| `data-` | `data-colocation`, `data-tanstack-query-only` | server state, fetch, query, TanStack Query, data colocation |
| `composition-` | `composition-children-type`, `composition-controlled-default`, `composition-error-boundaries`, `composition-fragments`, `composition-slots-over-compound` | children, controlled, form, boundary, Fragment, slots, compound |
| `hook-` | `hook-custom-conventions`, `hook-memoize-sparingly` | custom hook, `use`, memoization, `useMemo`, `useCallback` |
| `render-` | `render-conditional-patterns`, `render-early-returns`, `render-no-nested-ternaries` | JSX, conditional, ternary, loading, error, empty |
| `file-` | `file-naming`, `file-type-directories` | file name, PascalCase, camelCase, components directory |

Paths: `topics/react/rules/<rule-file>.md`.

### TypeScript

| Prefix | Rule files | Trigger terms |
| --- | --- | --- |
| `function-` | `function-callback-convention`, `function-default-exports`, `function-inline-callbacks`, `function-no-classes`, `function-no-explicit-return-type`, `function-option-object-pattern`, `function-parameters-always-typed`, `function-pure-arrow` | function, callback, return type, class, export, parameters, pure, side effect |
| `type-` | `type-as-const`, `type-assertion-ban`, `type-composition-intersection`, `type-const-array-enum`, `type-enum-ban`, `type-extract-named-types`, `type-generic-descriptive-names`, `type-generic-on-function`, `type-guard-functions`, `type-non-null-assertion-ban`, `type-readonly-params`, `type-satisfies-usage`, `type-type-over-interface`, `type-utility-preference` | type, interface, enum, generic, assertion, `as const`, satisfies, guard, readonly, utility |
| `safe-` | `safe-const-let-var`, `safe-for-of-const`, `safe-immutable-array-methods`, `safe-never-mutate-arguments`, `safe-object-spread-update`, `safe-runtime-validation` | mutation, immutable, const, let, array, spread, validation, Zod, Valibot |
| `nullability-` | `nullability-failure-type`, `nullability-nullish-coalescing`, `nullability-optional-chaining`, `nullability-optional-params`, `nullability-undefined-default` | null, undefined, optional, `?.`, `??`, failure |
| `control-` | `control-early-return`, `control-nested-ternary-ban`, `control-object-map`, `control-switch-braces`, `control-ternary` | early return, nesting, ternary, object map, switch |
| `async-` | `async-await-style`, `async-catch-over-trycatch`, `async-iteration-pure`, `async-iteration-side-effects`, `async-parallelize-independent`, `async-promise-all-settled` | async, await, Promise, catch, iteration, parallel |
| `module-` | `module-file-naming`, `module-file-organization`, `module-flat-by-feature`, `module-import-order`, `module-import-style`, `module-inline-exports`, `module-no-barrel-exports`, `module-one-export-per-file` | module, import, export, barrel, file organization, feature |
| `style-` | `style-backtick-strings`, `style-boolean-prefix`, `style-catch-typed`, `style-comments-why-not-what`, `style-computed-properties`, `style-destructuring-multi`, `style-destructuring-params`, `style-dot-notation`, `style-error-classes`, `style-implicit-return`, `style-jsdoc-when-needed`, `style-method-chaining`, `style-multiline-objects`, `style-naming-conventions`, `style-no-private-prefix`, `style-no-swap-destructuring`, `style-object-shorthand`, `style-parenthesized-object-return`, `style-rest-spread`, `style-semicolon-always`, `style-throw-docs`, `style-trailing-commas` | naming, comments, JSDoc, strings, semicolons, commas, destructuring, objects, errors |

Paths: `topics/typescript/rules/<rule-file>.md`.

### Dependencies

| Rule group | Rule files | Trigger terms |
| --- | --- | --- |
| API and data | `api-client`, `api-layer`, `api-schema`, `database`, `orm`, `validation-library` | API, fetch, REST, OpenAPI, database, ORM, Prisma, schema, validation |
| Application libraries | `animation`, `async-state-management`, `auth-library`, `component-library`, `form-library`, `rendering-library`, `routing-library`, `ssr-library`, `table-data-grid`, `utility` | React, router, SSR, auth, forms, components, animation, async state, tables, utilities |
| Tooling | `bundler`, `code-documentation`, `formatter`, `linter`, `package-manager`, `javascript-runtime`, `testing`, `monorepo-tooling` | Vite, formatter, linter, package manager, Node, tests, workspace, monorepo |
| Operations | `cicd`, `container-orchestration`, `deployment-hosting`, `file-storage-uploads`, `image-optimization`, `secrets-management`, `task-queue` | deploy, CI/CD, Docker, storage, images, secrets, jobs |
| Platform services | `css-styling`, `email`, `local-state-management`, `realtime-websockets` | CSS, styling, email, Zustand, Jotai, real-time, WebSocket |

Paths: `topics/dependencies/rules/<rule-file>.md`. Dependency rules classify choices as Go-To, Acceptable, or Unacceptable. Always inspect the source-specific rule for the relevant solution domain; do not infer a library choice from a neighboring domain.

## Rule Selection Output

When applying this skill, report paths selected, for example:

```text
Selected rules:
- topics/react/rules/effect-external-systems-only.md
- topics/react/rules/data-tanstack-query-only.md
- topics/typescript/rules/function-parameters-always-typed.md
Related rules loaded:
- topics/dependencies/rules/async-state-management.md
```
