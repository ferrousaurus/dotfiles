---
title: Testing
tags: testing, vitest, playwright, storybook
---

## Testing

### Go-To

- **Vitest** — Vite-native test runner with fast startup, ESM-first module handling, and Jest-compatible assertion API. Vitest inherits Vite's transform pipeline, meaning tests use the same configuration as the application.
- **Testing Library** (`@testing-library/react`) — Component testing utilities that encourage testing user behavior over implementation details. Pairs naturally with Vitest for unit and integration tests.

### Acceptable

- **Playwright** — For headless browser/end-to-end testing. Playwright provides reliable cross-browser E2E tests with auto-waiting, network interception, and trace viewing. Use when testing user flows that span multiple pages or require real browser behavior.
- **Storybook** — When the developer needs the Storybook web application for visual component development and documentation. Do not introduce Storybook solely for testing; it should serve a development workflow need first.

### Unacceptable

- **Jest** — Slower startup and configuration than Vitest, particularly with ESM and TypeScript. Jest's transform pipeline duplicates Vite's work, and its ecosystem fragments configuration across babel, ts-jest, and other adapters.
- **Cypress** — Architecturally slower than Playwright for E2E testing. Cypress runs inside the browser, limiting its ability to test multiple tabs, native browser events, and cross-origin scenarios. Playwright's out-of-process architecture is superior.

### Cross-References

- Related: [bundler.md](../../dependencies/rules/bundler.md), [component-library.md](../../dependencies/rules/component-library.md)
