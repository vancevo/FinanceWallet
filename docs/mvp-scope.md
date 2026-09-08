# FinPilot MVP Scope

Last updated: 2026-09-07
Status: accepted for planning

## Product outcome

FinPilot is a personal-finance dashboard with portfolio tracking, live or
delayed market quotes, and an AI copilot grounded in the user's financial data.
It exists to demonstrate verifiable frontend and full-stack engineering.

## Included

- Authentication and per-user data isolation
- Accounts and transaction categories
- Transactions with 50,000 seeded records, server query operations, cursor
  pagination, infinite loading, and virtualized rendering
- Analytics, dashboard KPIs, budgets, and anomaly detection
- Manually entered or seeded investment holdings
- Normalized crypto and stock market quotes with explicit live/delayed/stale
  status
- AI conversations, SSE streaming, validated financial tools, simulations, and
  structured response blocks
- Responsive and accessible UI with loading, empty, error, and retry states
- Automated tests and an Engineering Evidence page using measured values

## Excluded from MVP

- Money transfers, payments, real trades, and brokerage connections
- CSV import, bank-statement PDF ingestion, RAG, subscription detection,
  forecasting, watchlists, and price alerts
- Redis, BullMQ, pgvector, microservices, event buses, and Web Workers unless a
  measured problem proves they are required

## Definition of success

- Core finance flows work end to end with user isolation.
- Large-data, realtime, and long-chat claims have reproducible measurements.
- Financial arithmetic and aggregation are backend-grounded.
- The LLM explains and recommends; it is not the numerical source of truth.
- Lint, typecheck, relevant tests, and production builds pass.
- Documentation describes architecture decisions and real evidence without
  fabricated metrics.
