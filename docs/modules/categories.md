# Categories

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Manage restrained income and expense categories used by transactions and
budgets.

## Architecture and contracts

- Planned CRUD endpoints under `/categories`; exact DTOs are defined before
  implementation and emitted through OpenAPI.
- TanStack Query owns lists; React Hook Form + Zod owns create/edit forms;
  list interaction state remains local.
- Backend enforces ownership, category type, uniqueness policy, and safe delete
  behavior for referenced records.

## Reuse, verification, and impact

- Installed/reused capabilities: none yet; reuse auth, generated types, form
  primitives, status feedback, icons, and query-key factories when available.
- Verify CRUD, validation, isolation, reference constraints, loading, empty,
  error, and retry states.
- Source/tests: created in the Categories implementation phase.
