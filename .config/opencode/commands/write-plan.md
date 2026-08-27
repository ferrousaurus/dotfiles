---
agent: plan
description: Persist a self-contained implementation plan from the conversation or a specification
---
Invocation:

`/write-plan @docs/specs/<name>.md`

Parse `$ARGUMENTS` using this form only. The single argument is the location of the specification to build the plan from.

The destination is a Markdown file with the same filename as the specification in `$ARGUMENTS`; that is, `docs/plans/<name>.md`.

1. Read the specified specification.
2. Treat is as the authoritative requirements baseline.
3. Use the current invocation only for planning instructions, not as an undocumented replacement for specification requirements.
4. Record any explicit override and its rationale in the plan.
5. Stop before persistence if the specification contians a material conflict that available evidence cannot resolve.

Research the repository sufficiently to produce an implementation-ready plan. Follow normal Plan-agent discovery, reuse, evidence, and reconciliation requirements.

Resolve every decision that could cause Build to ask the user a question. Make architecture and implementation decisions from requirements, repository conventions, authoritative evidence, and risk. Where multiple valid chocies remain, select one and record its rationale. If essential requirements are missing and no safe default exists, ask now and do not persist an incomplete plan.

Do not write the document directly. Delegate persistence to `documenter` using the compact task contract. Supply the finalized plan in `Context`; never assume the subagent can see this conversation or source specification.

Require this template:

<template>
# Implementation Plan

## Build Directive
Instruct a fresh Build agent to execute the plan fully without requesting user clarification. Require it to follow recorded decisions and defaults, verify repository state, and repots an external blocker rather than invent requirements.

## Objective
## Requirements and Acceptance Criteria
Preserve specification requirement identifiers when a source specification exists.

## Scope
### In Scope
### Out of Scope
### Non-goals

## Current Repository State
Record relevant files, symbols, existing behavior, worktree considerations, and generated-versus-tracked distinctions.

## Decisions and Rationale
Record selected architecture, implementation choices, rejected alternatives, and compatibility decisions.

## Reuse Findings
Idenfify reusable helpers, components, patterns, signatures, exports, and usages. State whether each should be reused, adapted, or replaced.

## Implmenetation Steps
Give an ordered, depenency-aware sequence. For every step include:

- Exact files or systems
- Relevant symbols
- Intended behavior change
- Implementation details
- Dependencies
- Risks or edge cases
- Acceptance evidence
- Verification method

## Interfaces, Data, and Migrations
Include API, schema, persistence, compatibility, rollout, transition, and recovery details when applicable.

## Security, Accessibility, and Performance
Include activated concerns and required controls.

## Verification Plan
List exact automated and manual checks, expected outcomes, and requirement coverage.

## Risks and Mitigations
## Assumptions and Decision Rules
Provide executable defaults for foreseeable uncertainty. Do not defer choices to the user.

## Sources
Cite repository evidence as `path:line`; cite external sources with URL and relevant version.
</template>

Do not claim unperformed implementation or verification. Do not leave unresolved questions requiring user input.

Delegate `documenter` with:

- **Goal:** Persist the supplied final implementation plan.
- **Scope:** Exact destination file only.
- **Acceptance:** A fresh Build agent can implement and verify the work end-to-end using only this document and repository access, without prompting the user.
- **Context:** Complete finalized plan, source-spec path when applicable, requirements, decisions, repository evidence, and citations.
- **Allowed:** Read relevant documentation and the source specification; create or replace the exact destination.
- **Forbidden:** Modify other files, alter requirments or architecture, invent facts or citations, implement, delegate, commit, or install dependencies.
- **Dependencies:** Preserve requirement traceability and finalized decisions.
- **Return:** Written path, source-spec path when applicable, change summary, validation evidence, and any conflict.

After persistence, read the destination and validate its path, required sections, requirement coverage, implementation detail, decision completeness, citations, and verification plan. Delegate a bounded correction for the same file if necessary. Reposrt completion only after validation.
