import { Bell, Search } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useMobile } from '@/hooks/use-mobile';

export function Topbar() {
  const isMobile = useMobile();

  return (
    <header className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Demo workspace
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950">FinanceWallet</h1>
      </div>

      <div className="flex items-center gap-3">
        {!isMobile && (
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <Input className="pl-9" placeholder="Search transactions..." />
          </div>
        )}

        <Button aria-label="Notifications" size="icon" variant="outline">
          <Bell className="size-4" />
        </Button>

        <div className="flex items-center gap-3 rounded-lg border bg-white px-3 py-2">
          <Avatar className="size-8">
            <AvatarFallback>DU</AvatarFallback>
          </Avatar>
          <div className="hidden text-sm sm:block">
            <div className="font-medium">Demo User</div>
            <div className="text-xs text-slate-500">demo@financewallet.local</div>
          </div>
        </div>
      </div>
    </header>
  );
}
