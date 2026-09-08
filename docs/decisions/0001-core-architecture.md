# ADR 0001: Core Architecture and Boundaries

Date: 2026-09-07
Status: Accepted

## Context

FinPilot must demonstrate large-data frontend engineering, realtime market UI,
grounded AI workflows, and verifiable measurements without unnecessary
infrastructure.

## Decision

- Use a pnpm TypeScript monorepo with React/Vite in `apps/web`, NestJS in
  `apps/api`, and narrowly scoped shared configuration/packages.
- Use PostgreSQL with Prisma and indexed, per-user queries.
- Generate frontend contract types from NestJS OpenAPI output instead of
  maintaining duplicate DTO definitions.
- Use REST for snapshots and CRUD, SSE for AI response streaming, and WebSocket
  for market quote updates.
- Use a market-provider interface and an LLM-gateway interface to isolate
  external vendors.
- Keep all financial calculations and simulations in backend domain services.
- Apply feature-first frontend structure and explicit state ownership.
- Use established packages from the Master Context before custom abstractions.

## Consequences

- The application can render initial portfolio state without waiting for a live
  connection and can degrade to delayed or stale quotes explicitly.
- AI output remains explainable and user-scoped because tools expose validated
  domain operations rather than direct database access.
- Shared abstractions may emerge later, but duplication is tolerated briefly
  until at least two real use cases establish a stable interface.
- Redis, queues, RAG infrastructure, and microservices remain deferred until
  measured requirements justify their operational cost.
