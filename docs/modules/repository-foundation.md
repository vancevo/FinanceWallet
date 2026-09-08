# Repository Foundation

Last updated: 2026-09-07
Status: in-progress

## Purpose and scope

- Establish the pnpm monorepo and shared development configuration.
- Provide reusable TypeScript, ESLint, Prettier, Git, and editor conventions.
- PostgreSQL/Docker configuration is intentionally left for the user.
- React, NestJS, Prisma, and business modules remain out of scope.

## Reused capabilities

- Corepack and the user-pinned pnpm package-manager version
- pnpm workspaces
- ESLint flat config with `@eslint/js` and `typescript-eslint`
- Prettier and shared TypeScript configurations

## Module map

- `package.json`
- `pnpm-workspace.yaml`
- `eslint.config.mjs`
- `prettier.config.mjs`
- `packages/eslint-config`
- `packages/tsconfig`
- `.gitignore`
- `.editorconfig`

## Verification

- Node.js `24.7.0` selected through NVM.
- pnpm `12.3.4` is pinned in `package.json`; `pnpm-lock.yaml` was generated and
  passed a frozen-lockfile install.
- `pnpm peers check`: no peer dependency issues.
- `pnpm lint`: passed.
- `pnpm format:check`: passed; the consolidated Master Context is excluded to
  avoid an unrelated large formatting rewrite.
- `pnpm typecheck`, `pnpm test`, and `pnpm build`: workspace commands passed,
  with no application package scripts to execute yet.
- Workspace discovery: root plus `@finpilot/eslint-config` and
  `@finpilot/tsconfig`.

## Known issues and next step

- Application packages have not been scaffolded.
- Docker/PostgreSQL and `.env.example` are pending user implementation.
- The broken Corepack `pnpm`/`pnpx` symlinks for NVM Node 24 were retained as
  `.corepack-backup`; npm-installed pnpm `12.3.4` now provides the active
  executables.
- Next project phase after infrastructure completion: NestJS API, Prisma,
  database schema, migration, and seed data.
