# API Foundation

Last updated: 2026-09-08
Status: in-progress

## Purpose and scope

- User problem: connect the NestJS API runtime to the migrated Prisma schema.
- In scope: Prisma provider module, Prisma client lifecycle wiring, and API typecheck readiness.
- Out of scope: business endpoints, authentication guards, seed data, and transaction balance logic.

## User flows and acceptance criteria

- Flow: API modules can inject `PrismaService` and query the PostgreSQL-backed Prisma schema.
- Acceptance criteria: `PrismaModule` is imported by `AppModule`, `PrismaService` manages connect/disconnect lifecycle, and API typecheck passes.

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
- Important files: `apps/api/src/prisma/prisma.module.ts`, `apps/api/src/prisma/prisma.service.ts`, `apps/api/tsconfig.json`.
- Tests: API typecheck currently covers compile-time wiring.

## New decisions

- New files or abstractions: `PrismaModule` exports `PrismaService`; `PrismaService` extends `PrismaClient`.
- Why existing capabilities were insufficient: the API was still a Nest starter and had no injectable database provider.
- Impact on current consumers/resources: no existing consumers changed; future API modules can import `PrismaModule` or use the root import.

## Verification and evidence

- Commands run: `pnpm --filter @finpilot/api typecheck`.
- Observed results: passed after silencing the TypeScript 6 `baseUrl` deprecation with `ignoreDeprecations`.
- Performance baseline/result, when required: not required for lifecycle wiring.

## Known issues and next step

- Known issues: no seed data yet; no API modules use `PrismaService` yet.
- Next approved phase: seed data or first business module endpoints.
