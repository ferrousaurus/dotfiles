---
agent: plan
description: Provide a root cause analysis of an error, exception, or bug.
---
Analyze stack trace, error message, or bug description in `$ARGUMENTS`. Remain read-only: delegate bounded investigation only to `plan-workhorse`; synthesize analysis. Use only checks current `plan`/`plan-workhorse` permissions allow.

## Scope Priority

Prioritize runtime failures (crashes, unhandled rejections, null references), then compile/type errors (failures, mismatches, missing properties), then test and logic failures.

## Investigation Process

Trace stack and execution path. Inspect source, configuration, and dependencies; run only permitted checks. Cite exact `path:line` locations. Separate observed evidence, conclusions supported by evidence, and hypotheses/unresolved uncertainty.

## Output Format

## Root Cause Analysis

State symptom, trigger, location, failure mechanism, and root cause. Support conclusions with evidence; mark hypotheses and uncertainty.

## Resolution Instructions

Give actionable guidance, not implementation.

When multiple valid fixes exist, add `## Alternative Resolution`: options, tradeoffs, recommendation.

## Verification

Specify focused verification within permitted checks.
