import { AppShell } from '@/components/layout/app-shell';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';

import { AccountBalancesCard } from './components/account-balances-card';
import { RecentTransactionsCard } from './components/recent-transactions-card';
import { SpendingByCategoryCard } from './components/spending-by-category-card';
import { useDashboardMock } from './use-dashboard-mock';
import { MetricCard } from '@/components/data-display/metric-card';

export function DashboardPage() {
  const dashboard = useDashboardMock();

  return (
    <AppShell.Container>
      <AppShell.Sidebar>
        <Sidebar />
      </AppShell.Sidebar>

      <AppShell.Main>
        <Topbar />

        <section className="grid gap-4 md:grid-cols-3">
          {dashboard.metrics.map((metric) => (
            <MetricCard.Item key={metric.id} {...metric} />
          ))}
        </section>

        <section className="mt-4 grid gap-4 xl:grid-cols-[1.3fr_1fr]">
          <SpendingByCategoryCard
            categories={dashboard.spendingByCategory}
            total={dashboard.spendingTotal}
          />
          <AccountBalancesCard accounts={dashboard.accountBalances} />
        </section>

        <section className="mt-4">
          <RecentTransactionsCard transactions={dashboard.recentTransactions} />
        </section>
      </AppShell.Main>
    </AppShell.Container>
  );
}
