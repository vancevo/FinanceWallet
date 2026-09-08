# Repository Foundation

Last updated: YYYY-MM-DD
Status: in-progress

## Purpose and scope

- Establish the pnpm monorepo and shared development configuration.
- Provide a local PostgreSQL environment.
- Excludes React, NestJS, Prisma, and business modules.

## Reused capabilities

- Corepack and pnpm workspaces
- ESLint flat config
- typescript-eslint
- Prettier
- Docker Compose
- Shared FinPilot TypeScript configuration

## Module map

- `package.json`
- `pnpm-workspace.yaml`
- `packages/eslint-config`
- `packages/tsconfig`
- `docker-compose.yml`
- `.env.example`

## Verification

- `pnpm install`
- `pnpm lint`
- `pnpm format:check`
- `docker compose config`
- PostgreSQL health check

## Known issues and next step

- Application packages have not been scaffolded.
- Next phase: NestJS API, Prisma, schema, migration, and seed.