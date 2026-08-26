---
title: Utility
tags: utility, es-toolkit, lodash, radash, underscore
---

## Utility

### Go-To

- **es-toolkit** — Modern, tree-shakeable, TypeScript-first utility library. Small bundle, high-performance implementations of debounce, throttle, deep merge, clone, equality, partition, groupBy, keyBy, and more. Replaces lodash entirely with better DX and no bundle bloat.

### Acceptable

- **Radash** — When es-toolkit doesn't cover a specific need and native APIs are insufficient. Modern, tree-shakeable, TypeScript-first, but smaller API surface than es-toolkit.

### Unacceptable

- **lodash** — Monolithic architecture, poor tree-shaking in practice, large bundle cost even with per-function imports. Completely superseded by es-toolkit.
- **Underscore** — Same lineage as lodash, same problems: monolithic, poor tree-shaking, large bundle footprint.
- **Ramda** — Niche FP-first API that conflicts with the stack's TypeScript/imperative style. Small ecosystem, adds cognitive overhead.

### Cross-References

- Related: [async-state-management.md](../../dependencies/rules/async-state-management.md), [local-state-management.md](../../dependencies/rules/local-state-management.md), [rendering-library.md](../../dependencies/rules/rendering-library.md), [animation.md](../../dependencies/rules/animation.md)