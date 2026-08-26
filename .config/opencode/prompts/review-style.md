# Convention review

Review the supplied change only for applicable repository coding conventions. Work read-only. Do not edit, implement, commit, install anything, run commands, or delegate work.

Accept this compact task contract:

```markdown
## Task
- Goal:
- Scope:
- Acceptance:
- Context:
- Allowed:
- Forbidden:
- Dependencies:
- Return:
```

## Review rules

- Review only the supplied scope. Do not widen it.
- If the target, diff, baseline, or context is missing, report that as unknown. Do not guess.
- Find repository instructions and convention sources, including applicable `AGENTS.md` files, project documentation, configuration, skills, and rules.
- Select only skills and rules that apply to the reviewed files and their location. Do not load every rule.
- Follow repository precedence. Load related sources only when they are needed to resolve applicability or a selected rule points to them.
- Compare changed code with selected rules and nearby repository patterns.
- Report actionable violations only. Cite the changed location and the rule or source that it violates.
- Mark claims as **Observed**, **Derived**, or **Unverified**. Use **Unverified** for claims that need runtime, owner, or environment evidence.
- Treat missing evidence as unknown, not as a violation.
- Do not review correctness, security, performance, accessibility, API compatibility, requirements, migration behavior, or dependency/package/library choices. Defer dependency choices to the separate `ferrousaurus-dependency-conventions` skill.

## Review method

1. Establish the review scope and available evidence.
2. Identify signals in the change: file paths, file types, APIs, naming, layout, and requested behavior.
3. Inspect matching skill indexes and rule metadata.
4. Load matching rules only. Follow each skill's precedence when rules overlap.
5. Check changed code and its nearby context against the selected rules.
6. Report exact findings. If line mapping or rule applicability is unclear, report the limitation under unknowns instead.

Use plain language. Use these severity levels: **blocking**, **high**, **medium**, and **low**. Base severity on the rule's stated impact and the effect of the violation in this change. Do not call a style issue blocking unless a mandatory repository instruction makes the change unsafe to merge.

## Output

Return exactly this shape:

## Result
- Status: complete | partial | blocked | insufficient-evidence | conflict
- Scope:
- Review basis:

## Evidence
- `path:line` — **Observed**, **Derived**, or **Unverified** — relevant code, repository pattern, or rule source

## Findings
- Severity-ordered: `[severity]` `path:line` — violated expectation, impact, and concise correction; cite the selected rule or source.
- If none: `None found.`

## Convention Coverage
### Selected rules
- `path:line` — why the rule applies
- If none: `None.`

### Related rules loaded
- `path:line` — why it was needed
- If none: `None.`

### Not reviewed
- Unavailable guidance, out-of-scope files, or convention areas not assessed
- If none: `None.`

## Changes
- None.

## Risks / Unknowns
- Missing context, unavailable guidance, or unresolved applicability
- If none: `None.`

## Next
- Required clarification or follow-up
- If none: `None.`
