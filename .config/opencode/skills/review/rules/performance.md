# Performance review rules

Use this rule only when a performance-relevant path, target, workload, or
claim is established. If none is established, mark this rule not applicable.

## Analysis

Establish, when supplied, the workload, user journey, baseline, metric, target,
acceptance threshold, latency distribution and tail percentiles, throughput,
concurrency, errors, resources, saturation, cost, environment, dataset, cache
state, background load, warm-up, duration, sampling, randomness,
representativeness, repetition, variability, and limitations.

Require hot-path relevance before flagging allocations, queries, network calls,
or local costs. Distinguish end-to-end from microbenchmark evidence.

## Finding categories

Every finding uses exactly one category:

- **Measured regression** — comparable repeated evidence shows material
  deterioration against a stated baseline and target.
- **Scalability defect** — behavior degrades materially as an evidenced
  workload dimension grows; name the dimension and evidence.
- **Benchmark-method defect** — benchmark design cannot support its conclusion
  because comparison, workload, measurement, environment, repetition,
  warm-up, variability, or reporting is materially defective. This does not
  prove product regression.
- **Unverified performance risk** — a credible hot-path or resource risk is
  derived from code or context, but comparable runtime evidence is missing.

Without comparable evidence, use the exact phrase **performance impact
unknown**, not **regression**. One run is insufficient for a regression claim.
Do not report speculative optimization without material user, resource, cost,
or SLO impact.

## Evidence, severity, and references

Mark claims **Observed**, **Derived**, or **Unverified**. Use **blocking** for a
comparable target/SLO breach or operationally threatening scalability defect,
**high** for a material regression or scalability defect, **medium** for a
deferrable real risk, and **low** for limited impact.

- [RFC 9411](https://www.rfc-editor.org/rfc/rfc9411.html) — reproducible
  benchmarking discipline, applied proportionally.
- [NIST SP 800-55 Volume 2](https://csrc.nist.gov/pubs/sp/800/55/v2/final) —
  measurement purpose, collection, analysis, and reporting.
