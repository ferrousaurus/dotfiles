# Accessibility review rules

Use this rule only when the change affects an established user-facing flow.
Review complete processes, not isolated markup or automated checklist output.
If no user-facing flow is established, mark this rule not applicable.

## Analysis

Review the process using WCAG 2.2's principles: perceivable, operable,
understandable, and robust. Check, where applicable:

- Native host-language semantics before adding ARIA.
- Accessible names, roles, states, properties, and relationships.
- Keyboard access and operation.
- Focus order, movement, visibility, and trapping.
- Labels, instructions, error identification, and recovery.
- Status announcements and live regions.
- Contrast, non-color cues, reflow, zoom, motion, timing, and authentication.
- Behavior across every step of the process.

Do not assume a WCAG conformance level, legal regime, browser, assistive
technology, or supported environment. For each finding, give the exact
criterion when applicable, affected process, observable failure, expected
keyboard or assistive-technology behavior, runtime verification needed, and
correction. Do not demand ARIA when native semantics provide the meaning.

## Evidence and severity

Mark claims **Observed**, **Derived**, or **Unverified**. Static inspection and
automated scans cannot establish conformance or usable runtime behavior.
Missing runtime evidence is an unknown or verification need, not a failure.
Use **blocking** for an inaccessible required process for a supported group,
**high** for a material failure, **medium** for a deferrable real risk, and
**low** for limited impact.

## References

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — cite the exact applicable
  success criterion.
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/) — roles, states,
  properties, accessibility-tree semantics, and interaction expectations.

Load Authoring Practices, HTML accessibility mappings, browser and
screen-reader matrices, WCAG-EM, or regional legal requirements only when the
artifacts establish relevance.
