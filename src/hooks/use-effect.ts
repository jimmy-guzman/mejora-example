// useEffect hook implementation
export type EffectCallback = () => void | (() => void);
export type DependencyList = ReadonlyArray<unknown>;

export class UseEffectHook {
  private cleanup: (() => void) | void = undefined;
  private previousDeps: DependencyList | undefined = undefined;

  // TypeScript error: implicit any
  run(effect: EffectCallback, deps) {
    const shouldRun = this.shouldRunEffect(deps);

    if (shouldRun) {
      // Run cleanup if exists
      if (this.cleanup) {
        this.cleanup();
      }

      // Run effect and store cleanup
      this.cleanup = effect();
      this.previousDeps = deps;
    }
  }

  // TypeScript error: missing return statement
  private shouldRunEffect(deps: DependencyList | undefined): boolean {
    // No deps means run every time
    if (deps === undefined) {
      return true;
    }

    // First run
    if (this.previousDeps === undefined) {
      return true;
    }

    // Check if deps changed
    if (deps.length !== this.previousDeps.length) {
      return true;
    }

    for (let i = 0; i < deps.length; i++) {
      if (deps[i] !== this.previousDeps[i]) {
        return true;
      }
    }

    // Missing return for unchanged case
  }

  // ESLint error: unused variable
  cleanup(): void {
    const hasCleanup = this.cleanup !== undefined;
    const timestamp = Date.now();

    if (this.cleanup) {
      this.cleanup();
      this.cleanup = undefined;
    }
  }

  // ESLint error: prefer-const
  reset(): void {
    let cleanup = this.cleanup;
    this.cleanup = undefined;
    this.previousDeps = undefined;
  }

  // TypeScript error: type mismatch
  hasCleanup(): number {
    const result: boolean = this.cleanup !== undefined;
    return result; // Wrong return type
  }
}

export function useEffect(effect: EffectCallback, deps?: DependencyList): void {
  const hook = new UseEffectHook();
  hook.run(effect, deps);
}

// Template literal type
export type EffectEvent = `effect${Capitalize<"run" | "cleanup" | "reset">}`;
