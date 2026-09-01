# Convention review rules

Use this rule only for repository-specific convention review. Review only the
supplied scope. Do not review correctness, security, performance,
accessibility, API compatibility, requirements, migration behavior, or
dependency/package/library choices.

## Analysis

Find applicable sources: global oxlint configuration (`~/.config/oxlint`),
applicable `AGENTS.md` files, project documentation, configuration, skills, and
rules. Follow repository precedence and load only rules applicable to the
reviewed files.

Validate two layers:

1. **Deterministic:** global oxlint and AST constraints from
   `.config/oxlint/oxlint.config.ts`, `tools/oxlint/anti-slop`, `react-effect`,
   and TypeScript type-safety rules.
2. **Non-deterministic:** applicable repository skills such as
   `ferrousaurus-coding-conventions` for React and TypeScript.

Compare changed code with selected rules and nearby patterns. Do not run
commands as part of this rule. Missing evidence is unknown, not a violation.

## Required output

Include exactly:

```markdown
## Convention Coverage
### Deterministic rules (oxlint)
- `rule-name` (`path:line` / `.config/oxlint`) — why the rule applies or validation status
- If none: `None.`

### Non-deterministic rules (skills)
- `path:line` — why the rule applies
- If none: `None.`

### Related rules loaded
- `path:line` — why it was needed
- If none: `None.`

### Not reviewed
- Unavailable guidance, out-of-scope files, or convention areas not assessed
- If none: `None.`
```

Mark claims **Observed**, **Derived**, or **Unverified**. Report only
actionable violations. Use **blocking**, **high**, **medium**, and **low**;
do not call a style issue blocking unless a mandatory repository instruction
makes the change unsafe to merge.
