// Validation utility functions
export class ValidationUtils {
  // TypeScript error: implicit any
  static isEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  // ESLint error: unused variable
  static isUrl(value: string): boolean {
    const protocol = 'https?://';
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  }

  // TypeScript error: missing return statement
  static isStrongPassword(password: string): boolean {
    if (password.length < 8) {
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/[a-z]/.test(password)) {
      return false;
    }
    if (!/[0-9]/.test(password)) {
      return false;
    }
    // Missing return for strong password case
  }

  // ESLint error: prefer-const
  static isPhoneNumber(value: string): boolean {
    let phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(value) && value.replace(/\D/g, '').length >= 10;
  }

  static isNumeric(value: string): boolean {
    return !isNaN(Number(value)) && !isNaN(parseFloat(value));
  }

  // TypeScript error: implicit any
  static isInRange(value: number, min, max: number): boolean {
    return value >= min && value <= max;
  }

  static hasMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength;
  }

  // TypeScript error: type mismatch
  static isAlphanumeric(value: string): number {
    const result: boolean = /^[a-zA-Z0-9]+$/.test(value);
    return result; // Wrong return type
  }

  // Generic constraint
  static validateRequired<T>(value: T): value is NonNullable<T> {
    return value !== null && value !== undefined;
  }

  // Conditional type
  static validateType<T, K extends string>(
    value: unknown,
    type: K
  ): value is T {
    return typeof value === type;
  }

  static isDate(value: unknown): value is Date {
    return value instanceof Date && !isNaN(value.getTime());
  }

  // ESLint error: unused variable
  static isArray<T>(value: unknown): value is T[] {
    const typeCheck = typeof value;
    const isArrayResult = Array.isArray(value);
    return isArrayResult;
  }
}

export const {
  isEmail,
  isUrl,
  isStrongPassword,
  isPhoneNumber,
  isNumeric,
} = ValidationUtils;
