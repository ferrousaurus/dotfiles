---
agent: build
description: Compact the current conversation into a handoff document for another agent to pick up.
---
In order:
1. Delegate draft to `documenter`.
2. Build reviews, corrects, and redacts draft.
3. Build writes it to operating system temporary directory, never workspace.

Include current state, decisions, unresolved questions, next steps, exact `## Suggested Skills` section naming relevant skills, and `$ARGUMENTS` as next session focus. Link plans, PRDs, ADRs, issues, commits, and diffs by path or URL; do not duplicate artifacts. Redact API keys, passwords, tokens, secrets, personally identifiable information, credentials, and other sensitive data.

Do not change workspace or run unrelated commands. Return saved path.
