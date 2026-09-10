import {
  BarChart3,
  Bot,
  CreditCard,
  LayoutDashboard,
  PiggyBank,
  ReceiptText,
  WalletCards,
} from 'lucide-react';

export const mainNavItems = [
  {
    label: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: 'Accounts',
    href: '/accounts',
    icon: WalletCards,
  },
  {
    label: 'Transactions',
    href: '/transactions',
    icon: ReceiptText,
  },
  {
    label: 'Budgets',
    href: '/budgets',
    icon: PiggyBank,
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    icon: BarChart3,
  },
  {
    label: 'Copilot',
    href: '/copilot',
    icon: Bot,
  },
  {
    label: 'Cards',
    href: '/cards',
    icon: CreditCard,
  },
] as const;