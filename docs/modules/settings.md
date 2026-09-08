# Settings

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Manage profile, light/dark/system appearance, default currency, category access,
market-data preferences, and optional AI preferences.

## Architecture and state

- Persist user/domain preferences through backend APIs when they must follow the
  account; keep device-only appearance state locally.
- TanStack Query owns persisted settings; React Hook Form + Zod owns forms;
  theme application uses the shared app provider established by the frontend
  foundation.
- Define loading, save progress, validation, failure/retry, and unsaved-change
  behavior before implementation.

## Reuse, verification, and impact

- Installed/reused capabilities: none yet; reuse auth/profile contracts,
  categories, form primitives, theme provider, and status feedback.
- Verify persistence, theme system fallback, validation, user isolation,
  accessibility, and no unnecessary full-app rerenders.
- Source/tests: created in the Settings implementation phase.
