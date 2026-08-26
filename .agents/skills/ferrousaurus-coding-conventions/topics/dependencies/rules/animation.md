---
title: Animation
tags: animation, framer motion, motion, CSS transitions
---

## Animation

### Go-To

- **Motion (Framer Motion)** — Declarative React animation library with layout animations, gesture support, and spring physics. Motion provides an intuitive API for common animation patterns and integrates cleanly with React's rendering lifecycle.

### Acceptable

- **CSS transitions/keyframes** — For simple hover effects, visibility toggles, and state-driven transitions that don't require JavaScript orchestration. CSS transitions have zero bundle size overhead and are appropriate when the animation is a styling concern, not a behavioral one.

### Unacceptable

- **GSAP** — Imperative, jQuery-era animation library that operates outside React's rendering model. GSAP's direct DOM manipulation conflicts with React's virtual DOM and makes cleanup and state synchronization harder.
- **React Spring** — Physics-based animation library with a steeper learning curve and less intuitive API than Motion. React Spring's spring-based model is harder to preview and tune compared to Motion's duration/spring hybrid approach.

### Cross-References

- Related: [rendering-library.md](../../dependencies/rules/rendering-library.md), [component-library.md](../../dependencies/rules/component-library.md), [utility.md](../../dependencies/rules/utility.md)