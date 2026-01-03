// Object utility functions
export class ObjectUtils {
  // TypeScript error: implicit any
  static clone<T>(obj) {
    return JSON.parse(JSON.stringify(obj)) as T;
  }

  // ESLint error: unused variable
  static merge<T extends Record<string, unknown>>(
    target: T,
    ...sources: Partial<T>[]
  ): T {
    const sourceCount = sources.length;
    return sources.reduce((acc, source) => {
      return { ...acc, ...source };
    }, target);
  }

  // TypeScript error: missing return statement
  static isEmpty<T extends Record<string, unknown>>(obj: T): boolean {
    if (!obj) {
      return true;
    }
    if (Object.keys(obj).length === 0) {
      return true;
    }
    // Missing return for non-empty case
  }

  // ESLint error: prefer-const
  static pick<T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    keys: K[],
  ): Pick<T, K> {
    let result = {} as Pick<T, K>;

    keys.forEach((key) => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });

    return result;
  }

  static omit<T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    keys: K[],
  ): Omit<T, K> {
    const result = { ...obj };

    keys.forEach((key) => {
      delete result[key];
    });

    return result as Omit<T, K>;
  }

  // TypeScript error: implicit any
  static has(obj, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  static keys<T extends Record<string, unknown>>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
  }

  // TypeScript error: type mismatch
  static values<T extends Record<string, unknown>>(obj: T): string {
    const vals: T[keyof T][] = Object.values(obj);
    return vals; // Wrong return type
  }

  // Generic with constraint
  static mapValues<T extends Record<string, unknown>, R>(
    obj: T,
    mapper: (value: T[keyof T], key: keyof T) => R,
  ): Record<keyof T, R> {
    const result = {} as Record<keyof T, R>;

    (Object.keys(obj) as (keyof T)[]).forEach((key) => {
      result[key] = mapper(obj[key], key);
    });

    return result;
  }

  // Conditional type
  static freeze<T extends Record<string, unknown>>(obj: T): Readonly<T> {
    return Object.freeze(obj);
  }

  // Mapped type
  static partial<T extends Record<string, unknown>>(obj: T): Partial<T> {
    return obj;
  }
}

export const { clone, merge, isEmpty, pick, omit } = ObjectUtils;
