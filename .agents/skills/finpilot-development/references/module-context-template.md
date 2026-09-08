# FinPilot Module Context Template

Use this template for `docs/modules/<module-name>.md`. Keep entries concise,
remove unused headings, and link to source files rather than copying code.

```md
# <Module Name>

Last updated: YYYY-MM-DD
Status: planned | in-progress | complete | blocked

## Purpose and scope

- User problem:
- In scope:
- Out of scope:

## User flows and acceptance criteria

- Flow:
- Acceptance criteria:

## Architecture and state ownership

- Data source:
- Server state:
- URL state:
- Form state:
- Local/shared/live state:
- Loading, empty, error, retry, and cancellation behavior:

## Reused capabilities

- Packages:
- Components:
- Hooks:
- Utilities/types/schemas:
- Services/stores/repositories/infrastructure:

## Contracts

- API endpoints/events:
- Request/response types:
- Database or cross-module dependencies:

## Module map

- Entry points:
- Important files:
- Tests:

## New decisions

- New files or abstractions:
- Why existing capabilities were insufficient:
- Impact on current consumers/resources:

## Verification and evidence

- Commands run:
- Observed results:
- Performance baseline/result, when required:

## Known issues and next step

- Known issues:
- Next approved phase:
```
