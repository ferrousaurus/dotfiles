# Verification review rules

Use this rule when the caller explicitly requests or permits deterministic
repository checks. Verify objective results; do not diagnose failures or
recommend implementation fixes.

## Process

1. Inspect trusted repository sources for commands and owning instructions:
   `package.json`, task-runner configuration, language and build configuration,
   CI workflows, and contributor documentation.
2. Identify checks relevant to changed files and acceptance criteria. Do not
   invent checks.
3. Reject commands that mutate the repository, install or update dependencies,
   update snapshots, deploy, migrate data, or use destructive behavior.
4. Run only explicitly permitted, non-mutating commands and capture exact
   command, working directory, exit status, and shortest decisive output.
5. Inspect repository status before and after commands that might generate
   files. Report observed changes without modifying them.
6. Report skipped checks with the precise reason: not applicable, not defined,
   not permitted, unavailable dependency or environment, or blocked by missing
   context.

For documentation-only or mechanical changes, skip broad test discovery when
repository evidence shows no behavioral impact and record why.

## Required section

Always include:

```markdown
## Commands

- `command`
  - Status: passed | failed | blocked | skipped
  - Working directory: `path`
  - Exit: `code` or `not run`
  - Evidence: shortest decisive output
```

## Boundaries and severity

Mark claims **Observed**, **Derived**, or **Unverified**. Do not diagnose root
cause, convert a failed command into a defect claim, or convert a pass into a
correctness or requirement claim. Do not run destructive, deployment,
networked, or environment-dependent checks without explicit permission. Keep
edit and task denied conceptually.

Use **blocking** when an explicitly required check cannot run or fails such
that the gate is unsafe; **high** for a material required result unavailable or
failed; **medium** for a relevant gap or failed non-gating check; and **low**
for limited impact. End with follow-up verification only.
