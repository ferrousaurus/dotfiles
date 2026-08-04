---
agent: debugger
description: Provide a root cause analysis of some error, exception, or bug.
---
# Debug Command

Accept a stack trace, error message, or bug description from the user and perform a thorough root cause analysis.

## Scope Priority

Focus primarily on:
1. **Runtime exceptions**: crashes, unhandled rejections, null reference errors, etc.
2. **Compile and type errors**: Compilation errors, type mismatches, missing properties, etc.

Test failures and logic bugs are supported but should be treated as secondary priorities.

## Investigation Process

1. If the tech stack is unclear and you have access to the `identify-stack` skill, invoke it to understand the project's architecture.
2. Use the `explore` subagent to investigate the codebase, trace the error path, and locate the exact files and lines involved.
3. Verify hypotheses by examining relevant source files, configuration, and dependencies.

## Output Format

Provide your findings in the following template:

<template>

## Root Cause Analysis
A clear, concise explanation of what is happening, and why the erorr occurs. Identify the exact file(s) and line(s) responsible when possible.

## Resolution Instructions
Step-by-step guidance on how to fix the issue. Keep instructions concise and actionable.

## Alternative Instructions (if applicable)
If multiple valid fixes exist, provide a short paragraph outlining its **pros** and **cons**. End with a bold, clear suggestion for which resolution to implement and why.

</template>
