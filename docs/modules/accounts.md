# Accounts

Last updated: 2026-09-07
Status: planned

## Purpose and flows

List balances and let a user add, edit, delete, or open transactions for cash,
bank, card, and investment accounts.

## Architecture and contracts

- Planned API: `GET/POST /accounts`, `PATCH/DELETE /accounts/:id`.
- TanStack Query owns account server state; forms use React Hook Form + Zod;
  dialogs/sheets and confirmation state remain local.
- Backend services enforce ownership, account type, currency, and deletion rules.
- UI defines skeleton, actionable empty state, errors with retry, and disabled
  destructive actions with an explanation.

## Reuse, verification, and impact

- Installed/reused capabilities: none yet; reuse auth identity, generated API
  types, money formatting, form fields, and shadcn primitives when available.
- Verify CRUD, validation, user isolation, cache updates, and account deletion
  behavior with related transactions.
- Source/tests: created in the Accounts implementation phase.
