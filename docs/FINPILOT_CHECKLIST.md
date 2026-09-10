# FinPilot Completion Checklist

Last updated: 2026-09-08

Use this file as the working checklist for finishing FinPilot. Keep each item small enough to verify with a command, screenshot, or API smoke test.

## Current Status

- [x] Repository foundation exists.
- [x] NestJS API package exists.
- [x] Frontend app foundation exists.
- [x] PostgreSQL is connected through Prisma.
- [x] Prisma schema is migrated.
- [x] Demo seed creates 50,000 transactions.
- [x] Prisma is integrated into NestJS through `PrismaModule` and `PrismaService`.
- [ ] Authentication flow exists.
- [ ] Business APIs exist for accounts, categories, transactions, analytics, budgets, and portfolio.
- [ ] Frontend screens consume real backend data.
- [ ] Performance checks exist for large transaction lists.

## Phase 0: Checkpoint Before More Work

- [x] Run `git status`.
- [ ] Confirm `.env`, secrets, `node_modules`, build output, and local database files are not staged.
- [ ] Commit current API/schema/seed foundation.
- [x] Run `pnpm typecheck`.
- [ ] Run `pnpm test`.
- [x] Run `pnpm build`.

Suggested commit:

```bash
git add apps docs/modules/api-foundation.md docs/FINPILOT_CHECKLIST.md
git commit -m "feat(api): establish prisma foundation"
```

## Phase 1: Frontend Foundation

- [x] Create or verify `apps/web`.
- [x] Install and configure React/Vite or the selected frontend framework.
- [ ] Add Tailwind/shadcn if this is still the chosen UI stack.
- [x] Add root-compatible scripts: `dev`, `typecheck`, `build`, `test` if applicable.
- [ ] Create base app shell layout.
- [x] Add API client configuration using environment variables.
- [ ] Add frontend module context under `docs/modules/dashboard.md` or a new frontend foundation doc.
- [ ] Verify `pnpm dev`.
- [x] Verify `pnpm typecheck` and `pnpm build`.

Exit criteria:

- [ ] Web app starts locally.
- [x] Root workspace scripts include both API and web where applicable.
- [ ] A user can open the first screen without runtime errors.

## Phase 2: Authentication

- [ ] Decide dev auth scope: simple demo login first, production-grade auth later.
- [ ] Create auth module in API.
- [ ] Add password hashing only if real email/password login is in scope.
- [ ] Add session/JWT strategy.
- [ ] Add current-user endpoint.
- [ ] Add frontend login/logout flow.
- [ ] Protect app routes that need a user.
- [ ] Update `docs/modules/authentication.md`.
- [ ] Verify auth happy path and unauthenticated error path.

Exit criteria:

- [ ] Demo user can sign in.
- [ ] Frontend can fetch the current user.
- [ ] Protected API routes reject unauthenticated requests.

## Phase 3: Accounts API

- [ ] Create `accounts` module in API.
- [ ] Add account list endpoint.
- [ ] Add account detail endpoint if needed by UI.
- [ ] Add account create/update/delete with validation.
- [ ] Prevent deleting accounts with transactions unless product behavior is defined.
- [ ] Return balances from the database.
- [ ] Add focused tests or API smoke checks.
- [ ] Update `docs/modules/accounts.md`.

Exit criteria:

- [ ] Frontend or API client can list the 5 demo accounts.
- [ ] Account mutations validate ownership and input.

## Phase 4: Categories API

- [ ] Create `categories` module in API.
- [ ] Add list endpoint filtered by type.
- [ ] Add create/update/delete with unique `(userId, type, name)` behavior.
- [ ] Prevent unsafe delete or define SetNull behavior clearly.
- [ ] Update `docs/modules/categories.md`.

Exit criteria:

- [ ] API returns income and expense categories separately.
- [ ] Duplicate category names fail predictably within the same user/type.

## Phase 5: Transactions API

- [ ] Create `transactions` module in API.
- [ ] Add paginated transaction list endpoint.
- [ ] Add filters: account, category, type, date range, search.
- [ ] Add create income/expense transaction.
- [ ] Add create transfer transaction with `destinationAccountId`.
- [ ] Enforce positive amount.
- [ ] Enforce transfer source and destination are different accounts.
- [ ] Update account balances inside a Prisma transaction.
- [ ] Add update/delete behavior that correctly reverses old balance effects.
- [ ] Add tests for balance changes.
- [ ] Update `docs/modules/transactions.md`.

Exit criteria:

- [ ] API can page through 50,000 demo transactions.
- [ ] Balances remain correct after create/update/delete.
- [ ] Transfers do not appear as income or expense analytics unless intentionally requested.

## Phase 6: Transactions Frontend

- [ ] Create transaction list screen.
- [ ] Add filters and search.
- [ ] Add create/edit transaction form.
- [ ] Add transfer form behavior.
- [ ] Add loading, empty, error, and retry states.
- [ ] Verify rendering with the 50,000 transaction demo dataset.

Exit criteria:

- [ ] User can browse, filter, create, edit, and delete transactions from the UI.
- [ ] UI remains responsive with large data.

## Phase 7: Pagination And Performance

- [ ] Use cursor or stable offset pagination for transactions.
- [ ] Add infinite query behavior if selected.
- [ ] Add list virtualization for large transaction views.
- [ ] Measure initial load and scrolling performance.
- [ ] Document benchmark evidence in `docs/modules/engineering-evidence.md`.

Exit criteria:

- [ ] Large transaction list scrolls smoothly.
- [ ] Performance result is measured, not guessed.

## Phase 8: Analytics And Dashboard

- [ ] Create analytics backend endpoints.
- [ ] Add monthly income vs expense aggregation.
- [ ] Add spending by category.
- [ ] Add account balance summary.
- [ ] Add dashboard frontend screen.
- [ ] Add chart loading/empty/error states.
- [ ] Update `docs/modules/analytics.md` and `docs/modules/dashboard.md`.

Exit criteria:

- [ ] Dashboard uses real seeded data.
- [ ] Analytics excludes transfers from income/expense totals by default.

## Phase 9: Budgets

- [ ] Create budgets backend endpoints.
- [ ] Add monthly budget list/create/update/delete.
- [ ] Calculate spent amount per budget category/month.
- [ ] Add budget frontend screen.
- [ ] Update `docs/modules/budgets.md`.

Exit criteria:

- [ ] User can compare monthly budget vs actual spending.

## Phase 10: Portfolio

- [ ] Create holdings CRUD endpoints.
- [ ] Add portfolio frontend screen.
- [ ] Add static/manual market values first if live market data is not approved yet.
- [ ] Update `docs/modules/portfolio.md`.

Exit criteria:

- [ ] User can view and manage seeded holdings.

## Phase 11: Market Data

- [ ] Choose market data provider.
- [ ] Add provider abstraction only after one real provider is selected.
- [ ] Add crypto live data.
- [ ] Add stock provider.
- [ ] Add backend WebSocket only if live updates are needed.
- [ ] Update `docs/modules/market-data.md`.

Exit criteria:

- [ ] Portfolio can show current or recently refreshed market prices.

## Phase 12: AI Copilot

- [ ] Create basic copilot backend endpoint.
- [ ] Define what financial context is passed to the assistant.
- [ ] Add conversation/message persistence.
- [ ] Add SSE streaming if needed.
- [ ] Add frontend chat UI.
- [ ] Update `docs/modules/ai-copilot.md`.

Exit criteria:

- [ ] User can ask questions about their financial data.
- [ ] Conversations persist and reload.

## Always Before Marking A Phase Done

- [ ] Update the related `docs/modules/*.md` file.
- [ ] Run focused tests or smoke checks.
- [ ] Run `pnpm typecheck`.
- [ ] Run `pnpm build` when UI or compile config changed.
- [ ] Check `git status`.
- [ ] Commit a small checkpoint.

## Next Recommended Task

- [ ] Finish Phase 0 checkpoint.
- [ ] Start Phase 1 frontend foundation.
