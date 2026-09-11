import type { ComponentType, ReactNode } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type MetricCardProps = {
  children: ReactNode;
  className?: string;
};

type MetricCardItemProps = {
  description: ReactNode;
  icon: ComponentType<{ className?: string }>;
  label: string;
  trend: ReactNode;
  value: ReactNode;
  tone?: 'positive' | 'negative' | 'neutral';
  className?: string;
};

function Container({ children, className }: MetricCardProps) {
  return (
    <Card className={cn('rounded-lg border-slate-200 shadow-sm', className)}>
      <CardContent className="p-5">{children}</CardContent>
    </Card>
  );
}

function Header({
  icon: Icon,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <span className="text-sm font-medium text-slate-500">{label}</span>
      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-sky-50 text-sky-600">
        <Icon className="size-5" />
      </div>
    </div>
  );
}

function Value({ children }: { children: ReactNode }) {
  return <div className="text-3xl font-bold tracking-tight">{children}</div>;
}

function Trend({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'positive' | 'negative' | 'neutral';
}) {
  return (
    <div
      className={cn(
        'mt-2 text-sm font-medium',
        tone === 'positive' && 'text-emerald-600',
        tone === 'negative' && 'text-red-600',
        tone === 'neutral' && 'text-slate-500',
      )}
    >
      {children}
    </div>
  );
}

function Description({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-6 text-slate-500">{children}</p>;
}

export function MetricCardItem({
  className,
  description,
  icon,
  label,
  tone,
  trend,
  value,
}: MetricCardItemProps) {
  return (
    <Container className={className}>
      <Header icon={icon} label={label} />
      <Value>{value}</Value>
      <Trend tone={tone}>{trend}</Trend>
      <Description>{description}</Description>
    </Container>
  );
}

export const MetricCard = {
  Container,
  Header,
  Item: MetricCardItem,
  Value,
  Trend,
  Description,
};
