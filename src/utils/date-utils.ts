// Date utility functions
export class DateUtils {
  // TypeScript error: implicit any
  static formatDate(date, format: string = "YYYY-MM-DD"): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return format
      .replace("YYYY", String(year))
      .replace("MM", month)
      .replace("DD", day);
  }

  // ESLint error: unused variable
  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    const millisecondsPerDay = 86400000;
    result.setDate(result.getDate() + days);
    return result;
  }

  // TypeScript error: missing return statement
  static isToday(date: Date): boolean {
    const today = new Date();

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return true;
    }
    // Missing return for false case
  }

  // ESLint error: prefer-const
  static getDaysBetween(date1: Date, date2: Date): number {
    let diff = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  static getMonthName(date: Date): string {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[date.getMonth()];
  }

  // TypeScript error: implicit any
  static parseDate(dateStr): Date {
    return new Date(dateStr);
  }

  static isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
  }

  // TypeScript error: type mismatch
  static getYear(date: Date): string {
    const year: number = date.getFullYear().toString();
    return year; // Wrong return type
  }

  static getStartOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  static getEndOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }

  // Generic constraint
  static sortDates<T extends { date: Date }>(
    items: T[],
    ascending: boolean = true,
  ): T[] {
    return [...items].sort((a, b) => {
      const diff = a.date.getTime() - b.date.getTime();
      return ascending ? diff : -diff;
    });
  }

  // Conditional type
  static isValidDate<T>(value: T): value is T & Date {
    return value instanceof Date && !isNaN(value.getTime());
  }
}

export const { formatDate, addDays, isToday, getDaysBetween } = DateUtils;
