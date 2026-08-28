---
agent: specify
description: Persist a self-contained specification from the current conversation.
---
Invocation:

`/write-spec docs/specs/<name>.md`

Treat `$ARGUMENTS` as exactly one required destination path. Accept only a Markdown file under `docs/specs`. Reject missing paths, absolute paths, traversal, additional arguments, and destinations outside `docs/specs/`.

Create a self-contained specification from the current conversation and verified evidence. The specification will be the requirements source for a later Plan agent that may not have access to this conversation.

Own requirements, scope, decisions, conflict resolution, and final synthesis. Resolve every requirement-level ambiguity before persistence. If essential user input remains missing, ask now and do not write an incomplete specification.

Do not write the document directly. Delegate drafting to `documenter` using the compact task contract. Supply the complete synthesized specification in `Context`; never assume the subagent can see this conversation. Require `documenter` to return the complete Markdown document in its response.

Require this template:

<template>
# Specification

## Document Purpose
State that this document is authoritative input for implementation planning.

## Objective
Describe the problem, desired outcome, and success conditions.

## Requirements
Give each requirement a stable identifier. Distinguish functional and non-functional requirements.

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

## Dependencies and Sequencing Constraints
Record prerequisites and ordering requirements without turning the specification into an implementation plan.

## Assumptions and Required Defaults
Provide explicit defaults for cases not otherwise specified.

## Sources
Cite repository evidence as `path:line`; cite external sources with URL and relevant version.
</template>

Do not include implementation steps unless the user explicitly made them requirements. Do not invent facts, behavior, citations, or completed work. Do not leave questions that require a later agent to contact the user.

Delegate `documenter` with:

- **Goal:** Draft the complete, self-contained specification document following the required template.
- **Scope:** Proposed content for the target destination path under `docs/specs/`.
- **Acceptance:** The returned Markdown document conforms to the required template, applies plain language, and enables a fresh Plan agent to produce an implementation plan using this document and repository evidence without needing this conversation or user clarification.
- **Context:** Complete synthesized specification, all citations, and the required template.
- **Allowed:** Read documentation needed for local conventions.
- **Forbidden:** Modify files, change requirements or decisions, add unsupported content, implement, delegate, commit, or install dependencies.
- **Dependencies:** Preserve supplied requirement identifiers and decisions.
- **Return:** Complete drafted Markdown document in the response, target path, validation evidence, and any conflict or missing information.

After receiving the draft from `documenter`, review and validate the returned Markdown document for required sections, internal consistency, citations, and lack of blocking questions. Delegate a bounded correction if necessary.

Once validated, commit the changes by writing the finalized Markdown document to the destination file. Validate the written file and report completion only after validation.
