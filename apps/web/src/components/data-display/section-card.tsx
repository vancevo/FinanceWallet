import type { ReactNode } from 'react';

import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type SectionCardProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: SectionCardProps) {
  return (
    <Card className={cn('rounded-lg border-slate-200 shadow-sm', className)}>
      {children}
    </Card>
  );
}

function Header({ children, className }: SectionCardProps) {
  return (
    <CardHeader className={cn('flex-row items-center justify-between gap-3', className)}>
      {children}
    </CardHeader>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <CardTitle className="text-base">{children}</CardTitle>;
}

function Action({ children }: { children: ReactNode }) {
  return <CardAction>{children}</CardAction>;
}

function Content({ children, className }: SectionCardProps) {
  return <CardContent className={cn('pt-0', className)}>{children}</CardContent>;
}

export const SectionCard = {
  Container,
  Header,
  Title,
  Action,
  Content,
};
