import type { ReactNode } from 'react';

import { useMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

type AppShellProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: AppShellProps) {
  const isMobile = useMobile();

  return (
    <div
      className={cn('min-h-screen bg-slate-50 text-slate-950', className)}
      data-mobile={isMobile}
    >
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        {children}
      </div>
    </div>
  );
}

function Sidebar({ children, className }: AppShellProps) {
  return (
    <aside
      className={cn(
        'border-b border-slate-800 bg-slate-950 text-white lg:border-b-0 lg:border-r',
        className,
      )}
    >
      {children}
    </aside>
  );
}

function Main({ children, className }: AppShellProps) {
  return <main className={cn('min-w-0 p-4 sm:p-6 lg:p-8', className)}>{children}</main>;
}

export const AppShell = {
  Container,
  Sidebar,
  Main,
};
