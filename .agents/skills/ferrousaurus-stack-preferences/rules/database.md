---
title: Database
tags: database, PostgreSQL, SQLite, MongoDB, Redis, Valkey
---

## Database

### Go-To

- **PostgreSQL** — The most capable open-source relational database. PostgreSQL's feature set (JSONB, full-text search, CTEs, window functions, extensions) covers virtually all application needs. First-class support from Prisma and Drizzle ORM.

### Acceptable

- **SQLite** — When the data must be co-located with the application on the same server. SQLite eliminates network latency and operational overhead, making it ideal for single-server deployments on Coolify where the application is the only client.
- **MongoDB** — Only when document database strengths (flexible schema, horizontal scaling of document collections, nested document queries) clearly outweigh the trade-offs (no relational integrity, fewer consistency guarantees, less mature tooling). Most use cases are better served by PostgreSQL's JSONB columns.
- **Valkey/Redis** — For transient data that does not require fail-safety, such as caches, rate limiting, and session storage. Prefer Valkey (open-source Redis fork) for the server instance. Do not store data that cannot be lost or rebuilt.

### Unacceptable

- **MySQL** — PostgreSQL provides superior features (JSONB, array types, CTEs, extension ecosystem) with comparable or better performance. MySQL's limitations in complex queries and data types make it a downgrade from PostgreSQL for no benefit.

### Cross-References

- Related: [orm.md](./orm.md), [task-queue.md](./task-queue.md), [deployment-hosting.md](./deployment-hosting.md)