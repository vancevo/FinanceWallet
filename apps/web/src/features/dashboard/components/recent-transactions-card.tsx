import { SectionCard } from '@/components/data-display/section-card';
import { Button } from '@/components/ui/button';
import { useMobile } from '@/hooks/use-mobile';

type RecentTransaction = {
  amount: string;
  category: string;
  date: string;
  description: string;
  id: string;
};

type RecentTransactionsCardProps = {
  transactions: RecentTransaction[];
};

function TransactionRow({
  isMobile,
  transaction,
}: {
  isMobile: boolean;
  transaction: RecentTransaction;
}) {
  return (
    <div className="grid gap-2 px-4 py-3 text-sm sm:grid-cols-[90px_1fr_150px_110px]">
      <span className="text-slate-500">{transaction.date}</span>
      <span className="font-medium">{transaction.description}</span>
      {!isMobile && <span className="text-slate-500">{transaction.category}</span>}
      <span className="font-semibold text-red-600 sm:text-right">{transaction.amount}</span>
    </div>
  );
}

export function RecentTransactionsCard({ transactions }: RecentTransactionsCardProps) {
  const isMobile = useMobile();

  return (
    <SectionCard.Container>
      <SectionCard.Header>
        <SectionCard.Title>Recent Transactions</SectionCard.Title>
        <SectionCard.Action>
          <Button size="sm" variant="ghost">
            View all
          </Button>
        </SectionCard.Action>
      </SectionCard.Header>
      <SectionCard.Content>
        <div className="divide-y rounded-lg border">
          {transactions.map((transaction) => (
            <TransactionRow isMobile={isMobile} key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </SectionCard.Content>
    </SectionCard.Container>
  );
}
