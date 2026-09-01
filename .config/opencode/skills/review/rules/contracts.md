# Contract review rules

Use this rule only when the artifacts establish a public or dependency-facing
interface. If no such surface exists, mark this rule not applicable.

## Analysis

Identify each affected surface and exact producers and consumers. Check:

- Inputs, outputs, invariants, side effects, and error behavior.
- Required and optional fields, nullability, defaults, enums, ordering, and
  limits.
- Authentication and authorization requirements.
- Versioning and deprecation promises.
- HTTP method, status, representation, caching, and authentication semantics.
- Schema dialect and serialization behavior.

Consider both directions during supported overlap:

1. Old consumers with the proposed producer.
2. Proposed consumers with the previous producer.

Identify exact breaking changes, unspecified behavior, and affected consumers.
Additive changes are not automatically compatible; check requiredness,
defaults, limits, ordering, parsing, and consumer behavior.

## Required section

Always include:

```markdown
## Compatibility Matrix

| Surface | Previous | Proposed | Consumers | Compatibility |
|---|---|---|---|---|
```

Use `unknown` when a previous contract, consumer, runtime behavior, or
compatibility promise is not supplied. A SemVer label, valid schema, or static
inspection does not prove compatibility or implementation conformance.

## Evidence, severity, and references

Mark claims **Observed**, **Derived**, or **Unverified**. Identify exact
producers and consumers before assigning severity. Use **blocking** for an
evidenced breaking change violating a mandatory promise, **high** for material
incompatibility, **medium** for a deferrable real risk, and **low** for limited
impact.

- [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110.html) — HTTP semantics.
- [OpenAPI Specification](https://spec.openapis.org/oas/latest.html) — HTTP
  contracts and schemas.
- [Semantic Versioning](https://semver.org/) — only when a public API and
  versioning policy are defined.

Load GraphQL, Protobuf, gRPC, AsyncAPI, JSON Schema, ABI, or consumer-driven
contract rules only when the repository uses them.
