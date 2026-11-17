# Security review rules

Use this rule only when the artifacts establish a security-relevant asset,
actor, entry point, or trust boundary. If not, mark this rule not applicable.
Preserve protections for secrets and credentials; never request their contents.

## Analysis

Inspect, where applicable:

- Authentication, authorization, object-level access control, and session or
  token handling.
- Input validation, output encoding, injection, SSRF, path traversal, unsafe
  deserialization, and parser boundaries.
- Secret and key lifecycle.
- Sensitive logging and data exposure.
- Secure defaults, least privilege, fail-safe behavior, and resource limits.
- Dependency and supply-chain risk.

Trace each candidate from source to sink. An actionable finding must identify:

1. Attacker-controlled source.
2. Reachable path.
3. Missing or defective control.
4. Affected sink or asset.
5. Plausible impact.
6. Preconditions and uncertainty.

When exposure or exploitability is unknown, use **security concern—verify** and
state the exact runtime, deployment, owner, or environment evidence needed. Do
not call an issue exploitable without a reachable path.

## Evidence, severity, and references

Mark claims **Observed**, **Derived**, or **Unverified**. Static inspection
cannot prove runtime exploitability or certification. Use **blocking** for
material compromise or a mandatory security violation, **high** for a material
exploitable weakness, **medium** for a deferrable real risk, and **low** for
limited impact. Omit generic advice unless it corrects an evidenced weakness.

- [OWASP ASVS 5.0](https://owasp.org/www-project-application-security-verification/) —
  cite the exact version and requirement identifier.
- [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final) — secure-development
  and evidence practices.
- [NIST SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final) — security
  testing planning and limitations.

Load OAuth/OIDC, JWT, cloud IAM, container, mobile, privacy, or
language-specific guidance only when artifacts establish applicability.
