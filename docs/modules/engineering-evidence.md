# Engineering Evidence

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Expose reproducible evidence for large-data, search, realtime, chat, bundle,
accessibility, and test-quality claims at `/engineering`.

## Architecture and data

- Read measurements produced by explicit benchmark/test workflows; never embed
  invented or hand-tuned success values.
- Show setup, baseline, optimized result, units, environment, and collection date
  for each experiment.
- Planned experiments: transaction request/DOM rows, debounce request count,
  market tick/selective rerender, 2,000-message render, first-token latency,
  bundle size, Lighthouse, test count, and coverage.

## Reuse, verification, and impact

- Installed/reused capabilities: none yet; reuse metric/table/chart components
  and output from existing test/build tools rather than creating parallel runners.
- Verify benchmark repeatability, honest unavailable states, accessible tables,
  and no production-sensitive values in evidence artifacts.
- Source/tests: created after measured features exist.
