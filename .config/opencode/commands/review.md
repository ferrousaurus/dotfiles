---
agent: reviewer
description: Review the changes between the current branch and the trunk.
---

Provide a review of the changes between the current code and `origin/develop`.

Use the below format to provide a comprehensive summary of the review:

<template>

## Summary

- **Overall assessment**: [ready / ready with minor changes / needs changes]
- **Primary purpose of this branch:** [1-2 sentence summary]

## What Changed

- [High level change 1]
- [High level change 2]
- ...

## Findings

### Blocking Issues

// Issues that will be flagged by CICD to block merge
// These include, but are not limited to:

- [Test Failure 1]
- [Test Failure 2]
- ...
- [Build Failure 1]
- [Build Failure 2]
- ...
- [Lint Failure 1]
- [Lint Failure 2]
- ...
- [Format Failure 1]
- [Format Failure 2]
- ...
- [Static Analysis Failure 1]
- [Static Analysis Failure 2]
- ...

### Key Concerns

// Issues that _must_ be addressed, but do not block CICD. These are typically
// missed functional requirements.
// These include, but are not limited to:

- [Inadvertent Breaking Change 1]
- [Inadvertent Breaking Change 2]
- ...
- [Unaddressed Edge Case 1]
- [Unaddressed Edge Case 2]
- ...

### Major Concerns

// Issues that should ideally be addressed, but may be skipped when deemed not
// necessary. These are typically missed non-functional requirements.
// These include, but are not limited to:

- [Missing Validation 1]
- [Missing Validation 2]
- ...
- [Maintainability Concern 1]
- [Maintainability Concern 2]
- ...

### Minor Concerns

// Issues with implementation details that span more than a few lines.
// These include, but are not limited to:

- [Code Clarity Issue 1]
- [Code Clarity Issue 2]
- ...
- [Code Consistency Issue 1]
- [Code Consistency Issue 2]
- ...
- [Deeply Nested Condition 1]
- [Deeply Nested Condition 2]
- ...

### Nitpicks

// Issues regarding inconsequential items, or small concerns that may be
// resolved by changing only a few adjacent lines.
// These include, but are not limited to:

- [Variable Name 1]
- [Variable Name 2]
- ...
- [Readability Suggestion 1]
- [Readability Suggestion 2]
- ...

## Correctness Review

### Logic Issues

[adequate / needs work]

- [Issue 1]
- [Issue 2]
- ...

### Edge Cases

[adequate / needs work]

- [Case 1]
- [Case 2]
- ...

### Potential Regressions

[adequate / needs work]

- [Regression 1]
- [Regression 2]
- ...

### Error Handling

[adequate / needs work]

- [Unhandled Error 1]
- [Unhandled Error 2]
- ...

## Testing

- **Automated Tests Added**: [yes/no/unclear]
- **Automated Tests Updated**: [yes/no/unclear]
- **Test Coverage Quality**: [good/partial/missing key paths]

### Manual test scenarios to verify

- [Scenario 1]
- [Scenario 2]
- ...

## Performance

// Performance concerns. If none, do not include the Performance section.

- [Performance Concern 1]
- [Performance Concern 2]
- ...

## Security

// Security concerns. If none, do not include the Security section.

- [Security Concern 1]
- [Security Concern 2]

## Questions

// Anything to clarify unclear intent
// Anything to confirm with the author

## Suggested Next Steps

// May include, but are not limited to:

- [Fix blocking item]
- [Add/update test]
- [Clean up follow-up item]

## Final Recommendation

**Recommendation**: [approve / request changes / comment only]
**Why**: [1-3 sentence closing summary]

</template>
