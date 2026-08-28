---
agent: chat
description: Review all current changes against origin/develop.
---

Review all current-branch changes against `origin/develop`.

Review exactly these four evidence sources independently; omit or double-count none:

1. **Committed:** use `git merge-base origin/develop HEAD`, `git log --format=%H origin/develop..HEAD`, and `git diff --no-ext-diff --merge-base origin/develop HEAD`.
2. **Staged:** use `git diff --no-ext-diff --cached`.
3. **Unstaged:** use `git diff --no-ext-diff`.
4. **Untracked:** identify with `git status --short --untracked-files=all`, then read separately because diffs omit them.

Do not fetch. If `origin/develop` is missing or may be stale, report limitation; review locally available evidence.

Use template below. Put each issue in exactly one severity. Shared finding schema: `- **[Title]** — \`path:line\`: evidence; impact; recommended fix.` Write `None` in every empty required subsection. Correctness empty form: `[adequate] None`.

## Summary

- **Overall assessment**: [ready / ready with minor changes / needs changes]
- **Primary purpose of this branch:** [1-2 sentences]

## What Changed

- [High-level change]

## Findings

### Blocking Issues

Issues CI/CD will flag and that block merge, including test, build, lint, format, or static-analysis failures.

### Key Concerns

Must-fix issues not necessarily caught by CI/CD, typically missed functional requirements, inadvertent breaking changes, or unhandled edge cases.

### Major Concerns

Issues that should ideally be fixed but may be consciously deferred, typically missed non-functional requirements such as validation or maintainability.

### Minor Concerns

Implementation issues spanning more than a few lines, such as clarity, consistency, or deeply nested conditions.

### Nitpicks

Inconsequential or small concerns fixable in a few adjacent lines, such as naming or local readability.

## Correctness Review

For each category, give `[adequate / needs work]` plus shared-schema findings:

### Logic Issues

### Edge Cases

### Potential Regressions

### Error Handling

## Testing

- **Automated Tests Added**: [yes/no/unclear]
- **Automated Tests Updated**: [yes/no/unclear]
- **Test Coverage Quality**: [good/partial/missing key paths]

### Manual Test Scenarios to Verify

- [Scenario]

Add `## Performance` when performance concerns exist. Add `## Security` when security concerns exist. They are independent; use shared finding schema.

## Questions

- [Clarify unclear intent or confirm with the author]

## Suggested Next Steps

- [Fix blocking item, add/update tests, or record cleanup]

## Final Recommendation

**Recommendation**: [approve / request changes / comment only]
**Why**: [1-3 sentence closing summary]
