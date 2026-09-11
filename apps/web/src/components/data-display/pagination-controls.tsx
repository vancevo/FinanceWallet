import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type PaginationControlsProps = {
  className?: string;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  page: number;
  pageCount: number;
  pageSize: number;
  pageSizeOptions?: number[];
  totalItems: number;
};

export function PaginationControls({
  className,
  onPageChange,
  onPageSizeChange,
  page,
  pageCount,
  pageSize,
  pageSizeOptions = [5, 10, 20],
  totalItems,
}: PaginationControlsProps) {
  const safePageCount = Math.max(pageCount, 1);
  const canGoPrevious = page > 1;
  const canGoNext = page < safePageCount;

  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between', className)}>
      <div className="text-sm text-slate-500">
        Page {page} of {safePageCount} · {totalItems} items
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label className="flex items-center gap-2 text-sm text-slate-500">
          Page limit
          <select
            className="h-8 rounded-lg border border-slate-200 bg-white px-2 text-sm font-medium text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            onChange={(event) => onPageSizeChange(Number(event.target.value))}
            value={pageSize}
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-center gap-1">
          <Button
            aria-label="Previous page"
            disabled={!canGoPrevious}
            onClick={() => onPageChange(page - 1)}
            size="icon-sm"
            variant="outline"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            aria-label="Next page"
            disabled={!canGoNext}
            onClick={() => onPageChange(page + 1)}
            size="icon-sm"
            variant="outline"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
