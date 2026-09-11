import { useState } from 'react';

import { PaginationControls } from '@/components/data-display/pagination-controls';
import { SectionCard } from '@/components/data-display/section-card';
import { Button } from '@/components/ui/button';
import {
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { usePagination } from '@/hooks/use-pagination';

type AccountBalance = {
  balance: string;
  id: string;
  name: string;
  type: string;
};

type AccountBalancesCardProps = {
  accounts: AccountBalance[];
};

const previewLimit = 5;
const defaultPageSize = 5;

function AccountBalanceRow({ account }: { account: AccountBalance }) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div>
        <div className="font-medium">{account.name}</div>
        <div className="text-sm text-slate-500">{account.type}</div>
      </div>
      <div className="font-semibold">{account.balance}</div>
    </div>
  );
}

export function AccountBalancesCard({ accounts }: AccountBalancesCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const previewAccounts = accounts.slice(0, previewLimit);
  const shouldShowViewAll = accounts.length > previewLimit;
  const pagination = usePagination(accounts, { initialPageSize: defaultPageSize });

  return (
    <SectionCard.Container>
      <SectionCard.Header>
        <SectionCard.Title>Account Balances</SectionCard.Title>
        {shouldShowViewAll && (
          <SectionCard.Action>
            <DialogRoot onOpenChange={setIsModalOpen} open={isModalOpen}>
              <Button onClick={() => setIsModalOpen(true)} size="sm" variant="ghost">
                View all
              </Button>

              <DialogContent className="h-[min(640px,calc(100dvh-2rem))]">
                <DialogHeader>
                  <DialogTitle>Account Balances</DialogTitle>
                  <DialogDescription>Review all connected account balances.</DialogDescription>
                </DialogHeader>

                <DialogBody>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Account</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead className="text-right">Balance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pagination.paginatedItems.map((account) => (
                        <TableRow key={account.id}>
                          <TableCell className="font-medium">{account.name}</TableCell>
                          <TableCell className="text-slate-500">{account.type}</TableCell>
                          <TableCell className="text-right font-semibold">{account.balance}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </DialogBody>

                <DialogFooter>
                  <PaginationControls
                    onPageChange={pagination.setPage}
                    onPageSizeChange={pagination.setPageSize}
                    page={pagination.page}
                    pageCount={pagination.pageCount}
                    pageSize={pagination.pageSize}
                    totalItems={pagination.totalItems}
                  />
                </DialogFooter>
              </DialogContent>
            </DialogRoot>
          </SectionCard.Action>
        )}
      </SectionCard.Header>
      <SectionCard.Content className="grid gap-3">
        {previewAccounts.map((account) => (
          <AccountBalanceRow account={account} key={account.id} />
        ))}
      </SectionCard.Content>
    </SectionCard.Container>
  );
}
