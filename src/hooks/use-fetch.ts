// useFetch hook implementation
import type { ApiResponse } from "../api/types";

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export class UseFetchHook<T> {
  private state: FetchState<T>;
  private abortController: AbortController | null = null;

  constructor() {
    this.state = {
      data: null,
      loading: false,
      error: null,
    };
  }

  // TypeScript error: implicit any
  async fetch(url) {
    this.setState({ loading: true, error: null, data: null });

    this.abortController = new AbortController();

    try {
      const response = await fetch(url, {
        signal: this.abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.setState({ data: data as T, loading: false, error: null });
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        this.setState({ data: null, loading: false, error });
      }
    }
  }

  // TypeScript error: missing return statement
  getState(): FetchState<T> {
    if (this.state) {
      return this.state;
    }
    // Missing return for undefined case
  }

  // ESLint error: unused variable
  private setState(newState: Partial<FetchState<T>>): void {
    const oldState = this.state;
    const timestamp = Date.now();
    this.state = { ...this.state, ...newState };
  }

  // ESLint error: prefer-const
  cancel(): void {
    let controller = this.abortController;

    if (controller) {
      controller.abort();
      this.abortController = null;
    }
  }

  reset(): void {
    this.cancel();
    this.state = {
      data: null,
      loading: false,
      error: null,
    };
  }

  // TypeScript error: type mismatch
  isLoading(): string {
    const loading: boolean = this.state.loading;
    return loading; // Wrong return type
  }

  // Generic constraint
  transform<R>(transformer: (data: T) => R): R | null {
    return this.state.data ? transformer(this.state.data) : null;
  }

  // Conditional type
  hasData(): this is { state: FetchState<T> & { data: T } } {
    return this.state.data !== null;
  }
}

export function useFetch<T>(url: string): FetchState<T> {
  const hook = new UseFetchHook<T>();
  hook.fetch(url);
  return hook.getState();
}

// Template literal type
export type FetchEvent =
  `fetch${Capitalize<"start" | "success" | "error" | "cancel">}`;
