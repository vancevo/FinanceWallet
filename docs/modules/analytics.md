# Analytics

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Explain income, expense, savings, category distribution, trends, month changes,
and spending anomalies for a selected date range.

## Architecture and contracts

- Planned API: `/analytics/overview`, `/cash-flow`,
  `/spending-by-category`, `/spending-trend`, `/month-comparison`, `/anomalies`.
- Backend services calculate and aggregate from scoped database queries; raw
  transaction collections are not shipped for client aggregation.
- URL parameters own date/comparison selections; TanStack Query owns results;
  chart interaction state remains local.

## Reuse, verification, and impact

- Installed/reused capabilities: none yet; reuse date-range controls, generated
  contracts, query keys, metric/chart cards, money/percentage formatters, and
  Recharts when established.
- Verify income, expense, savings rate, grouping, empty periods, comparisons,
  anomalies, user isolation, and bounded response payloads.
- Source/tests: created in the Analytics implementation phase.
