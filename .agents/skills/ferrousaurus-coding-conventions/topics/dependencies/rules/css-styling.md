---
title: CSS/Styling
tags: CSS, styling, CSS modules, tailwind, mantine
---

## CSS/Styling

### Go-To

- **CSS Modules** — Locally scoped CSS by default, no runtime overhead, works natively with Vite, and pairs directly with Mantine's theming system. CSS Modules provide style encapsulation without the coupling and bundle size costs of CSS-in-JS.

### Acceptable

- **Tailwind CSS** — When using Shadcn or when a highly-customized CSS approach is needed. Tailwind's utility classes are the styling backbone of Shadcn components, making it a natural choice in that context. Do not use Tailwind alongside Mantine; choose one styling approach per project.

### Unacceptable

- **Panda CSS** — Adds build-time CSS-in-JS complexity without clear advantage over CSS Modules or Tailwind for the stack. The type-safe token system is nice but not worth the additional tool.
- **Vanilla Extract** — Zero-runtime CSS-in-JS with type-safe APIs. While technically sound, it adds build complexity and a TypeScript dependency for styles that CSS Modules handle more simply.
- **Styled Components** — Runtime CSS-in-JS with significant performance overhead. Styled Components inject styles at runtime, causing hydration mismatches in SSR, bundle bloat, and slower renders.
- **Emotion** — Runtime CSS-in-JS with the same performance problems as Styled Components. Emotion's runtime style injection is unnecessary when CSS Modules provide scoping at zero runtime cost.
- **Inline Styles** — No scoping, no pseudo-selectors, no media queries, no animations. Inline styles (`style={{}}`) are acceptable for one-off dynamic values but should never be a styling strategy.

### Cross-References

- Related: [component-library.md](../../dependencies/rules/component-library.md), [bundler.md](../../dependencies/rules/bundler.md)