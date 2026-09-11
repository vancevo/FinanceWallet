import { SectionCard } from '@/components/data-display/section-card';
import { Button } from '@/components/ui/button';

type SpendingCategory = {
  amount: string;
  id: string;
  name: string;
  value: number;
};

type SpendingByCategoryCardProps = {
  categories: SpendingCategory[];
  total: string;
};

const chartColors = ['#0ea5e9', '#22c55e', '#f59e0b', '#f97316', '#8b5cf6', '#64748b'];

function buildCategoryChartBackground(categories: SpendingCategory[]) {
  let currentValue = 0;

  const segments = categories.map((category, index) => {
    const start = currentValue;
    const end = currentValue + category.value;
    const color = chartColors[index % chartColors.length];

    currentValue = end;

    return `${color} ${start}% ${end}%`;
  });

  if (currentValue < 100) {
    segments.push(`#cbd5e1 ${currentValue}% 100%`);
  }

  return `conic-gradient(${segments.join(',')})`;
}

export function SpendingByCategoryCard({ categories, total }: SpendingByCategoryCardProps) {
  const chartBackground = buildCategoryChartBackground(categories);

  return (
    <SectionCard.Container>
      <SectionCard.Header>
        <SectionCard.Title>Spending by Category</SectionCard.Title>
        <SectionCard.Action>
          <Button size="sm" variant="outline">
            This Month
          </Button>
        </SectionCard.Action>
      </SectionCard.Header>
      <SectionCard.Content>
        <div className="grid min-h-72 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-[180px_1fr]">
          <div className="grid place-items-center">
            <div
              className="grid size-36 place-items-center rounded-full"
              style={{ background: chartBackground }}
            >
              <div className="grid size-24 place-items-center rounded-full bg-white text-center">
                <div>
                  <div className="font-bold">{total}</div>
                  <div className="text-xs text-slate-500">Total</div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid content-center gap-3">
            {categories.map((category) => (
              <div
                className="grid grid-cols-[1fr_auto_auto] items-center gap-3 text-sm"
                key={category.id}
              >
                <span className="font-medium">{category.name}</span>
                <span className="text-slate-500">{category.value}%</span>
                <span className="font-semibold">{category.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionCard.Content>
    </SectionCard.Container>
  );
}
