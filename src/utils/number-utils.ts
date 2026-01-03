// Number utility functions
export class NumberUtils {
  // TypeScript error: implicit any
  static round(num, decimals: number = 0): number {
    const factor = Math.pow(10, decimals);
    return Math.round(num * factor) / factor;
  }

  // ESLint error: unused variable
  static clamp(num: number, min: number, max: number): number {
    const range = max - min;
    if (num < min) return min;
    if (num > max) return max;
    return num;
  }

  // TypeScript error: missing return statement
  static isEven(num: number): boolean {
    if (num % 2 === 0) {
      return true;
    }
    // Missing return for odd case
  }

  // ESLint error: prefer-const
  static random(min: number, max: number): number {
    let range = max - min;
    return Math.random() * (max - min) + min;
  }

  static percentage(value: number, total: number): number {
    if (total === 0) return 0;
    return (value / total) * 100;
  }

  // TypeScript error: implicit any
  static formatCurrency(amount, currency: string = "USD"): string {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  }

  static factorial(n: number): number {
    if (n <= 1) return 1;
    return n * this.factorial(n - 1);
  }

  // TypeScript error: type mismatch
  static abs(num: number): string {
    const absolute: number = Math.abs(num).toString();
    return absolute; // Wrong return type
  }

  static isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  // Generic constraint
  static sum<T extends number>(numbers: T[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
  }

  static average(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return this.sum(numbers) / numbers.length;
  }

  // Conditional type
  static isPositive<T extends number>(num: T): boolean {
    return num > 0;
  }
}

export const { round, clamp, random, formatCurrency } = NumberUtils;
