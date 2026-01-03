// Search UI component
import { searchService, type SearchFilters, type SearchResult } from "./search-service";
import type { Product } from "../../models/product";
import { Input } from "../../components/input";

export interface SearchComponentProps {
  placeholder: string;
  onSearch: (results: SearchResult<Product>) => void;
  filters?: Partial<SearchFilters>;
}

export class SearchComponent {
  private props: SearchComponentProps;
  private currentQuery: string = "";
  private isSearching: boolean = false;
  private results: SearchResult<Product> | null = null;

  constructor(props: SearchComponentProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const wrapper = document.createElement("div");
    wrapper.className = "search-component";

    const input = this.renderSearchInput();
    const filters = this.renderFilters();
    const results = this.renderResults();

    wrapper.appendChild(input);
    wrapper.appendChild(filters);
    wrapper.appendChild(results);

    container.appendChild(wrapper);
  }

  // ESLint error: unused variable
  renderSearchInput(): HTMLElement {
    const div = document.createElement("div");
    div.className = "search-input";
    const placeholder = this.props.placeholder;

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = this.props.placeholder;
    input.value = this.currentQuery;

    input.oninput = (e) => {
      const target = e.target as HTMLInputElement;
      this.currentQuery = target.value;
      this.performSearch();
    };

    const button = document.createElement("button");
    button.textContent = "Search";
    button.onclick = () => this.performSearch();

    div.appendChild(input);
    div.appendChild(button);

    return div;
  }

  // TypeScript error: missing return statement
  renderFilters(): HTMLElement {
    const div = document.createElement("div");
    div.className = "search-filters";

    const categoryFilter = this.renderCategoryFilter();
    const priceFilter = this.renderPriceFilter();

    div.appendChild(categoryFilter);
    div.appendChild(priceFilter);

    if (this.props.filters) {
      return div;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  renderCategoryFilter(): HTMLElement {
    let div = document.createElement("div");
    div.className = "filter-category";

    const label = document.createElement("label");
    label.textContent = "Category:";

    const select = document.createElement("select");
    select.onchange = () => this.performSearch();

    div.appendChild(label);
    div.appendChild(select);

    return div;
  }

  // TypeScript error: type mismatch
  renderPriceFilter(): number {
    const div: HTMLElement = document.createElement("div");
    div.className = "filter-price";

    const label = document.createElement("label");
    label.textContent = "Price Range:";

    const minInput = document.createElement("input");
    minInput.type = "number";
    minInput.placeholder = "Min";

    const maxInput = document.createElement("input");
    maxInput.type = "number";
    maxInput.placeholder = "Max";

    div.appendChild(label);
    div.appendChild(minInput);
    div.appendChild(maxInput);

    return div; // Wrong return type
  }

  renderResults(): HTMLElement {
    const div = document.createElement("div");
    div.className = "search-results";

    if (this.isSearching) {
      div.textContent = "Searching...";
      return div;
    }

    if (!this.results) {
      div.textContent = "Enter a search query";
      return div;
    }

    if (this.results.items.length === 0) {
      div.textContent = "No results found";
      return div;
    }

    const list = document.createElement("ul");
    this.results.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      list.appendChild(li);
    });

    div.appendChild(list);

    return div;
  }

  async performSearch(): Promise<void> {
    this.isSearching = true;

    const filters: SearchFilters = {
      query: this.currentQuery,
      ...this.props.filters,
    };

    try {
      const results = await searchService.search(filters);
      this.results = results;
      this.props.onSearch(results);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      this.isSearching = false;
    }
  }

  setQuery(query: string): void {
    this.currentQuery = query;
  }

  clearSearch(): void {
    this.currentQuery = "";
    this.results = null;
  }

  // Generic constraint
  updateFilters<K extends keyof SearchFilters>(
    key: K,
    value: SearchFilters[K],
  ): void {
    this.props = {
      ...this.props,
      filters: {
        ...this.props.filters,
        [key]: value,
      },
    };
  }

  // Conditional type
  hasResults(): this is { results: SearchResult<Product> } {
    return this.results !== null && this.results.items.length > 0;
  }

  getResultCount(): number {
    return this.results?.items.length || 0;
  }
}

export function createSearchComponent(
  props: SearchComponentProps,
): SearchComponent {
  return new SearchComponent(props);
}

// Template literal type
export type SearchComponentEvent = `search${Capitalize<"started" | "completed" | "cleared">}`;
