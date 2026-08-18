---
title: Email
tags: email, resend, transactional
---

## Email

### Go-To

- **Resend** — Modern email API with excellent developer experience, TypeScript SDK, and React Email integration for transactional emails. Resend handles deliverability, SPF/DKIM/DMARC configuration, and provides a clean dashboard for monitoring.

### Acceptable

None.

### Unacceptable

- **React Email** — A template library, not an email sending service. React Email is for composing HTML emails with React components; it does not handle delivery. Confusingly, it's often paired with Resend for sending.
- **MJML** — Markup language for responsive emails that adds a YAML-like abstraction over HTML. MJML's compilation step and proprietary syntax are unnecessary when Resend's React Email templates are available.
- **Nodemailer** — Low-level SMTP library that requires manual configuration of transport, authentication, and deliverability. Nodemailer handles sending but not deliverability, bounce management, or analytics.
- **SendGrid** — Legacy email service with an aging API, complex pricing tiers, and less modern developer experience compared to Resend.

### Cross-References

- Related: [api-layer.md](./api-layer.md)