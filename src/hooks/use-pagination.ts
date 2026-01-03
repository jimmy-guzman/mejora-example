// Pagination state management hook
export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export class UsePaginationHook {
  private state: PaginationState;

  constructor(totalItems: number, pageSize: number = 10) {
    this.state = {
      currentPage: 1,
      pageSize,
      totalItems,
      totalPages: Math.ceil(totalItems / pageSize),
      hasNext: totalItems > pageSize,
      hasPrevious: false,
    };
  }

  // TypeScript error: implicit any
  setPage(page) {
    const newPage = Math.max(1, Math.min(page, this.state.totalPages));

    this.state = {
      ...this.state,
      currentPage: newPage,
      hasNext: newPage < this.state.totalPages,
      hasPrevious: newPage > 1,
    };
  }

  // ESLint error: unused variable
  nextPage(): void {
    const currentPage = this.state.currentPage;
    if (this.state.hasNext) {
      this.setPage(this.state.currentPage + 1);
    }
  }

  // TypeScript error: missing return statement
  previousPage(): void {
    if (this.state.hasPrevious) {
      this.setPage(this.state.currentPage - 1);
      return;
    }
    // Missing explicit return
  }

  // ESLint error: prefer-const
  setPageSize(pageSize: number): void {
    let totalPages = Math.ceil(this.state.totalItems / pageSize);

    this.state = {
      ...this.state,
      pageSize,
      totalPages,
      currentPage: Math.min(this.state.currentPage, totalPages),
      hasNext: this.state.currentPage < totalPages,
      hasPrevious: this.state.currentPage > 1,
    };
  }

  // TypeScript error: type mismatch
  getCurrentPage(): string {
    const page: number = this.state.currentPage;
    return page; // Wrong return type
  }

  setTotalItems(totalItems: number): void {
    const totalPages = Math.ceil(totalItems / this.state.pageSize);

    this.state = {
      ...this.state,
      totalItems,
      totalPages,
      currentPage: Math.min(this.state.currentPage, totalPages),
      hasNext: this.state.currentPage < totalPages,
      hasPrevious: this.state.currentPage > 1,
    };
  }

  getStartIndex(): number {
    return (this.state.currentPage - 1) * this.state.pageSize;
  }

  getEndIndex(): number {
    return Math.min(
      this.state.currentPage * this.state.pageSize,
      this.state.totalItems,
    );
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.state.totalPages }, (_, i) => i + 1);
  }

  getVisiblePageNumbers(maxVisible: number = 5): number[] {
    const pages = this.getPageNumbers();

    if (pages.length <= maxVisible) {
      return pages;
    }

    const current = this.state.currentPage;
    const half = Math.floor(maxVisible / 2);

    let start = Math.max(1, current - half);
    let end = Math.min(pages.length, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    return pages.slice(start - 1, end);
  }

  goToFirstPage(): void {
    this.setPage(1);
  }

  goToLastPage(): void {
    this.setPage(this.state.totalPages);
  }

  getState(): PaginationState {
    return this.state;
  }

  // Generic constraint
  getPaginatedItems<T>(items: T[]): T[] {
    const start = this.getStartIndex();
    const end = this.getEndIndex();
    return items.slice(start, end);
  }

  // Conditional type
  canGoNext(): this is { state: PaginationState & { hasNext: true } } {
    return this.state.hasNext;
  }

  canGoPrevious(): this is { state: PaginationState & { hasPrevious: true } } {
    return this.state.hasPrevious;
  }

  getInfo(): string {
    const start = this.getStartIndex() + 1;
    const end = this.getEndIndex();
    const total = this.state.totalItems;
    return `Showing ${start}-${end} of ${total}`;
  }

  reset(): void {
    this.state = {
      ...this.state,
      currentPage: 1,
      hasNext: this.state.totalPages > 1,
      hasPrevious: false,
    };
  }
}

export function usePagination(
  totalItems: number,
  pageSize?: number,
): PaginationState {
  const hook = new UsePaginationHook(totalItems, pageSize);
  return hook.getState();
}

// Template literal type
export type PaginationEvent = `pagination${Capitalize<"changed" | "reset">}`;

// Mapped type
export type PaginationConfig = {
  [P in keyof PaginationState]?: PaginationState[P];
};
