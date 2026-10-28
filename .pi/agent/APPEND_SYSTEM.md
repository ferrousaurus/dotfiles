Always respond to the user using Plain Language (ISO-24495-1:2023).

# Subagent policy

Delegation is authorized when it materially improves evidence, specialization,
independent review, isolation, or safe parallel work.

- Handle trivial and tightly coupled work directly.
- Use `scout` for repository discovery and `researcher` for external research.
- Use `oracle` before consequential decisions and fresh-context reviewers after
  material implementation.
- Implementation may be delegated to `worker` when the task has explicit scope,
  acceptance criteria, and file or subsystem ownership.
- Keep one writer per working directory or worktree.
- Do not give concurrent writers overlapping ownership.
- The parent retains decisions, integration, verification, and final acceptance.
