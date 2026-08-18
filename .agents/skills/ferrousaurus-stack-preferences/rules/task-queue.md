---
title: Task Queue / Background Jobs
tags: task queue, background jobs, BullMQ, pg-boss
---

## Task Queue / Background Jobs

### Go-To

- **BullMQ** — Redis-based job queue for Node.js with support for rate limiting, retries, scheduled jobs, and prioritized queues. BullMQ leverages the existing Valkey/Redis instance already running for caching, adding no new infrastructure. Well-suited for email sending, report generation, and data processing.

### Acceptable

- **pg-boss** — PostgreSQL-based job queue that requires no additional infrastructure beyond the existing PostgreSQL instance. Use pg-boss when a project doesn't already run Valkey/Redis and adding it solely for job queuing isn't justified.

### Unacceptable

None.

### Cross-References

- Related: [database.md](./database.md), [realtime-websockets.md](./realtime-websockets.md)