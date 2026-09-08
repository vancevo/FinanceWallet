# System Architecture

Last updated: 2026-09-07
Status: accepted for foundation work

## Runtime boundaries

```text
Browser (React/Vite)
  ├─ REST ───────────────┐
  ├─ SSE chat ───────────┼─> NestJS API ─> Prisma ─> PostgreSQL
  └─ market WebSocket ───┘       ├─> Market gateway ─> providers
                                 └─> LLM gateway ────> OpenRouter
```

The browser never contacts data providers, the database, or OpenRouter
directly. Provider keys and AI credentials remain backend-only.

## Responsibility boundaries

- Controllers translate transport concerns and delegate business logic.
- Services enforce domain rules and calculations.
- Repositories isolate Prisma/database access.
- The market gateway normalizes provider-specific quote formats.
- The AI orchestrator can invoke only registered, validated domain tools.
- The backend injects `userId`; the model cannot choose another user's scope.
- Arithmetic, aggregation, anomaly detection, and simulation run in backend
  services. The LLM performs explanation and recommendation.

## Frontend state ownership

- TanStack Query: REST server state and persistent conversations
- URL search parameters: transaction filters, search, sort, and date range
- React Hook Form + Zod: form state and validation
- `useState`/`useReducer`: local UI state
- Zustand only when required: live quote state or genuinely shared UI state
- Dedicated stream controller: active assistant response and cancellation

Do not copy query data into Zustand or invalidate query caches on every market
tick.

## Large-data path

```text
PostgreSQL (50,000 transactions)
  -> indexed server filter/search/sort
  -> cursor pages (target 100 rows)
  -> TanStack infinite query
  -> TanStack Virtual (viewport-sized DOM)
```

Analytics endpoints return backend aggregates, not raw transaction collections.

## Portfolio load path

Render a REST snapshot first, then connect and subscribe through WebSocket.
Patch quotes by symbol so one quote update does not rerender the full portfolio.

## Chat path

Persist user/assistant messages through REST-backed query state. Keep an active
SSE response separately until `message_done`, then reconcile the persistent
cache. Supported blocks are text, metric, chart, table, transaction list, and
portfolio summary, with a safe unknown-block fallback.

## Intended repository shape

```text
apps/web
apps/api
packages/shared
packages/eslint-config
packages/tsconfig
docs
```

Feature code starts inside its module. Promote code to shared only after two
real use cases, a stable API, and removal of business-specific behavior.
