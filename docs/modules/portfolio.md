# Portfolio

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Manage holdings and show cost basis, current value, unrealized profit/loss,
allocation, and live/delayed/stale quote status.

## Architecture and contracts

- Holding CRUD persists symbol, asset type, quantity, average cost, and currency;
  stored current price is not the live source of truth.
- REST provides the initial holding/quote snapshot. Market WebSocket patches a
  dedicated symbol-keyed quote store after render.
- Backend calculates market value and P/L from normalized quotes. TanStack Query
  owns holdings; only subscribed rows observe their quote key.

## Reuse, verification, and evidence

- Installed/reused capabilities: none yet; reuse auth, generated contracts,
  forms, formatters, market status, quote store, and table primitives.
- Verify CRUD, cost basis, value/P&L, allocation, reconnect/stale behavior, user
  isolation, and fallback when a provider is unavailable.
- Measure tick volume, affected row render count, and unchanged-row behavior.
