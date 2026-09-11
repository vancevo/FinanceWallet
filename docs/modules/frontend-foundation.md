# Frontend Foundation

Last updated: 2026-09-11
Status: in-progress

## Purpose and scope

- User problem: replace the Vite starter with a reusable FinPilot app shell.
- In scope: shadcn/Base UI primitives, reusable layout components, compound display components, mock dashboard data, and a shared mobile breakpoint hook.
- Out of scope: routing, authentication, real API data fetching, forms, charts backed by a charting library, and business mutations.

## User flows and acceptance criteria

- Flow: a user opens the web app and sees a responsive FinPilot dashboard shell.
- Acceptance criteria: the shell uses reusable components, mobile behavior is centralized through `useMobile`, and frontend typecheck/build pass.

## Architecture and state ownership

- Data source: local mock data returned by `useDashboardMock`.
- Server state: not introduced yet.
- URL state: not introduced yet.
- Form state: not introduced yet.
- Local/shared/live state: viewport state is owned by `useMobile`.
- Loading, empty, error, retry, and cancellation behavior: not required until real API data fetching starts.

## Reused capabilities

- Packages: React, Vite, Tailwind CSS, shadcn/Base UI components, lucide-react, clsx/tailwind-merge through the configured `cn` utility.
- Components: shadcn `Button`, `Card`, `Avatar`, and `Input`.
- Hooks: shared `useMobile` for mobile breakpoint detection.

## Contracts

- API endpoints/events: no backend calls yet.
- Request/response types: no API DTOs yet.
- Database or cross-module dependencies: dashboard mock values mirror the seeded demo dataset conceptually.

## Module map

- Entry points: `apps/web/src/main.tsx`, `apps/web/src/app/App.tsx`.
- Important files: `apps/web/src/hooks/use-mobile.ts`, `apps/web/src/components/layout/app-shell.tsx`, `apps/web/src/components/layout/sidebar.tsx`, `apps/web/src/components/layout/topbar.tsx`, `apps/web/src/components/data-display/metric-card.tsx`, `apps/web/src/components/data-display/section-card.tsx`, `apps/web/src/features/dashboard/dashboard-page.tsx`, `apps/web/src/features/dashboard/components/*.tsx`, `apps/web/src/features/dashboard/use-dashboard-mock.ts`, `apps/web/src/lib/nav.ts`, `apps/web/src/index.css`.
- Tests: frontend typecheck and production build.

## New decisions

- New files or abstractions: `useMobile`, `AppShell`, `Sidebar`, `Topbar`, `MetricCard`, `MetricCard.Item`, dashboard feature cards, `SectionCard`, and `useDashboardMock`.
- Dashboard composition: KPI, spending category, account balance, and recent transaction sections are split into feature-level components so `DashboardPage` stays focused on page layout and data wiring.
- Spending category chart: the placeholder conic chart is generated from category values and `spendingTotal`, allowing mock categories to be added or removed without rewriting section markup.
- Dashboard list keys: dashboard mock collections include stable `id` fields, and React render keys in dashboard page/components use those ids instead of labels, names, or composite display fields.
- Shared modal/pagination: `Dialog` wrappers and `PaginationControls` live in shared components; dashboard account balances use them for a 5-item preview plus a paginated View all modal.
- Pagination state: reusable `usePagination` owns page/page-size slicing and clamping. Account balances only shows the View all action when the account collection exceeds the 5-item preview limit, and its modal uses a fixed height to avoid layout jumps between pages.
- Compound component naming: local compound components expose `Container` for the outer wrapper instead of `Root` to avoid confusing app layout containers with React/root primitives.
- Why existing capabilities were insufficient: the Vite starter had no app shell, no reusable product components, and no shared responsive state.
- Impact on current consumers/resources: `App.tsx` now renders `DashboardPage`; Vite starter assets are no longer part of the runtime shell.

## Verification and evidence

- Commands run: `pnpm --filter @finpilot/web typecheck`; `pnpm --filter @finpilot/web build`.
- Observed results: both passed. On 2026-09-11, `pnpm --filter @finpilot/web typecheck` also passed after adding `MetricCard.Item` and dashboard feature cards; `pnpm --filter @finpilot/web lint` passed with existing Fast Refresh/key warnings in shared/layout files. Vite still warns when the shell uses Node.js 20.14.0, which is below Vite's preferred 20.19+ or 22.12+ runtime.
- Performance baseline/result, when required: not required for static shell work.

## Known issues and next step

- Known issues: dashboard data is static mock data; charts are CSS placeholders; no routing or auth yet.
- Next approved phase: run the web dev server for visual review, then polish the shell or move to authentication.
