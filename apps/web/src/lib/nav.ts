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
    active: false,
  },
  {
    label: 'Transactions',
    href: '/transactions',
    icon: ReceiptText,
    active: false,
  },
  {
    label: 'Budgets',
    href: '/budgets',
    icon: PiggyBank,
    active: false,
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
    icon: BarChart3,
    active: false,
  },
  {
    label: 'Copilot',
    href: '/copilot',
    icon: Bot,
    active: false,
  },
  {
    label: 'Cards',
    href: '/cards',
    icon: CreditCard,
    active: false,
  },
] as const;
