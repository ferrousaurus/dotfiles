---
title: ORM
tags: ORM, database, prisma, drizzle
---

## ORM

### Go-To

- **Prisma** — Type-safe database client with an intuitive schema definition language, excellent migration system, and comprehensive query API. Prisma generates types from the schema, ensuring runtime queries and TypeScript types are always in sync. Pairs well with PostgreSQL.

### Acceptable

- **Drizzle** — When the ORM must not have a preprocess/build step. Drizzle's "if it compiles, it works" approach eliminates the need for `prisma generate` and `prisma migrate` commands. Use when build-time steps are undesirable or when SQL-first schema definition is preferred.

### Unacceptable

None.

### Cross-References

- Related: [database.md](../../dependencies/rules/database.md), [validation-library.md](../../dependencies/rules/validation-library.md), [api-layer.md](../../dependencies/rules/api-layer.md)