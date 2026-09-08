# Quality Gates

Last updated: 2026-09-07

## Before planning a substantial feature

- Identify the user flow and measurable acceptance criteria.
- Inspect dependencies, exports, imports, call sites, tests, and configuration.
- Record what will be reused, composed, extended, adapted, or newly created.
- Identify API/data source and server, URL, form, local, shared, live, and
  streaming state ownership.
- Define loading, empty, error, retry, cancellation, and race-condition paths.
- Estimate data and DOM size; define performance measurement when relevant.
- Identify affected contracts, consumers, security boundaries, and approvals.

Implementation starts only after the architecture and plan are approved.

## Before declaring a phase complete

Run only checks that exercise the changed paths:

- formatting/lint for source and configuration
- typecheck for affected packages
- focused unit/integration tests and critical E2E flows
- production build or runtime smoke check where relevant
- contract or migration validation where relevant
- performance measurement for stated performance claims

Record the command and observed result. A generated file is not evidence that
the behavior works. Do not invent metrics.

## Completion report

Every phase reports status, implemented and reused capabilities, new files or
components, architecture decisions, tests, verification, performance evidence,
known issues, and the next phase. A failed required check keeps the phase
incomplete or blocked.
