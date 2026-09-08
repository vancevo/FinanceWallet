# AI Copilot

Last updated: 2026-09-07
Status: planned

## Purpose and flows

Let users ask grounded financial questions, receive streamed explanations,
inspect tool activity, stop/retry generation, and render structured results.

## Architecture and contracts

- Conversation REST endpoints persist threads/messages; an SSE endpoint emits
  `message_start`, `text_delta`, `tool_start`, `tool_result`, `message_done`, and
  `error` events.
- An `LLMGateway` isolates OpenRouter. A whitelist registry validates tool names
  and arguments, injects `userId`, applies timeouts, and calls domain services.
- TanStack Query owns persistent messages; a dedicated controller owns the active
  stream, partial response, cancellation, and retry lifecycle.
- Backend tools calculate summaries, comparisons, anomalies, budgets, portfolio,
  quotes, and simulations. The LLM explains or recommends from those results.

## Reuse, verification, and evidence

- Installed/reused capabilities: none yet; reuse existing domain services,
  generated contracts, formatters, charts/tables, and virtualization primitives.
- Verify valid/invalid tools and arguments, isolation, timeout/failure, SSE order,
  abort/retry, unknown structured blocks, and secret-free errors.
- Measure first-token latency and 2,000-message normal versus virtualized render.
