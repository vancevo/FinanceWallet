# Market Data

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Provide normalized crypto and stock quotes to Portfolio and AI tools while
hiding vendor differences and licensing/status limitations.

## Architecture and contracts

- A backend `MarketDataProvider` exposes quote lookup, batch lookup, and symbol
  subscription through a normalized `MarketQuote` contract.
- A gateway selects providers, handles timeout/reconnect/error normalization,
  and emits explicit `LIVE`, `DELAYED`, or `STALE` status.
- Frontend components never connect directly to vendors and never receive keys.

## Reuse, verification, and impact

- Installed/reused capabilities: none yet; prefer provider SDK already required
  elsewhere or direct protocol support when it avoids abstraction bloat.
- Verify normalization, unknown symbols, partial batch failure, reconnect,
  staleness, secret handling, subscription cleanup, and bounded resource usage.
- Provider and licensing choice remains open until the implementation phase.
