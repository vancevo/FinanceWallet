# Dashboard

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Give an authenticated user a concise financial overview: net worth, income,
expense, savings rate, cash flow, category spending, recent transactions, and a
secondary AI insight.

## Architecture and state

- Compose read models from Accounts, Analytics, Transactions, and Budget APIs;
  do not duplicate their calculations in the browser.
- URL state owns the date range; TanStack Query owns server data; lightweight
  chart/UI interaction stays local.
- Each section handles loading, partial failure, empty data, retry, and responsive
  layout without blocking unrelated sections.

## Reuse, verification, and impact

- Installed/reused capabilities: none yet; dashboard should reuse established
  metric/chart cards, date controls, transaction rows, query keys, and formatters.
- Verify KPI correctness against backend responses, partial loading/error states,
  at most four primary KPIs, accessibility, and no page-level overflow.
- Source/tests: created in the Dashboard implementation phase.
