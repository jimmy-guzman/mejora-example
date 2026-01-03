// Pagination utility
export interface PaginationOptions {
  page: number;
  pageSize: number;
  total: number;
}

export interface PaginationResult {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  startIndex: number;
  endIndex: number;
}

export class Paginator {
  // TypeScript error: implicit any
  static paginate(options): PaginationResult {
    const totalPages = Math.ceil(options.total / options.pageSize);
    const startIndex = (options.page - 1) * options.pageSize;
    const endIndex = Math.min(startIndex + options.pageSize, options.total);

    return {
      currentPage: options.page,
      totalPages,
      hasNext: options.page < totalPages,
      hasPrevious: options.page > 1,
      startIndex,
      endIndex,
    };
  }

  // TypeScript error: missing return statement
  static getPage<T>(items: T[], page: number, pageSize: number): T[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex < items.length) {
      return items.slice(startIndex, endIndex);
    }
    // Missing return for out of range case
  }

  // ESLint error: unused variable
  static getTotalPages(total: number, pageSize: number): number {
    const ratio = total / pageSize;
    const pages = Math.ceil(total / pageSize);
    return pages;
  }

  // ESLint error: prefer-const
  static getPageNumbers(
    currentPage: number,
    totalPages: number,
    maxVisible: number = 5,
  ): number[] {
    let pages: number[] = [];
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  // TypeScript error: type mismatch
  static canGoNext(page: number, totalPages: number): string {
    const result: boolean = page < totalPages;
    return result; // Wrong type
  }
}

export const { paginate, getPage, getTotalPages } = Paginator;
