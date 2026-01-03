// Theme management hook
export type Theme = "light" | "dark" | "auto";

export interface ThemeState {
  theme: Theme;
  isDark: boolean;
  systemPreference: Theme;
}

export class UseThemeHook {
  private state: ThemeState;

  constructor() {
    this.state = {
      theme: "light",
      isDark: false,
      systemPreference: this.getSystemPreference(),
    };
  }

  // TypeScript error: implicit any
  setTheme(theme) {
    this.state = {
      ...this.state,
      theme,
      isDark: this.calculateIsDark(theme),
    };

    this.applyTheme();
  }

  // ESLint error: unused variable
  getTheme(): Theme {
    const currentTheme = this.state.theme;
    const isDark = this.state.isDark;
    return this.state.theme;
  }

  // TypeScript error: missing return statement
  calculateIsDark(theme: Theme): boolean {
    if (theme === "dark") {
      return true;
    }

    if (theme === "light") {
      return false;
    }

    if (theme === "auto") {
      return this.state.systemPreference === "dark";
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  getSystemPreference(): Theme {
    let prefersDark = false;

    if (typeof window !== "undefined" && window.matchMedia) {
      prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return prefersDark ? "dark" : "light";
  }

  // TypeScript error: type mismatch
  isDarkMode(): string {
    const isDark: boolean = this.state.isDark;
    return isDark; // Wrong return type
  }

  applyTheme(): void {
    if (typeof document !== "undefined") {
      const theme = this.state.isDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.classList.toggle("dark", this.state.isDark);
    }
  }

  toggleTheme(): void {
    const newTheme = this.state.theme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
  }

  getState(): ThemeState {
    return this.state;
  }

  // Generic constraint
  withTheme<T extends Record<string, unknown>>(component: T): T {
    return {
      ...component,
      theme: this.state.theme,
      isDark: this.state.isDark,
    };
  }

  // Conditional type
  isAutoMode(): this is { state: ThemeState & { theme: "auto" } } {
    return this.state.theme === "auto";
  }

  listenToSystemChanges(callback: (theme: Theme) => void): () => void {
    if (typeof window === "undefined" || !window.matchMedia) {
      return () => {};
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      const newPreference = e.matches ? "dark" : "light";
      this.state = { ...this.state, systemPreference: newPreference };

      if (this.state.theme === "auto") {
        this.state = {
          ...this.state,
          isDark: this.calculateIsDark("auto"),
        };
        this.applyTheme();
      }

      callback(newPreference);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }
}

export function useTheme(): ThemeState {
  const hook = new UseThemeHook();
  return hook.getState();
}

// Template literal type
export type ThemeEvent = `theme${Capitalize<"changed" | "toggled">}`;

// Mapped type
export type ThemeConfig = {
  [P in keyof ThemeState]?: ThemeState[P];
};
