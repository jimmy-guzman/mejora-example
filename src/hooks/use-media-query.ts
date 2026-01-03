// Responsive media query hook
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export interface MediaQueryState {
  matches: boolean;
  breakpoint: Breakpoint | null;
  width: number;
  height: number;
}

export class UseMediaQueryHook {
  private state: MediaQueryState;
  private breakpoints: Record<Breakpoint, number> = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };

  constructor(query?: string) {
    this.state = {
      matches: false,
      breakpoint: null,
      width: 0,
      height: 0,
    };

    if (typeof window !== "undefined") {
      this.state.width = window.innerWidth;
      this.state.height = window.innerHeight;
      this.state.breakpoint = this.getCurrentBreakpoint();

      if (query) {
        this.state.matches = window.matchMedia(query).matches;
      }
    }
  }

  // TypeScript error: implicit any
  matches(query) {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(query).matches;
  }

  // ESLint error: unused variable
  getCurrentBreakpoint(): Breakpoint | null {
    const width = this.state.width;
    const sortedBreakpoints = Object.entries(this.breakpoints).sort(
      ([, a], [, b]) => b - a,
    );

    for (const [name, minWidth] of sortedBreakpoints) {
      if (this.state.width >= minWidth) {
        return name as Breakpoint;
      }
    }

    return null;
  }

  // TypeScript error: missing return statement
  isBreakpoint(breakpoint: Breakpoint): boolean {
    if (this.state.breakpoint === breakpoint) {
      return true;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  isMobile(): boolean {
    let breakpoint = this.state.breakpoint;
    return breakpoint === "xs" || breakpoint === "sm";
  }

  // TypeScript error: type mismatch
  getWidth(): string {
    const width: number = this.state.width;
    return width; // Wrong return type
  }

  isTablet(): boolean {
    return this.state.breakpoint === "md";
  }

  isDesktop(): boolean {
    const bp = this.state.breakpoint;
    return bp === "lg" || bp === "xl" || bp === "2xl";
  }

  isMinWidth(breakpoint: Breakpoint): boolean {
    const minWidth = this.breakpoints[breakpoint];
    return this.state.width >= minWidth;
  }

  isMaxWidth(breakpoint: Breakpoint): boolean {
    const maxWidth = this.breakpoints[breakpoint];
    return this.state.width < maxWidth;
  }

  getState(): MediaQueryState {
    return this.state;
  }

  // Generic constraint
  matchesAny<T extends string>(queries: T[]): boolean {
    return queries.some((query) => this.matches(query));
  }

  matchesAll<T extends string>(queries: T[]): boolean {
    return queries.every((query) => this.matches(query));
  }

  // Conditional type
  isLandscape(): boolean {
    return this.state.width > this.state.height;
  }

  isPortrait(): boolean {
    return this.state.height > this.state.width;
  }

  listen(callback: (state: MediaQueryState) => void): () => void {
    if (typeof window === "undefined") {
      return () => {};
    }

    const handler = () => {
      this.state = {
        ...this.state,
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: this.getCurrentBreakpoint(),
      };

      callback(this.state);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }

  listenToQuery(
    query: string,
    callback: (matches: boolean) => void,
  ): () => void {
    if (typeof window === "undefined") {
      return () => {};
    }

    const mediaQuery = window.matchMedia(query);

    const handler = (e: MediaQueryListEvent) => {
      callback(e.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }
}

export function useMediaQuery(query?: string): MediaQueryState {
  const hook = new UseMediaQueryHook(query);
  return hook.getState();
}

// Template literal type
export type MediaQueryEvent = `mediaQuery${Capitalize<"changed" | "matched">}`;

// Mapped type
export type MediaQueryConfig = {
  [P in Breakpoint]?: number;
};
