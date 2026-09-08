# FinPilot — Master Project Context, Architecture, Pipeline & UI Specification

> Consolidated from the full project discussion.
>
> Purpose: keep one source of truth that can be reviewed by the developer, imported into an AI coding agent, or used as the base specification for implementation and UI design.

---

# 1. ORIGINAL GOAL

The project started from the goal of creating a PET project for a Frontend Developer profile with real enterprise experience.

The project should not be a basic CRUD portfolio such as:

- Todo App
- Weather App
- Basic E-commerce
- Simple ChatGPT clone

The project must provide **evidence** for engineering claims such as:

- Frontend architecture
- Reusable component design
- Large dataset handling
- Data-heavy dashboard development
- Server/client state separation
- Performance optimization
- Realtime UI
- API integration
- Complex workflow UI
- AI-powered product development

The main principle is:

```text
CV Claim
   ↓
Project Feature
   ↓
Code
   ↓
Measurement
   ↓
Evidence
```

The project should allow an interviewer to verify technical claims instead of only reading them in a CV.

---

# 2. INITIAL PET PROJECT DIRECTIONS CONSIDERED

Several project domains were considered.

## 2.1 Manufacturing ERP

Suggested project:

```text
FactoryFlow
```

Modules:

- Dashboard
- Production Orders
- Inventory
- Quality Control
- BOM
- Material Consumption
- Downtime
- Reports

The project was considered highly aligned with existing enterprise ERP experience.

Important engineering features:

- DataGrid
- Dynamic Form
- Workflow Engine
- Large dataset rendering
- Performance benchmarking

---

## 2.2 Workflow Studio

A workflow designer that supports:

```text
Draft
  ↓
Team Lead Approval
  ↓
Manager Approval
  ↓
Finance Review
  ↓
Approved
```

Possible features:

- React Flow
- Drag/drop
- Conditional nodes
- Approval workflow
- Dynamic forms
- Audit timeline
- Workflow versioning

---

## 2.3 React DataGrid Lab

A technical portfolio project focused on building a reusable DataGrid.

Target datasets:

```text
1K
10K
50K
100K rows
```

Features:

- Sorting
- Filtering
- Pagination
- Virtualization
- Resize
- Selection
- Server-side mode
- Performance benchmarking

---

## 2.4 HR Resource Planning

Suggested product:

```text
ResourceOps
```

Features:

- Employee allocation
- Project assignment
- Timesheet
- Capacity planning
- Utilization dashboard

---

# 3. FINTECH & HEALTH DIRECTIONS

Two new domains were considered.

## 3.1 Fintech

Initial idea:

```text
FinOps
```

A personal finance and investment management product.

Modules:

- Accounts
- Transactions
- Budgets
- Investments
- Goals
- Analytics

Important idea:

The Transactions module should be the primary large-data engineering feature.

---

## 3.2 Healthcare

Initial idea:

```text
CareFlow
```

Healthcare operations product.

Potential modules:

- Patient Management
- Appointment Scheduling
- Clinical Timeline
- Lab Results
- Prescription Builder

The healthcare product would focus on workflow complexity and complex form/state management.

---

# 4. CHATBOT DIRECTION

A generic ChatGPT clone was rejected as too weak for this portfolio.

A stronger AI product direction was proposed:

```text
InsightBot
```

Features:

- Streaming responses
- Document upload
- Search knowledge
- Citations
- Tool calling
- Structured UI
- Conversation history
- Message virtualization
- Abort generation
- Retry
- Conversation branching

Important conclusion:

```text
ChatGPT Clone
≠
Strong Frontend Evidence
```

A chatbot becomes portfolio-worthy when it has:

```text
Streaming
Complex State
Structured Messages
Tool Calling
Realtime UI
Large Conversation Handling
Performance Evidence
```

---

# 5. FINAL PRODUCT DIRECTION

The final chosen product became:

# FinPilot

> AI-powered Personal Finance, Live Portfolio & Financial Copilot Platform.

FinPilot combines:

```text
Personal Finance
+
Financial Analytics
+
Budget Management
+
Investment Portfolio
+
Live Market Data
+
AI Financial Copilot
```

FinPilot is NOT:

- A bank
- A payment platform
- A real trading platform
- A brokerage platform

FinPilot DOES NOT:

- Transfer real money
- Place real stock orders
- Place real crypto orders
- Connect to real brokerage accounts in MVP

Portfolio holdings are manually created or seeded.

Market prices can be real/live.

---

# 6. FINPILOT PRODUCT MODULES

Core modules:

```text
Authentication
Dashboard
Accounts
Categories
Transactions
Analytics
Budget
Portfolio
Market Data
AI Copilot
Engineering Evidence
Settings
```

Optional V2:

```text
CSV Import
Bank Statement PDF
RAG
Subscription Detection
Spending Forecast
Watchlist
Price Alerts
```

---

# 7. FINPILOT PRODUCT POSITIONING

FinPilot should be presented as:

> An AI-powered personal finance platform that helps users manage transactions, budgets, portfolios, and analyze their financial behavior through an AI copilot grounded in their actual financial data.

Simplified:

```text
Personal Finance Dashboard
+
AI Financial Copilot
```

---

# 8. FINANCIAL AI CAPABILITIES

FinPilot AI Copilot should not only answer:

```text
How much did I spend?
```

It should support:

```text
Analyze
Explain
Recommend
Simulate
```

Example questions:

```text
How much did I spend this month?

Why did my spending increase?

Which categories increased the most?

What should I reduce?

How can I save 30% of my income?

Are there unusual transactions?

What if I reduce dining by 20%?

How much budget remains?

Is my portfolio profitable?

Which asset contributed the most loss?

What happens if BTC rises 5%?
```

---

# 9. FINANCIAL AI RESPONSIBILITY SPLIT

Critical architecture rule:

```text
Raw Data
   ↓
Backend

Calculation
   ↓
Backend

Aggregation
   ↓
Backend

Simulation
   ↓
Backend

Reasoning
   ↓
LLM

Explanation
   ↓
LLM

Recommendation
   ↓
LLM
```

Do NOT make the LLM the source of truth for arithmetic.

Example:

Backend should calculate:

```json
{
  "income": 25000000,
  "expense": 19000000,
  "savings": 6000000,
  "savingsRate": 24
}
```

The LLM explains the result.

---

# 10. FINANCIAL RECOMMENDATION EXAMPLE

User:

```text
I want to save 30% every month.
What should I reduce?
```

Backend:

```text
Income
25M

Target Saving
30% = 7.5M

Maximum Expense
17.5M

Current Expense
19M

Required Reduction
1.5M
```

AI could respond:

```text
To reach your 30% savings goal, you need to reduce
monthly spending by approximately 1.5M VND.

Possible adjustment:

Shopping       -800K
Dining         -500K
Entertainment  -200K
```

This recommendation must be clearly presented as a suggestion based on the user's data.

---

# 11. FINANCIAL ANOMALY DETECTION

Example:

```text
Average Grab monthly spending
800K

Current month
2.1M
```

Backend tool:

```text
detect_spending_anomalies
```

AI explanation:

```text
Transportation spending is 162% above your
3-month average.
```

The user may then ask:

```text
Show me the transactions.
```

FinPilot can return a structured transaction list.

---

# 12. WHAT-IF SIMULATION

Example user question:

```text
What if I reduce food spending by 20% next month?
```

Backend tool:

```text
simulate_budget_change
```

Backend calculation:

```text
Food spending:
5M

20% reduction:
1M

New savings increase:
1M
```

AI explains the simulation.

---

# 13. LARGE DATASET INTERVIEW QUESTION

One interview question discussed:

> If backend returns a huge amount of data, how should frontend handle it without lagging or crashing?

The recommended mental framework:

```text
Network
Processing
Cache/State
Rendering
Monitoring
```

---

# 14. LARGE DATASET — NETWORK

First priority:

Do not send all data if the user does not need all of it.

Bad:

```text
GET /transactions

→ 1,000,000 records
```

Better:

```text
GET /transactions?page=1&limit=50
```

or:

```text
GET /transactions?cursor=abc&limit=50
```

Also perform server-side:

- Search
- Filter
- Sort
- Aggregation

Important distinction:

```text
Pagination
→ reduces data transferred to FE

Virtualization
→ reduces DOM rendered by FE
```

---

# 15. LARGE DATASET — RENDERING

Bad:

```tsx
data.map(item => <Row item={item} />)
```

for tens of thousands of rows.

Use virtualization:

```text
Dataset:
50,000 rows

Visible viewport:
~20–40 rows

DOM:
~20–40 rows
```

Potential libraries:

- TanStack Virtual
- react-window
- react-virtuoso
- AG Grid virtualization

---

# 16. LARGE DATASET — STATE

Avoid duplicating huge data:

Bad:

```text
original
filtered
sorted
```

stored as separate large arrays.

Prefer:

```text
data
filters
sorting
```

and derive when necessary.

Prefer backend filter/sort for truly large data.

---

# 17. LARGE DATASET — SEARCH

Avoid filtering/requesting on every keystroke.

Use:

```text
debounce ~300ms
```

Also cancel stale requests.

Possible tool:

```text
AbortController
```

This avoids:

- wasted network requests
- race conditions
- stale response overwriting newer results

---

# 18. LARGE DATASET — HEAVY COMPUTATION

If FE must perform heavy processing:

Possible options:

- Reduce data first
- Chunk processing
- Web Worker
- Memoization when appropriate

Web Worker should not be the first solution.

Use it only if:

```text
Heavy client calculation exists
+
Server cannot reasonably do it
+
Main thread becomes blocked
```

---

# 19. FINPILOT LARGE-DATA EVIDENCE

FinPilot intentionally uses:

```text
50,000 synthetic transactions
```

Architecture:

```text
PostgreSQL
50,000 records
    ↓
Cursor pagination
    ↓
100 rows/request
    ↓
useInfiniteQuery
    ↓
hundreds/thousands loaded
    ↓
TanStack Virtual
    ↓
~20–50 DOM rows
```

This directly demonstrates the interview answer in a real project.

---

# 20. SYSTEM ARCHITECTURE

```text
                     FinPilot

                        User
                         │
                         ▼
                  React Frontend
                   │     │     │
                REST    SSE    WS
                   │     │     │
                   ▼     ▼     ▼
                   NestJS Backend
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
     PostgreSQL     Market Gateway    AI Gateway
                         │              │
                ┌────────┴───────┐      ▼
                │                │   OpenRouter
             Crypto           Stocks
             Provider         Provider
```

---

# 21. FRONTEND STACK

```text
React
TypeScript
Vite

React Router

shadcn/ui
Tailwind CSS
Lucide Icons

TanStack Query
TanStack Table
TanStack Virtual

Zustand

React Hook Form
Zod

Recharts

Vitest
React Testing Library
MSW
```

---

# 22. BACKEND STACK

```text
NestJS
TypeScript

PostgreSQL
Prisma

JWT
Swagger / OpenAPI

OpenRouter

SSE
WebSocket / Socket.IO

Jest
Supertest
```

Optional later:

```text
Redis
BullMQ
pgvector
```

Only introduce if needed.

---

# 23. REPOSITORY STRUCTURE

Recommended:

```text
finpilot/

apps/
├── web/
└── api/

packages/
├── shared/
├── eslint-config/
└── tsconfig/

docs/

docker-compose.yml
pnpm-workspace.yaml
README.md
.env.example
```

---

# 24. FRONTEND STRUCTURE

```text
apps/web/src/

├── app/
│   ├── router/
│   ├── providers/
│   └── config/
│
├── components/
│   └── ui/
│
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── accounts/
│   ├── categories/
│   ├── transactions/
│   ├── analytics/
│   ├── budgets/
│   ├── portfolio/
│   ├── market/
│   └── copilot/
│
├── shared/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   └── utils/
│
└── styles/
```

---

# 25. FRONTEND STATE OWNERSHIP

Use:

```text
Server State
→ TanStack Query

URL State
→ URL Search Params

Form State
→ React Hook Form

Local UI State
→ useState/useReducer

Shared UI State
→ Zustand only when necessary

Live Market State
→ Dedicated Zustand/external store

Active Streaming State
→ Dedicated chat streaming controller/state
```

Do NOT:

```text
Put everything in Zustand
```

Do NOT duplicate TanStack Query server data into Zustand.

---

# 26. SHADCN/UI STRATEGY

shadcn/ui is the primitive UI layer.

Location:

```text
src/components/ui/
```

Examples:

- Button
- Input
- Textarea
- Card
- Dialog
- Sheet
- Select
- Checkbox
- Badge
- Skeleton
- Tooltip
- Popover
- Dropdown Menu
- Progress
- Table
- Sidebar
- Breadcrumb
- Calendar
- Command / Combobox

FinPilot reusable components live in:

```text
src/shared/components/
```

Examples:

- MetricCard
- ChartCard
- DataGrid
- FilterBar
- Money
- Percentage
- PageHeader
- EmptyState
- ErrorState
- StatusBadge
- DateRangePicker
- MarketStatusBadge

Rule:

```text
shadcn
→ UI Primitive

shared
→ reusable FinPilot abstraction

feature
→ business/domain component
```

---

# 27. REUSE RULE

Before creating any:

- component
- hook
- utility
- API client
- type
- schema
- service
- store
- repository

AI/developer must search existing capabilities.

Search order:

```text
1. Existing package/library
2. Existing shadcn primitive
3. Existing shared component
4. Existing feature implementation
5. Existing hook/utility/service
6. New implementation
```

---

# 28. COMPONENT PROMOTION RULE

Do not move components to `shared/` early.

Promote only when:

```text
At least 2 real use cases exist
+
API is stable
+
Business-specific logic can be removed
```

---

# 28.1 MODULE CONTEXT & RESOURCE SAFETY RULE

Before implementing or modifying a module:

1. Inspect and reuse existing code, packages, components, hooks, utilities,
   types, schemas, services, stores, repositories, and infrastructure.
2. Avoid unnecessary dependencies, duplicated implementations, expensive
   processes, and changes that may negatively affect existing resources,
   performance, behavior, or unrelated modules.
3. Keep changes scoped to the current module unless a shared change is
   explicitly justified and its impact has been verified.
4. Every module must maintain its own context file:

   ```text
   docs/modules/<module-name>.md
   ```

5. Each module context file must document:
   - Module purpose and scope
   - User flows
   - Architecture and state ownership
   - Packages and libraries used
   - Existing components reused
   - Hooks, utilities, types, schemas, and services used
   - API endpoints and data contracts
   - New files or abstractions introduced
   - Tests and verification commands
   - Performance considerations
   - Known issues and next steps
6. Read the module context file before working on that module and update it
   after material changes. Keep it concise and reference source files instead
   of duplicating large code blocks to reduce token usage.

---

# 29. BACKEND ARCHITECTURE

Use:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Prisma
    ↓
PostgreSQL
```

Controllers should not contain business logic.

Suggested backend:

```text
src/

├── auth/
├── users/
├── accounts/
├── categories/
├── transactions/
├── analytics/
├── budgets/
├── portfolio/
├── market/
├── conversations/
├── ai/
├── common/
└── prisma/
```

---

# 30. DATABASE

## User

```text
id
email
passwordHash
createdAt
updatedAt
```

## Account

```text
id
userId
name
type
currency
balance
```

Types:

```text
CASH
BANK
CARD
INVESTMENT
```

## Category

```text
id
userId
name
type
icon
```

## Transaction

```text
id
userId
accountId
categoryId

type
merchant
description

amount
currency

transactionDate

createdAt
updatedAt
```

Indexes:

```text
(userId, transactionDate)
(userId, categoryId)
(accountId, transactionDate)
```

## Budget

```text
id
userId
categoryId
amount
period
startDate
endDate
```

## Holding

```text
id
userId
symbol
assetType
quantity
averageCost
currency
```

Do NOT use stored `currentPrice` as live source of truth.

## Conversation

```text
id
userId
title
createdAt
updatedAt
```

## Message

```text
id
conversationId
role
content
status
createdAt
```

Later:

```text
content JSONB
```

may support structured blocks.

---

# 31. SEED DATA

Target:

```text
1 demo user
5 accounts
12–15 categories
50,000 transactions
12 budgets
8–12 holdings
20 conversations
```

Generate:

- Income
- Expenses
- Transfers
- Spending trends
- Intentional anomaly
- Month-over-month increase
- Crypto holdings
- Stock holdings

Example assets:

```text
BTC
ETH
SOL

AAPL
MSFT
NVDA
```

---

# 32. AUTHENTICATION

Backend endpoints:

```text
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
```

Use:

- Password hashing
- Access token
- Refresh token
- JWT Guard
- CurrentUser

Frontend:

- Login
- Register
- Protected routes
- Refresh flow
- Logout
- 401 handling

---

# 33. ACCOUNTS MODULE

Backend:

```text
GET    /accounts
POST   /accounts
PATCH  /accounts/:id
DELETE /accounts/:id
```

Frontend:

- Account cards
- Total balance
- Add
- Edit
- Delete
- Loading
- Empty
- Error

---

# 34. TRANSACTIONS BACKEND

Endpoints:

```text
GET    /transactions
GET    /transactions/:id
POST   /transactions
PATCH  /transactions/:id
DELETE /transactions/:id
PATCH  /transactions/bulk-category
```

List supports:

- cursor
- limit
- search
- account
- category
- type
- from
- to
- sort
- order

Example:

```text
GET /transactions
?cursor=abc
&limit=100
&search=grab
&categoryId=food
&sort=transactionDate
&order=desc
```

---

# 35. TRANSACTIONS FRONTEND

Features:

- Search
- Account filter
- Category filter
- Type filter
- Date filter
- URL state
- Server sort
- Infinite query
- Cursor pagination
- Virtualized DataGrid
- Sticky header
- Column resize
- Column visibility
- Selection
- Bulk category
- Transaction Sheet
- Edit transaction
- Loading
- Empty
- Error
- Retry

---

# 36. QUERY KEY ARCHITECTURE

Example:

```ts
export const transactionKeys = {
  all: ["transactions"] as const,

  lists: () =>
    [...transactionKeys.all, "list"] as const,

  list: (filters: TransactionFilters) =>
    [...transactionKeys.lists(), filters] as const,

  detail: (id: string) =>
    [...transactionKeys.all, "detail", id] as const,
};
```

Avoid random query key construction throughout the app.

---

# 37. ANALYTICS BACKEND

Endpoints:

```text
GET /analytics/overview
GET /analytics/cash-flow
GET /analytics/spending-by-category
GET /analytics/spending-trend
GET /analytics/month-comparison
GET /analytics/anomalies
```

Backend calculates:

- Income
- Expense
- Savings
- Savings rate
- Spending by category
- Monthly trends
- Monthly comparison
- Anomalies

Do not send raw 50k transaction rows to FE for analytics.

---

# 38. DASHBOARD

Top KPI:

```text
Net Worth
Income
Expense
Savings Rate
```

Charts:

```text
Cash Flow
Spending by Category
```

Lower:

```text
Recent Transactions
AI Insight
```

AI Insight must remain secondary.

---

# 39. BUDGET

Backend:

- CRUD budget
- Usage
- Remaining
- Status

Frontend:

- Monthly budget
- Progress
- Category budgets
- Warning
- Savings target
- AI CTA

Statuses:

```text
Healthy
Near Limit
Exceeded
```

---

# 40. PORTFOLIO

Portfolio stores user holdings.

Example:

```text
BTC
Quantity: 0.15
Average cost: $58,000

AAPL
Quantity: 20
Average cost: $185
```

Current market prices can be live/delayed.

Backend calculates:

```text
marketValue
= quantity × currentPrice

unrealizedPnL
= marketValue - costBasis

unrealizedPnLPercent
= unrealizedPnL / costBasis × 100
```

---

# 41. LIVE MARKET DATA

Crypto can use real-time WebSocket data.

Stocks may use:

```text
Real-time
or
Delayed
```

depending on provider and licensing.

FinPilot should show market status clearly:

```text
LIVE
DELAYED
STALE
```

---

# 42. MARKET DATA GATEWAY

Do not connect every FE component directly to providers.

Architecture:

```text
Crypto Provider
       │
       ▼
Market Data Gateway
       ▲
       │
Stock Provider
       │
       ▼
FinPilot Backend
       │
       ▼
WebSocket
       │
       ▼
Frontend
```

Interface:

```ts
interface MarketDataProvider {
  getQuote(symbol: string): Promise<MarketQuote>;

  getQuotes(symbols: string[]): Promise<MarketQuote[]>;

  subscribe(
    symbols: string[],
    callback: (quote: MarketQuote) => void
  ): Promise<void>;
}
```

Normalized:

```ts
interface MarketQuote {
  symbol: string;
  assetType: "CRYPTO" | "STOCK";
  price: number;
  change: number;
  changePercent: number;
  timestamp: string;
  source: string;
  status: "LIVE" | "DELAYED" | "STALE";
}
```

---

# 43. PORTFOLIO LOAD FLOW

```text
Portfolio Page Load
       │
       ├── REST
       │     ↓
       │   Snapshot
       │
       ▼
Render Portfolio
       │
       ▼
Connect WebSocket
       │
       ▼
Subscribe Assets
       │
       ▼
Receive Live Prices
       │
       ▼
Patch Price Store
```

Do not wait for WebSocket before rendering the initial page.

---

# 44. LIVE MARKET FRONTEND STATE

Holdings:

```text
TanStack Query
```

Live quotes:

```text
Dedicated Zustand/external store
```

Example:

```ts
quotes = {
  BTC: {...},
  ETH: {...},
  AAPL: {...}
}
```

Rule:

```text
BTC quote update
→ BTC row rerender

NOT
→ entire Portfolio rerender
```

Do not invalidate React Query on every tick.

---

# 45. AI BACKEND

Target structure:

```text
ai/

├── ai.module.ts
├── ai-orchestrator.service.ts
│
├── gateways/
│   ├── llm-gateway.interface.ts
│   └── openrouter.gateway.ts
│
├── tools/
├── prompts/
└── types/
```

Interface:

```ts
interface LLMGateway {
  stream(request: AIRequest): AsyncIterable<AIEvent>;
}
```

OpenRouter key must remain backend-only.

---

# 46. AI TOOL CALLING

FinPilot does NOT let AI query DB directly.

Flow:

```text
User
 ↓
LLM
 ↓
Tool requested
 ↓
Validate args
 ↓
Tool Registry
 ↓
Domain Service
 ↓
Repository
 ↓
Database / Market
 ↓
Tool Result
 ↓
LLM
 ↓
Final Answer
```

---

# 47. AI TOOL SECURITY

Critical rules:

- Whitelist tools
- Validate arguments
- Backend injects userId
- No arbitrary SQL
- No arbitrary code execution
- Tool timeout
- Normalize errors
- Never expose secrets
- Never expose unnecessary database internals

---

# 48. AI TOOLS

MVP:

```text
search_transactions
get_spending_summary
compare_monthly_spending
get_budget_status
get_account_summary
get_portfolio_summary
get_market_quote
detect_spending_anomalies
simulate_budget_change
simulate_asset_price_change
```

---

# 49. CONVERSATIONS

Endpoints:

```text
POST   /conversations
GET    /conversations
GET    /conversations/:id
DELETE /conversations/:id

GET  /conversations/:id/messages
POST /conversations/:id/messages/stream
```

---

# 50. SSE CHAT

Protocol:

```text
message_start
text_delta
tool_start
tool_result
message_done
error
```

Flow:

```text
User sends
 ↓
Optimistic message
 ↓
Open stream
 ↓
message_start
 ↓
text_delta
 ↓
tool_start
 ↓
tool_result
 ↓
text_delta
 ↓
message_done
```

Support:

- Stop generation
- Retry
- Partial response
- Stream interruption

---

# 51. CHAT FRONTEND STATE

Persistent messages:

```text
TanStack Query
```

Active streaming response:

```text
Dedicated chat stream controller/state
```

On:

```text
message_done
```

update or invalidate persistent conversation cache.

---

# 52. STRUCTURED AI UI

Supported block types:

```text
text
metric
chart
table
transaction-list
portfolio-summary
```

Renderer:

```text
MessageBlockRenderer
├── TextBlock
├── MetricBlock
├── ChartBlock
├── TableBlock
├── TransactionListBlock
└── PortfolioSummaryBlock
```

Unknown block requires safe fallback.

---

# 53. LONG CHAT PERFORMANCE

Stress target:

```text
2,000 messages
```

Use:

- Message pagination
- Virtualization
- Scroll preservation

Benchmark:

```text
Normal rendering
vs
Virtualized rendering
```

---

# 54. FRONTEND ARCHITECTURE GATE

Before implementing EVERY substantial frontend feature, answer:

```text
1. What does the user do?
2. What is the user flow?
3. Where does the data come from?
4. What API is called?
5. What is server state?
6. What is URL state?
7. What is form state?
8. What is UI state?
9. Is Zustand actually required?
10. What is the loading state?
11. What is the empty state?
12. What is the error state?
13. What is the retry strategy?
14. Do requests need cancellation?
15. Is there a race condition risk?
16. Is the dataset large?
17. Is virtualization needed?
18. What existing component can be reused?
19. What tests are required?
20. How will performance be measured?
```

Then:

```text
ARCHITECTURE APPROVED
       ↓
IMPLEMENT
```

Never:

```text
Requirement
↓
Immediate Coding
```

---

# 55. PERFORMANCE GATE

For every major feature:

## Network

- Payload size?
- Pagination?
- Lazy load?
- Duplicate requests?

## Processing

- Heavy filter?
- Heavy sort?
- Expensive transforms?
- Main thread blocked?

## State

- Duplicate data?
- Wrong global state?
- Cache unbounded?

## Rendering

- Too many DOM nodes?
- Unnecessary rerenders?
- Virtualization needed?

## Async

- Race conditions?
- Cancellation?
- Debounce?
- Throttle?

## Measurement

- Baseline measured?
- Optimized result measured?
- Evidence documented?

---

# 56. ENGINEERING EVIDENCE PAGE

Route:

```text
/engineering
```

Purpose:

```text
Show measured engineering evidence
```

Experiments:

## Transactions

```text
DB rows:
50,000

Rows / request:
100

Loaded:
actual runtime value

DOM rows:
actual measured value
```

Compare:

```text
Without virtualization
vs
With virtualization
```

## Search

Compare:

```text
Without debounce
vs
With debounce
```

## Portfolio

Measure:

- Market ticks
- Row render count
- Unchanged row behavior

## Chat

Measure:

- 2,000 messages
- Normal render
- Virtualized render
- First token latency

## General

- Bundle size
- Lighthouse
- Test count
- Coverage

Never fabricate metrics.

---

# 57. TESTING

Frontend:

## Auth

- Login validation
- Success
- Invalid credentials
- Protected route

## Transactions

- Search
- Filter
- URL state
- Sorting
- Cursor
- Infinite loading
- Virtualization
- Bulk update
- Error/retry

## Portfolio

- Snapshot
- Quote update
- Correct row update
- Reconnect
- P/L

## Copilot

- Send
- Optimistic
- SSE delta
- Abort
- Retry
- Tool call
- Tool error
- Structured response

Backend:

## Auth

- Register
- Login
- Refresh
- Unauthorized

## Transactions

- Pagination
- Cursor
- Search
- Filter
- Sort
- User isolation

## Analytics

- Income
- Expense
- Savings
- Category aggregation
- Comparison
- Anomaly

## Portfolio

- Cost basis
- Market value
- P/L
- Allocation

## AI

- Valid tool
- Invalid tool
- Invalid args
- User isolation
- Timeout
- Tool failure

---

# 58. OPENAPI CONTRACT

Use:

```text
NestJS DTO
    ↓
Swagger
    ↓
OpenAPI
    ↓
Generated Frontend Types
```

Avoid manually duplicating DTOs between FE and BE.

---

# 59. DESIGN SYSTEM

FinPilot visual direction:

```text
Professional Finance
+
Data First
+
Calm
+
Trustworthy
+
Modern SaaS
+
Integrated AI
```

Avoid:

```text
Crypto Neon
Glassmorphism
Excessive Gradients
Colorful Wallet App
Generic Admin Template
ChatGPT Clone Look
```

---

# 60. COLOR PALETTE

## Neutral

| Token | Hex | Usage |
|---|---|---|
| Ink 900 | `#0F172A` | Primary text / dark surface |
| Slate 700 | `#334155` | Strong secondary text |
| Slate 500 | `#64748B` | Muted content |
| Slate 300 | `#CBD5E1` | Strong border |
| Slate 200 | `#E2E8F0` | Default border |
| Slate 100 | `#F1F5F9` | Subtle surface |
| Slate 50 | `#F8FAFC` | Main light background |
| White | `#FFFFFF` | Card |

## Brand

| Token | Hex | Usage |
|---|---|---|
| Fin Blue 700 | `#1D4ED8` | Strong selected |
| Fin Blue 600 | `#2563EB` | CTA / focus |
| Fin Blue 500 | `#3B82F6` | Secondary interaction |
| Fin Blue 100 | `#DBEAFE` | Selected background |
| Fin Blue 50 | `#EFF6FF` | Soft info |

## Financial Semantic

| Token | Hex | Usage |
|---|---|---|
| Profit 600 | `#16A34A` | Financial gain |
| Profit 100 | `#DCFCE7` | Positive soft |
| Loss 600 | `#DC2626` | Financial loss/destructive |
| Loss 100 | `#FEE2E2` | Negative soft |
| Warning 600 | `#D97706` | Warning/delayed |
| Warning 100 | `#FEF3C7` | Warning soft |

Rules:

```text
Blue
→ Interaction

Green
→ Positive financial semantics only

Red
→ Negative/destructive only

Orange
→ Warning/delayed

Neutral
→ Main product surfaces
```

---

# 61. TYPOGRAPHY

Recommended:

```text
Inter
or
Geist
```

Hierarchy:

```text
Display
32–36px / 700

H1
28–32px / 700

H2
20–24px / 600

H3
16–18px / 600

Body
14–16px / 400

Table
14px

Caption
12–13px
```

Use tabular numerals when possible.

---

# 62. SPACING

4px system:

```text
4
8
12
16
20
24
32
40
48
```

Recommended:

```text
Desktop page padding:
24–32px

Mobile:
16px

Section gap:
24px

Card grid gap:
16px

Card padding:
16–24px

Table row:
44–48px

Touch target:
>=44px
```

---

# 63. APP SHELL

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│ Sidebar              │ Header                               │
│                      ├──────────────────────────────────────┤
│ Dashboard            │                                     │
│ Accounts             │ Main Content                        │
│ Transactions         │                                     │
│ Budget               │                                     │
│ Portfolio            │                                     │
│ Copilot              │                                     │
│ Engineering          │                                     │
└──────────────────────────────────────────────────────────────┘
```

Sidebar width:

```text
240–256px
```

Header:

```text
56–64px
```

Mobile sidebar becomes Sheet.

---

# 64. LOGIN UI

Purpose:

```text
Focused authentication
```

Layout:

```text
FinPilot

Welcome back

Email
[________________]

Password
[________________]

[ Sign In ]

No account? Create one
```

Card max width:

```text
400–440px
```

No charts or financial clutter.

---

# 65. DASHBOARD UI

Top:

```text
Good morning, <name>

[Date Range]
```

KPI row:

```text
Net Worth
Income
Expense
Savings Rate
```

Charts:

```text
Cash Flow
Spending by Category
```

Bottom:

```text
Recent Transactions
AI Insight
```

Maximum 4 major KPIs in the first row.

---

# 66. ACCOUNTS UI

Header:

```text
Accounts

[+ Add Account]
```

Summary:

```text
Total Balance
```

Cards:

```text
VCB
Bank
35.2M VND
```

Actions:

- Edit
- Delete
- View transactions

---

# 67. CATEGORIES UI

Simple list/table.

Columns:

```text
Icon
Name
Type
Usage optional
Actions
```

Category colors should remain visually restrained.

---

# 68. TRANSACTIONS UI

Header:

```text
Transactions
50,000 records

[+ Add Transaction]
```

Filter bar:

```text
[Search........................]

[Account]
[Category]
[Type]
[Date Range]
[More]
[Clear]
```

Mobile:

- Search visible
- Other filters in Sheet

DataGrid columns:

```text
Select
Date
Merchant
Category
Account
Type
Amount
Actions
```

Click row:

```text
Right-side Sheet
```

Bulk bar:

```text
3 selected

[Change Category]
[Delete]
[Clear]
```

---

# 69. ANALYTICS UI

Header:

```text
Analytics

[Date Range]
[Compare To]
```

Sections:

- KPI
- Cash Flow
- Spending by Category
- Monthly Comparison
- Top Changes
- Anomalies

Anomaly cards can link to Copilot.

---

# 70. BUDGET UI

Header:

```text
Budget

[Month]
[+ New Budget]
```

Overall:

```text
Monthly Budget
17.5M

Spent
13.8M

78.8%

3.7M remaining
```

Category cards:

```text
Food
4.2M / 5M
84%
```

Threshold colors:

```text
Normal
→ blue

Near limit
→ orange

Exceeded
→ red
```

---

# 71. PORTFOLIO UI

Header:

```text
Portfolio

[All Assets]
[+ Add Holding]

● MARKET LIVE
```

Summary:

```text
Portfolio Value
$42,820

+$3,140
+7.91%
```

Holdings:

```text
Asset
Type
Quantity
Average Cost
Current Price
Market Value
P/L
P/L %
Status
```

Price behavior:

- subtle cell update
- no whole row animation
- unaffected rows do not rerender

---

# 72. AI COPILOT UI

Desktop:

```text
┌──────────────────────────────────────────────────────────────┐
│ Conversations   │ Main Conversation                         │
│                 │                                           │
│ + New Chat      │ User                                      │
│                 │ Why did spending increase?                │
│ Today           │                                           │
│ Spending        │ FinPilot                                  │
│ Portfolio       │ Your spending increased 18.5%...          │
│ Budget Plan     │                                           │
│                 │ [structured content]                      │
│                 │                                           │
│                 │ [composer]                                │
└──────────────────────────────────────────────────────────────┘
```

Conversation max width:

```text
760–820px
```

User message:

- right aligned
- soft blue background
- max ~80%

Assistant:

- left aligned
- neutral
- structured data in cards

Tool blocks:

```text
✓ Reading transactions
✓ Comparing months
✓ Checking budget
```

Compact and collapsible.

---

# 73. SETTINGS UI

Suggested:

- Profile
- Appearance
- Categories
- Currency
- Market Data
- AI preferences optional

Appearance:

```text
Light
Dark
System
```

---

# 74. ENGINEERING UI

Route:

```text
/engineering
```

Show:

- Large dataset benchmark
- Search debounce benchmark
- Live market rendering
- Chat virtualization
- State architecture
- Bundle size
- Lighthouse
- Test coverage

Only real measurements.

---

# 75. GLOBAL UI STATES

Every major screen must define:

## Loading

Prefer Skeleton.

## Empty

Explain:

```text
What is empty?
Why?
What can the user do?
```

## Error

Provide:

```text
Clear failure message
+
Retry
```

## Disabled

Use tooltip when reason matters.

---

# 76. RESPONSIVE

Desktop:

```text
>=1024px
```

Tablet:

```text
768–1023px
```

Mobile:

```text
<768px
```

Rules:

- Sidebar → Sheet
- KPI stack/wrap
- Filter controls → Sheet
- Tables may use local horizontal scroll
- Copilot history → Sheet
- Detail → Sheet

Never create page-level horizontal overflow.

---

# 77. ACCESSIBILITY

Required:

- visible focus
- input labels
- keyboard menus
- status not color-only
- icon + text for important status
- semantic tables
- ~44px touch targets
- adequate contrast
- Dialog/Sheet focus management

---

# 78. FRONTEND BUILD PIPELINE

Required workflow:

```text
Requirement
    ↓
Inspect Existing Code
    ↓
Reuse Existing Capability
    ↓
User Flow
    ↓
Architecture
    ↓
Architecture Gate
    ↓
Implementation
    ↓
Tests
    ↓
Performance Verification
    ↓
Evidence
```

---

# 79. PROJECT BUILD ORDER

```text
01 Architecture & docs
        ↓
02 Repository foundation
        ↓
03 Backend + PostgreSQL
        ↓
04 Database schema
        ↓
05 Seed 50k transactions
        ↓
06 Frontend + shadcn
        ↓
07 Authentication
        ↓
08 Accounts
        ↓
09 Transactions Backend
        ↓
10 Transactions Frontend
        ↓
11 Infinite Query + Pagination
        ↓
12 Virtualization + Benchmark
        ↓
13 Analytics Backend
        ↓
14 Dashboard
        ↓
15 Budget
        ↓
16 Portfolio CRUD
        ↓
17 Market Provider abstraction
        ↓
18 Crypto live data
        ↓
19 Stock provider
        ↓
20 Backend Market WebSocket
        ↓
21 Live Portfolio Frontend
        ↓
22 Basic Copilot Backend
        ↓
23 SSE Streaming
        ↓
24 Copilot Frontend
        ↓
25 AI Tool Registry
        ↓
26 Financial Tools
        ↓
27 Market/Portfolio Tools
        ↓
28 AI Recommendations
        ↓
29 Structured AI UI
        ↓
30 Long Chat Optimization
        ↓
31 Automated Testing
        ↓
32 Performance Testing
        ↓
33 Engineering Evidence
        ↓
34 README
        ↓
35 Deployment
```

---

# 80. PHASE COMPLETION FORMAT

After every phase:

```text
PHASE:
<name>

STATUS:
[x] Completed
[ ] Incomplete
[!] Blocked

IMPLEMENTED:
- ...

REUSED:
- ...

NEW COMPONENTS:
- ...

ARCHITECTURE DECISIONS:
- ...

TESTS:
- ...

VERIFICATION:
- lint
- typecheck
- tests
- build

PERFORMANCE:
- ...

KNOWN ISSUES:
- ...

NEXT PHASE:
- ...
```

Do not mark complete if verification fails.

---

# 81. DO NOT OVERENGINEER

Before introducing:

```text
Redux
Web Worker
Redis
BullMQ
Microservices
Event Bus
Generic Framework
Complex Abstraction
```

Require:

```text
Actual measured/observed problem
+
Simpler solution insufficient
```

Otherwise do not introduce it.

---

# 82. DEPLOYMENT

Frontend:

```text
Vercel
or equivalent
```

Backend:

```text
Railway
Render
Fly
or equivalent
```

Database:

```text
Managed PostgreSQL
```

Backend secrets:

```text
DATABASE_URL

JWT_ACCESS_SECRET
JWT_REFRESH_SECRET

OPENROUTER_API_KEY
OPENROUTER_MODEL

MARKET_PROVIDER_KEYS

FRONTEND_URL
```

Frontend:

```text
VITE_API_URL
```

Never:

```text
VITE_OPENROUTER_API_KEY
```

---

# 83. PRODUCTION SAFETY

Required:

- HTTPS
- CORS
- Rate limiting
- AI rate limiting
- Input validation
- Authentication
- Authorization
- User isolation
- Structured logs
- Error monitoring
- No secrets in logs

---

# 84. OPTIONAL V2 — RAG

Do not implement before MVP is stable.

Pipeline:

```text
Bank Statement PDF
      ↓
Parse
      ↓
Chunk
      ↓
Embedding
      ↓
pgvector
      ↓
Retrieve
      ↓
AI
      ↓
Answer + Citation
```

Possible features:

- PDF upload
- Parsing
- Embedding
- Retrieval
- Citation
- Source panel

---

# 85. PORTFOLIO DEFINITION OF DONE

## Finance

- [ ] Auth works
- [ ] Accounts works
- [ ] Transactions works
- [ ] Analytics works
- [ ] Budgets works
- [ ] Portfolio works

## Large Data

- [ ] 50k transactions
- [ ] Server pagination
- [ ] Server filters
- [ ] Server search
- [ ] Server sorting
- [ ] Infinite Query
- [ ] Virtualized table
- [ ] Real benchmark

## Realtime

- [ ] Market provider abstraction
- [ ] Crypto live data
- [ ] Stock data
- [ ] Backend WebSocket
- [ ] FE market store
- [ ] Selective rerender
- [ ] LIVE/DELAYED/STALE

## AI

- [ ] Conversation
- [ ] SSE
- [ ] Stop
- [ ] Retry
- [ ] Tool calling
- [ ] Tool validation
- [ ] User isolation
- [ ] Financial analysis
- [ ] Budget simulation
- [ ] Portfolio simulation
- [ ] Structured AI UI

## UI

- [ ] shadcn primitives
- [ ] Feature-based architecture
- [ ] Shared reusable components
- [ ] Responsive
- [ ] Dark mode
- [ ] Loading/empty/error states

## Quality

- [ ] Typecheck
- [ ] Lint
- [ ] FE tests
- [ ] BE tests
- [ ] E2E critical flow
- [ ] Production build

## Evidence

- [ ] `/engineering`
- [ ] Architecture diagrams
- [ ] Real benchmarks
- [ ] Engineering decisions
- [ ] README
- [ ] Live demo
- [ ] GitHub

---

# 86. FINAL ENGINEERING PRINCIPLE

The project goal is NOT:

```text
AI writes a lot of code
```

The goal is:

```text
Build a verifiable engineering project
```

Every important feature should have:

```text
Requirement
    ↓
Architecture Decision
    ↓
Implementation
    ↓
Test
    ↓
Measurement
    ↓
Evidence
```

FinPilot should ultimately demonstrate:

```text
Frontend Architecture
+
Reusable Component Design
+
Large Dataset Handling
+
Server/Client State Ownership
+
Realtime WebSocket
+
Performance Optimization
+
Backend API Design
+
AI Streaming
+
Tool Calling
+
Financial Data Grounding
+
Live Portfolio Data
+
Engineering Verification
```

---

# 87. QUICK MASTER CHECKLIST

## Foundation

- [ ] Product scope
- [ ] Architecture docs
- [ ] Monorepo
- [ ] PostgreSQL
- [ ] NestJS
- [ ] React/Vite
- [ ] shadcn/ui

## Finance

- [ ] Auth
- [ ] Accounts
- [ ] Categories
- [ ] Transactions
- [ ] Analytics
- [ ] Budget
- [ ] Portfolio

## Large Data

- [ ] 50k rows
- [ ] Cursor
- [ ] Infinite Query
- [ ] Virtualization
- [ ] Debounce
- [ ] Cancellation

## Market

- [ ] Provider interface
- [ ] Crypto
- [ ] Stocks
- [ ] WS
- [ ] Market store
- [ ] Live status

## AI

- [ ] OpenRouter gateway
- [ ] Conversations
- [ ] SSE
- [ ] Tool Registry
- [ ] Financial tools
- [ ] Recommendation
- [ ] Simulation
- [ ] Structured UI

## Quality

- [ ] Tests
- [ ] Performance
- [ ] Engineering evidence
- [ ] README
- [ ] Deployment

---

# 88. SOURCE OF TRUTH

This file is intended to be the consolidated source of truth for the FinPilot PET project.

When an AI coding agent works on the project, the recommended priorities are:

```text
1. Follow architecture rules.
2. Inspect before creating.
3. Reuse before implementing.
4. Do not skip architecture gates.
5. Do not overengineer.
6. Verify every phase.
7. Measure performance instead of guessing.
8. Never fabricate evidence.
9. Keep financial calculations backend-grounded.
10. Keep live market and AI responsibilities isolated behind clear interfaces.
```
