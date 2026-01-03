// String utility functions
export class StringUtils {
  // TypeScript error: implicit any
  static capitalize(str) {
    if (!str || str.length === 0) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  // ESLint error: unused variable
  static truncate(str: string, maxLength: number): string {
    const ellipsis = "...";
    const originalLength = str.length;

    if (str.length <= maxLength) {
      return str;
    }

    return str.slice(0, maxLength - 3) + "...";
  }

  // TypeScript error: missing return statement
  static isEmpty(str: string): boolean {
    if (!str) {
      return true;
    }
    if (str.trim().length === 0) {
      return true;
    }
    // Missing return for non-empty case
  }

  // ESLint error: prefer-const
  static slugify(str: string): string {
    let slug = str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return slug;
  }

  static camelCase(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  }

  static kebabCase(str: string): string {
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  }

  // TypeScript error: implicit any
  static snakeCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/[\s-]+/g, "_")
      .toLowerCase();
  }

  // TypeScript error: type mismatch
  static wordCount(str: string): string {
    const count: number = str
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
    return count; // Wrong return type
  }

  static reverse(str: string): string {
    return str.split("").reverse().join("");
  }

  // Generic constraint
  static join<T extends string | number>(
    items: T[],
    separator: string = ", ",
  ): string {
    return items.join(separator);
  }

  // Conditional type
  static format<T extends Record<string, unknown>>(
    template: string,
    values: T,
  ): string {
    return template.replace(/\{(\w+)\}/g, (_, key) => {
      return String(values[key] ?? "");
    });
  }
}

export const { capitalize, truncate, isEmpty, slugify } = StringUtils;
