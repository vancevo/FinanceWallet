import type { ReactNode } from 'react';

type AppShellProps = {
  children: ReactNode;
};

function Root({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        {children}
      </div>
    </div>
  );
}

function Sidebar({ children }: AppShellProps) {
  return (
    <aside className="border-r border-slate-800 bg-slate-950 text-white">
      {children}
    </aside>
  );
}

function Main({ children }: AppShellProps) {
  return <main className="min-w-0 p-6 lg:p-8">{children}</main>;
}

export const AppShell = {
  Root,
  Sidebar,
  Main,
};