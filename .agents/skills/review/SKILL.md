---
name: review
description: Conduct an evidence-based review of changes or proposals and select the applicable internal review rules. Use when reviewing code, configuration, documentation, plans, migrations, interfaces, or user-facing behavior.
---

# Review

Use this skill as the reviewer's single review framework. The calling agent
should delegate only to `reviewer`; it should not select review domains or know
the names of the internal rule files.

## Operating contract

- Work read-only. Never edit, implement, commit, install, delegate, or widen
  the supplied scope.
- Respect caller restrictions. Never infer permission from repository access.
- Use repository evidence before making claims. Mark every claim as
  **Observed**, **Derived**, or **Unverified**.
- Cite exact evidence: `path:line`, requirement ID, API operation, command,
  test result, benchmark result, complete user-flow step, or authoritative
  standard.
- Treat missing context as unknown or blocked, not automatically as a defect.
- Report actionable findings only. Do not duplicate a finding unless adding a
  distinct integration consequence.
- Never claim runtime behavior, exploitability, accessibility conformance,
  migration recoverability, or performance regression from static inspection
  alone.

## Rule selection

After receiving the task contract and before reviewing the change:

1. Establish the supplied scope, goal, acceptance criteria, evidence sources,
   caller restrictions, and available verification results.
2. Inspect the diff or proposal and surrounding repository context.
3. Determine which review concerns are materially activated by the artifacts.
   Use the trigger table below as a routing aid, not as a checklist.
4. Read only the matching files in `rules/`. Read more than one when the
   change crosses domains. Do not load every rule by default.
5. Record which rules were loaded and which were not applicable. Missing
   evidence is not proof that a concern is absent; mark it unknown when that
   matters.
6. Apply the selected rules while maintaining the baseline correctness,
   regression, edge-case, error-handling, scope, maintainability, and test
   adequacy review.
7. Synthesize one review result. Keep findings in severity order and avoid
   duplicating a selected rule's finding unless explaining a distinct
   cross-cutting impact.

## Concern triggers

| Concern | Load when artifacts establish… |
|---|---|
| Requirements | authoritative requirements, acceptance criteria, contractual deliverables, regulated or safety-sensitive behavior, or multiple requirement sources |
| Security | user-controlled input, identity, authorization, sensitive data, secrets, cryptography, network boundaries, file handling, parsers, deserialization, dynamic execution, privileged operations, dependencies, or security-sensitive configuration |
| Contracts | an HTTP/RPC API, event, message, exported symbol, CLI behavior, schema, serialization, generated client, dependency-facing interface, version, or deprecation |
| Accessibility | a user-facing interface, form, control, dynamic status, focus behavior, media, authentication flow, or responsive layout |
| Migration | a database or schema change, data transformation, format or protocol migration, runtime or dependency upgrade, deployment-topology change, feature-flag transition, or mixed-version rollout |
| Performance | an evidenced hot path, latency, throughput, cost, SLO, query or I/O path, serialization, caching, concurrency, resource limit, benchmark, or performance claim |
| Style | repository-specific coding conventions, lint or AST rules, naming, layout, or React/TypeScript convention review is relevant |
| Verification | the caller explicitly requests or permits repository-provided tests, lint, type checks, formatting, builds, static analysis, or other deterministic checks |

Do not activate a concern solely because it is listed in the table. If a
concern is not established, record it as not applicable. If it is relevant but
evidence is insufficient, record the limitation as unknown or blocked.

## Shared review rules

Use these severities consistently: **blocking** is unsafe to merge or release
or directly violates a mandatory requirement; **high** is a material defect or
risk requiring correction in ordinary circumstances; **medium** is a real risk
that may be deferred with owner acceptance; **low** is a limited-impact issue.
Omit informational context unless it affects a decision.

For every finding, include the affected location or operation, expectation,
evidence, impact, uncertainty, and actionable correction. Distinguish observed
facts from derived impact and unverified runtime or environment claims.

## Internal rules

Read the selected rule files relative to this skill:

- `rules/accessibility.md`
- `rules/contracts.md`
- `rules/migration.md`
- `rules/performance.md`
- `rules/security.md`
- `rules/spec.md`
- `rules/style.md`
- `rules/verification.md`

These files are internal guidance, not independently routed skills. Do not
refer the caller to them or ask the caller to choose among them.

## Output integration

Use the reviewer's normal output contract. Add required sections from loaded
rules, such as a traceability table, compatibility matrix, state transition,
deployment order, failure windows, convention coverage, or commands. State
loaded rules, not-applicable concerns, unverified evidence, and follow-up
verification in `Coverage`, `Risks / Unknowns`, or `Next` as appropriate.

Do not claim specialist certification or assurance. The final result is one
integrated review owned by the reviewer.
