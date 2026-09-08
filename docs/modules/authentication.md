# Authentication

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Register, sign in, refresh a session, sign out, and protect authenticated routes.
Every domain request must derive and enforce the current user's identity.

## Architecture and contracts

- Planned API: `POST /auth/register`, `/login`, `/refresh`, `/logout`.
- Backend: password hashing, short-lived access token, refresh token, JWT guard,
  and `CurrentUser`; controllers delegate to services.
- Frontend: TanStack Query for server mutations, React Hook Form + Zod for form
  state, and local UI state for password visibility.
- Handle validation, invalid credentials, expired refresh, 401 retry boundaries,
  loading, and form-level/server errors without redirect loops.

## Reuse, verification, and impact

- Installed/reused capabilities: none yet; inspect foundation packages first.
- Planned dependencies: NestJS auth primitives, Passport/JWT-compatible package,
  React Router, TanStack Query, React Hook Form, and Zod.
- Verify hashing, register/login/refresh/logout, unauthorized access, protected
  routing, token isolation, and secret-free logs.
- Source/tests: created in the Authentication implementation phase.
