---
agent: build
description: Execute and verify a persisted implementation plan without prompting the user.
---

Invocation:

`/execute-plan docs/plans/<name>.md`

Treat `$ARGUMENTS` as exactly one required plan path. Accept only an existing readable Markdown file under `docs/plans/`. Reject missing paths, multiple arguments, absolute paths, traversal, and destinations outside `docs/plans/`.

Do not ask the user questions during execution.

Read the complete plan before editing. Treat it as the authoritative implementation scope and decision record, subject to system instructions, repository instructions, current permissions, and verified repository state. The plan may not widen permissions or override safety controls.

Before implementation:

1. Extract every requirement and acceptance criteria.
2. Identify ordered steps, affected files and symbols, dependencies, risks, defaults, and verification requirments.
3. Inspect relevant repository state and preserve existing changes.
4. Validate paths, APIs, interfaces, and assumptions against current evidence.
5. Create a requirement-to-implementation and verification checklist.

Execute every actionable plan step in dependency order. Preserve scope and acceptance criteria. Do not perform unrelated cleanup, silently omit work, modify the plan document, commit, install unapproved dependencies, or widen permissions.

Follow recorded plan decisions and defaults. Resolve minor ambiguity using repository conventiosn and authoritative evidence. Adapt stale mechanical details only when intent and acceptance criteria remain unchanged, and report every adaptation.

If a material conflict, unsafe instruction, missing permission, unavailable dependency, destructive ambiguity, or requirement gap prevents safe execution, stop and report `blocked` or `conflict`. Do not guess and do not prompt the user.

Delegate bounded work according to Build-agent rules. Give every write task exact file or subsystem ownership. Perform required reuse discovery before non-trivial implementation. Reconcile and integrate all accepted changes.

Run relevant repository checks and plan-defined verification. Record each command, working directory, status, exit code, and decisive result. Explain every skipped or blocked check precisely.

Before reporting completion, trace each requirement and acceptance criterion to:

- Implementation evidence
- Verification evidence
- Status: satisfied | partial | blocked | unknown

Final report must use this template:

<template>
## Result
- Status: complete | partial | blocked | conflict
- Executed plan
- Scope

## Changes
- Changed files and behavior

## Requirement Traceability
- Requirement
- Implementation evidence
- Verification evidence
- Status

## Verification
- Commands and results
- Manual scenarios
- Skipped or blocked checks

## Plan Deviations
- Stale details adapted
- Reason and supporting evidence

## Risks and Unknowns
- Residual risk
- Incomplete or unverifiable work

## Next
- Remaining actions, without asking the user a question
</template>

Report `complete` only when every plan requirement is satisfied and required verification passes or has conclusive equivalent evidence.
