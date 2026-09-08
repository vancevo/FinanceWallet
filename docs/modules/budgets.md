# Budgets

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Create and manage monthly/category budgets, inspect usage and remaining amount,
and surface healthy, near-limit, or exceeded status plus savings guidance.

## Architecture and contracts

- Planned API covers budget CRUD and backend-calculated usage, remaining amount,
  and status; exact routes and thresholds are finalized before implementation.
- URL state owns month selection; TanStack Query owns budget results; forms use
  React Hook Form + Zod; dialogs and progress interaction remain local.
- Status uses icon/text as well as color.

## Reuse, verification, and impact

- Installed/reused capabilities: none yet; reuse categories, generated contracts,
  money/percentage formatters, progress/status components, and form primitives.
- Verify CRUD, threshold boundaries, calculations, category ownership, empty
  months, error/retry, and accessibility.
- Source/tests: created in the Budget implementation phase.
