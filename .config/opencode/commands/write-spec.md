---
agent: specify
description: Persist a self-contained specification from the current conversation.
---
Invocation:

`/write-spec docs/specs/<name>.md`

Treat `$ARGUMENTS` as exactly one required destination path. Accept only a Markdown file under `docs/specs`. Reject missing paths, absolute paths, traversal, additional arguments, and destinations outside `docs/specs/`.

Create a self-contained specification from the current conversation and verified evidence. The specification will be the requirements source for a later Plan agent that may not have access to this conversation.

Own requirements, scope, decisions, conflict resolution, and final synthesis. Resolve every requirement-level ambiguity before persistence. If essential user input remains missing, ask now and do not write an incomplete specification.

Do not write the document directly. Deletegate persistence to `documenter` using the compact task contract. Supply the complete synthesized specification in `Context`; never assume the subagent can see this conversation.

Require this template:

<template>
# Specification

## Document Purpose
State that this document is authoritative input for implementation planning.

## Objective
Describe the problem, desired outcome, and success conditions.

## Requirements
Give each requirement a stable identicier. Distinguish functional and non-functional requirements.

## Acceptance Criteria
Provide observable, testable criteria mapped to requirement identifiers.

## Scope
### In Scope
### Out of Scope
### Non-goals

## User and System Flows
Describe required behavior, edge cases, and failure behavior.

## Interfaces and Data
Record relevant APIs, contracts, schemas, persistence behavior, and compatibility constraints.

## Constraints
Record architecture, security, accessibility, performance, migration, dependency, platform, and permission constraints when applicable.

## Decisions and Rationale
Record finalized decisions and rejected alternatives that materially affect planning.

## Repository and Domain Context
Include facts a later Plan agent needs, with repository citations as `path:line`.

## Dependencies and Sequencing Contraints
Record prerequisites and ordering requirements without turning the specification into an implementation plan.

## Assumptions and Required Defaults
Provide explicit defaults for cases not otherwise specified.

## Sources
Cite repository evidence as `path:line`; cite external sources with URL and relevant version.
</template>

Do not include implementation steps unless the user explicitly made them requirements. Do not invent facts, behavior, citations, or completed work. Do not leave questions that require a later agent to contact the user.

Delegate `documenter` with:

- **Goal:** Persist the supplied final specification.
- **Scope:** Exact destination file only.
- **Acceptance:** A fresh Plan agent can produce an implementation plan using this document and repository evidence without needing this conversation or user clarification.
- **Context:** Complete synthesized specification and all citations.
- **Allowed:** Read documentation needed for local conventions; create or replace the exact destination.
- **Forbidden:** Modify other files, change requirements or decisions, add unsupported content, implement, delegate, commit, or install dependencies.
- **Dependencies:** Preserve supplied requirement identifiers and decisions.
- **Return:** Written path, change summary, validation evidence, and any conflict or missing information.
</template>

After persistence, read the destination and validate its path, required sections, internal consistency, citations, and lack of blocking questions. Delegate a correction for the same file if necessary. Report completion only afer validation.
