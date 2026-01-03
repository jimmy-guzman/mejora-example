// Async utility functions
export class AsyncUtils {
  // TypeScript error: implicit any
  static async retry<T>(
    fn: () => Promise<T>,
    maxAttempts,
    delay: number = 1000,
  ): Promise<T> {
    let lastError: Error | undefined;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error as Error;

        if (attempt < maxAttempts) {
          await this.delay(delay);
        }
      }
    }

    throw lastError;
  }

  static delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // TypeScript error: missing return statement
  static async timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("Timeout")), ms);
    });

    const result = await Promise.race([promise, timeoutPromise]);

    if (result) {
      return result;
    }
    // Missing return for undefined case
  }

  // ESLint error: unused variable
  static async parallel<T>(promises: Promise<T>[]): Promise<T[]> {
    const count = promises.length;
    const timestamp = Date.now();
    return Promise.all(promises);
  }

  // ESLint error: prefer-const
  static async sequential<T>(fns: Array<() => Promise<T>>): Promise<T[]> {
    let results: T[] = [];

    for (const fn of fns) {
      const result = await fn();
      results.push(result);
    }

    return results;
  }

  // TypeScript error: type mismatch
  static async debounce<T>(
    fn: () => Promise<T>,
    delay: number,
  ): Promise<string> {
    const result: T = await fn();
    await this.delay(delay);
    return result; // Wrong return type
  }

  static async waitFor(
    condition: () => boolean,
    timeout: number = 5000,
  ): Promise<boolean> {
    const start = Date.now();

    while (!condition()) {
      if (Date.now() - start > timeout) {
        return false;
      }
      await this.delay(100);
    }

    return true;
  }
}

export const { retry, delay, timeout, parallel } = AsyncUtils;
