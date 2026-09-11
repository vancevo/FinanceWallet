import { ArrowLeftRight, PieChart, Wallet } from 'lucide-react';

export function useDashboardMock() {
  return {
    metrics: [
      {
        id: 'total-balance',
        label: 'Total Balance',
        value: '$24,850',
        trend: '+12.4% vs last month',
        tone: 'positive' as const,
        description: 'Across checking, savings, cash, card, and brokerage.',
        icon: Wallet,
      },
      {
        id: 'monthly-spending',
        label: 'Monthly Spending',
        value: '$3,420',
        trend: '-8.1% vs last month',
        tone: 'positive' as const,
        description: 'Lower than your average monthly spending.',
        icon: PieChart,
      },
      {
        id: 'transactions',
        label: 'Transactions',
        value: '50,000',
        trend: 'Seed data ready',
        tone: 'neutral' as const,
        description: 'Prepared for pagination and performance work.',
        icon: ArrowLeftRight,
      },
    ],
    spendingTotal: '$3,420',
    spendingByCategory: [
      { id: 'housing', name: 'Housing', value: 32, amount: '$1,094' },
      { id: 'food-dining', name: 'Food & Dining', value: 18, amount: '$616' },
      { id: 'transport', name: 'Transport', value: 15, amount: '$513' },
      { id: 'shopping', name: 'Shopping', value: 12, amount: '$410' },
      { id: 'entertainment', name: 'Entertainment', value: 8, amount: '$274' },
    ],
    accountBalances: [
      { id: 'everyday-checking', name: 'Everyday Checking', type: 'Bank', balance: '$8,420' },
      { id: 'emergency-savings', name: 'Emergency Savings', type: 'Bank', balance: '$12,300' },
      { id: 'travel-card', name: 'Travel Card', type: 'Card', balance: '-$1,250' },
      { id: 'brokerage-account', name: 'Brokerage Account', type: 'Investment', balance: '$5,380' },
      { id: 'high-yield-savings', name: 'High Yield Savings', type: 'Bank', balance: '$6,750' },
      { id: 'cash-wallet', name: 'Cash Wallet', type: 'Cash', balance: '$320' },
      { id: 'retirement-ira', name: 'Retirement IRA', type: 'Investment', balance: '$18,900' },
      { id: 'rewards-card', name: 'Rewards Card', type: 'Card', balance: '-$485' },
    ],
    recentTransactions: [
      {
        id: 'txn-starbucks-apr-28',
        date: 'Apr 28',
        description: 'Starbucks',
        category: 'Food & Dining',
        amount: '-$5.75',
      },
      {
        id: 'txn-amazon-apr-27',
        date: 'Apr 27',
        description: 'Amazon',
        category: 'Shopping',
        amount: '-$62.30',
      },
      {
        id: 'txn-spotify-apr-26',
        date: 'Apr 26',
        description: 'Spotify',
        category: 'Entertainment',
        amount: '-$10.99',
      },
      {
        id: 'txn-rent-apr-25',
        date: 'Apr 25',
        description: 'Monthly Rent',
        category: 'Housing',
        amount: '-$1,200.00',
      },
    ],
  };
}
