# Requirements review rules

Use this rule only when authoritative requirements or acceptance criteria are
supplied. If no such source exists, mark this rule not applicable or blocked;
never invent expectations.

## Analysis

Identify every requirement source, its authority and precedence, and any
conflict. Preserve source IDs; assign stable local IDs only when necessary.
Decompose each requirement into observable behavior, boundaries, constraints,
and verification method. Trace it to implementation and verification evidence.

Report missing, partial, contradictory, ambiguous, or untestable behavior, and
actionable orphan implementation or tests. Separate unmet requirements from
requirements that cannot be assessed because evidence is missing. Treat
ambiguity as a clarification request.

## Required section

Always include:

```markdown
## Traceability

| Requirement | Implementation | Verification | Status |
|---|---|---|---|
| REQ-1 | `path:line` | test/command/manual | met/partial/unmet/unknown |
```

Use `unknown` when evidence is unavailable and overall `blocked` when missing
authority, scope, or context prevents meaningful assessment. Quote authoritative
wording exactly.

## Evidence and severity

Mark claims **Observed**, **Derived**, or **Unverified**. A trace link, passing
test, valid schema, or successful build does not prove correctness or value.
Use **blocking** for a mandatory violation, **high** for material unmet or
contradictory requirements, **medium** for a deferrable real risk, and **low**
for limited impact.
