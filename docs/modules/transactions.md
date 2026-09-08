# Transactions

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Search, filter, sort, inspect, create, edit, select, and bulk-categorize a seeded
dataset of 50,000 transactions without transferring or rendering it all.

## Architecture and contracts

- Planned API: list/detail/create/update/delete and
  `PATCH /transactions/bulk-category`.
- List inputs: cursor, limit, search, account, category, type, dates, sort, order.
- PostgreSQL performs indexed filtering/search/sorting and returns cursor pages;
  target page size is 100 rows.
- URL parameters own filters and sort; TanStack Infinite Query owns pages;
  React Hook Form + Zod owns edit/create forms; selection and sheet state are
  local unless measured behavior proves otherwise.
- Search is debounced and stale requests are cancelled. TanStack Virtual limits
  DOM rows; loading, empty, terminal-page, error, and retry paths are explicit.

## Reuse, verification, and evidence

- Installed/reused capabilities: none yet; planned reuse includes auth,
  generated contracts, query keys, filter controls, money/date formatters,
  TanStack Table, TanStack Virtual, and shadcn primitives.
- Verify pagination stability, filters, sort, isolation, URL restoration,
  cancellation, bulk updates, and virtualized keyboard/scroll behavior.
- Measure request count, payload/page size, loaded rows, DOM rows, search request
  reduction, and render performance. Never record estimated values as evidence.
