# API Foundation

Last updated: 2026-09-08
Status: in-progress

## Purpose and scope

- User problem: connect the NestJS API runtime to the migrated Prisma schema.
- In scope: Prisma provider module, Prisma client lifecycle wiring, seed data, and API typecheck readiness.
- Out of scope: business endpoints, authentication guards, and transaction balance mutation logic.

## User flows and acceptance criteria

- Flow: API modules can inject `PrismaService` and query the PostgreSQL-backed Prisma schema.
- Acceptance criteria: `PrismaModule` is imported by `AppModule`, `PrismaService` manages connect/disconnect lifecycle, API typecheck passes, and a repeatable demo seed is available.

## Architecture and state ownership

- Data source: PostgreSQL through Prisma Client.
- Server state: owned by NestJS services that inject `PrismaService`.
- URL state: not applicable yet.
- Form state: not applicable yet.
- Local/shared/live state: no additional application state introduced.
- Loading, empty, error, retry, and cancellation behavior: to be defined by future endpoint modules.

## Reused capabilities

- Packages: `@nestjs/common`, `@prisma/client`.
- Services/stores/repositories/infrastructure: NestJS module/provider pattern and generated Prisma Client.

## Contracts

- API endpoints/events: no endpoint changes.
- Request/response types: no DTO changes.
- Database or cross-module dependencies: depends on `apps/api/prisma/schema.prisma` and generated Prisma Client.

## Module map

- Entry points: `apps/api/src/app.module.ts`.
- Important files: `apps/api/src/prisma/prisma.module.ts`, `apps/api/src/prisma/prisma.service.ts`, `apps/api/prisma/seed.ts`, `apps/api/tsconfig.json`.
- Tests: API typecheck currently covers compile-time wiring.

## New decisions

- New files or abstractions: `PrismaModule` exports `PrismaService`; `PrismaService` extends `PrismaClient`; `seed.ts` creates the demo dataset.
- Why existing capabilities were insufficient: the API was still a Nest starter and had no injectable database provider.
- Impact on current consumers/resources: no existing consumers changed; future API modules can import `PrismaModule` or use the root import.

## Verification and evidence

- Commands run: `pnpm --filter @finpilot/api typecheck`; `pnpm --filter @finpilot/api db:seed`; Prisma count query for `demo@finpilot.local`.
- Observed results: typecheck passed; seed created 5 accounts, 15 categories, 50,000 transactions, 12 budgets, 9 holdings, 20 conversations, and 40 messages.
- Performance baseline/result, when required: not required for lifecycle wiring.

## Known issues and next step

- Known issues: no API modules use `PrismaService` yet.
- Next approved phase: first business module endpoints.
