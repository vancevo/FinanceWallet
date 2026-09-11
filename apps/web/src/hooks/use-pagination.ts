import { useMemo, useState } from 'react';

type UsePaginationOptions = {
  initialPage?: number;
  initialPageSize?: number;
};

export function usePagination<T>(
  items: T[],
  { initialPage = 1, initialPageSize = 5 }: UsePaginationOptions = {},
) {
  const [page, setPageState] = useState(initialPage);
  const [pageSize, setPageSizeState] = useState(initialPageSize);

  const pageCount = Math.ceil(items.length / pageSize);
  const safePage = Math.min(page, Math.max(pageCount, 1));
  const paginatedItems = useMemo(() => {
    const startIndex = (safePage - 1) * pageSize;

    return items.slice(startIndex, startIndex + pageSize);
  }, [items, safePage, pageSize]);

  function setPage(nextPage: number) {
    setPageState(Math.min(Math.max(nextPage, 1), Math.max(pageCount, 1)));
  }

  function setPageSize(nextPageSize: number) {
    setPageSizeState(nextPageSize);
    setPageState(1);
  }

  return {
    page: safePage,
    pageCount,
    pageSize,
    paginatedItems,
    setPage,
    setPageSize,
    totalItems: items.length,
  };
}
