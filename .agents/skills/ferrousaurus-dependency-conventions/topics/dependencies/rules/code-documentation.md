---
title: Code Documentation
tags: documentation, JSDoc, TSDoc, Storybook
---

## Code Documentation

### Go-To

- **JSDoc/TSDoc** — Inline documentation comments that live alongside code, provide IntelliSense in editors, and can generate documentation sites. JSDoc/TSDoc keeps documentation close to the implementation, ensuring it stays up to date. TypeScript's type system eliminates the need for much of what dedicated documentation tools generate.

### Acceptable

- **Storybook** — When the developer needs the Storybook web application for visual component development, testing, and documentation. Use Storybook for its interactive UI, not as a documentation generator.

### Unacceptable

- **TypeDoc** — Generates API documentation from TypeScript source, but produces static documentation sites that drift from the code. JSDoc comments in the editor provide immediate value without the overhead of a documentation build pipeline.
- **Docusaurus** — Static documentation site generator that adds significant tooling overhead. For application projects, JSDoc/TSDoc inline documentation and a well-organized README are more maintainable than a separate documentation site.

### Cross-References

- Related: [linter.md](../../dependencies/rules/linter.md), [formatter.md](../../dependencies/rules/formatter.md), [component-library.md](../../dependencies/rules/component-library.md)
