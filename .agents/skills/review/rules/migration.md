# Migration review rules

Use this rule only when the artifacts establish a migration or state
transition. Do not perform migrations, deployment actions, destructive
operations, or restore actions. If no transition exists, mark this rule not
applicable.

## Analysis

Model old, target, intermediate, mixed-version, and rollback states. Check:

- Expand, migrate, switch, and contract sequencing.
- Backward and forward compatibility during overlap.
- Idempotency, resumability, checkpoints, retries, and partial failures.
- Batching, locks, transactions, timeouts, and retry behavior.
- Data preservation, constraints, encoding, null/default semantics,
  reconciliation, and auditability.
- Canary or phased rollout, health signals, abort thresholds, and rollback or
  roll-forward decisions.
- Backup and restore validation.

Identify exact destructive operations or incompatibilities. Separate reversible
code from irreversible data changes. Name the failure mode, detection signal,
and recovery behavior; do not generically demand rollback.

## Required sections

Always include:

```markdown
## State Transition

- Current:
- Intermediate:
- Target:
- Rollback or roll-forward:

## Deployment Order
1. ...

## Failure Windows
- Stage:
- Failure:
- Detection:
- Recovery:
```

State why order or recovery evidence is unknown or blocked when it cannot be
established.

## Evidence, severity, and reference

Mark claims **Observed**, **Derived**, or **Unverified**. Script inspection
cannot prove production cardinality, lock duration, throughput, backup
recovery, rollback success, or recoverability. Ask for absent production scale,
SLOs, recovery objectives, or dependency order as unknowns.

Use **blocking** for evidenced material data loss, incompatible mixed-version
behavior, or unrecoverable failure; **high** for material rollout, integrity,
or recovery risk; **medium** for a deferrable real risk; and **low** for limited
impact.

- [NIST SP 800-34 Rev. 1](https://csrc.nist.gov/pubs/sp/800/34/r1/final) —
  contextual contingency-planning guidance. It is superseded/withdrawn and is
  not a current normative migration standard.
