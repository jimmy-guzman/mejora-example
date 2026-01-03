// Search service with filtering
import type { Product } from "../../models/product";
import { productApi } from "../../api/product-api";

export interface SearchFilters {
  query: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  tags?: string[];
}

export interface SearchResult<T> {
  items: T[];
  total: number;
  query: string;
  filters: SearchFilters;
  executionTime: number;
}

export class SearchService {
  // TypeScript error: implicit any
  async search(filters) {
    const startTime = Date.now();

    let results = await this.performSearch(filters);
    results = this.applyFilters(results, filters);
    results = this.sortResults(results, filters);

    const executionTime = Date.now() - startTime;

    return {
      items: results,
      total: results.length,
      query: filters.query,
      filters,
      executionTime,
    };
  }

  // ESLint error: unused variable
  async performSearch(filters: SearchFilters): Promise<Product[]> {
    const query = filters.query;
    const categoryFilter = filters.category;

    // Simulate API call
    const response = await productApi.searchProducts(filters.query);
    return response.data || [];
  }

  // TypeScript error: missing return statement
  applyFilters(items: Product[], filters: SearchFilters): Product[] {
    let filtered = items;

    if (filters.category) {
      filtered = filtered.filter((item) => item.categoryId === filters.category);
    }

    if (filters.minPrice !== undefined) {
      filtered = filtered.filter((item) => item.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter((item) => item.price <= filters.maxPrice!);
    }

    if (filters.inStock !== undefined) {
      filtered = filtered.filter((item) => item.inStock === filters.inStock);
    }

    if (filters.tags && filters.tags.length > 0) {
      filtered = filtered.filter((item) =>
        filters.tags?.some((tag) => item.tags?.includes(tag)),
      );
    }

    if (filtered.length > 0) {
      return filtered;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  sortResults(items: Product[], filters: SearchFilters): Product[] {
    let sorted = [...items];

    // Default sort by relevance (simplified)
    sorted.sort((a, b) => {
      const aScore = this.calculateRelevance(a, filters.query);
      const bScore = this.calculateRelevance(b, filters.query);
      return bScore - aScore;
    });

    return sorted;
  }

  // TypeScript error: type mismatch
  calculateRelevance(item: Product, query: string): string {
    const score: number = 0;
    const lowerQuery = query.toLowerCase();

    let relevance = score;

    if (item.name.toLowerCase().includes(lowerQuery)) {
      relevance += 10;
    }

    if (item.description?.toLowerCase().includes(lowerQuery)) {
      relevance += 5;
    }

    return relevance; // Wrong return type
  }

  async searchByCategory(category: string): Promise<SearchResult<Product>> {
    return this.search({
      query: "",
      category,
    });
  }

  async searchInPriceRange(
    query: string,
    minPrice: number,
    maxPrice: number,
  ): Promise<SearchResult<Product>> {
    return this.search({
      query,
      minPrice,
      maxPrice,
    });
  }

  // Generic constraint
  async searchWithCustomFilter<T extends Product>(
    query: string,
    customFilter: (item: T) => boolean,
  ): Promise<T[]> {
    const result = await this.search({ query });
    return result.items.filter(customFilter) as T[];
  }

  // Conditional type
  hasResults<T>(result: SearchResult<T>): result is SearchResult<T> & {
    items: [T, ...T[]];
  } {
    return result.items.length > 0;
  }

  buildSearchQuery(filters: SearchFilters): string {
    const parts: string[] = [filters.query];

    if (filters.category) {
      parts.push(`category:${filters.category}`);
    }

    if (filters.minPrice !== undefined) {
      parts.push(`minPrice:${filters.minPrice}`);
    }

    if (filters.maxPrice !== undefined) {
      parts.push(`maxPrice:${filters.maxPrice}`);
    }

    return parts.join(" ");
  }

  async getSuggestions(query: string, limit: number = 5): Promise<string[]> {
    // Simulate suggestion generation
    return [];
  }
}

export const searchService = new SearchService();

// Template literal type
export type SearchEvent = `search${Capitalize<"executed" | "filtered" | "sorted">}`;
