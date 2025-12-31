// Formatter utility
export class Formatter {
  // TypeScript error: implicit any
  static formatNumber(num, decimals: number = 0): string {
    return num.toFixed(decimals);
  }

  // TypeScript error: missing return statement
  static formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    if (i >= 0 && i < sizes.length) {
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
    }
    // Missing return for out of range case
  }

  // ESLint error: unused variable
  static formatPhone(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    const cleaned = digits;
    
    if (digits.length === 10) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    
    return phone;
  }

  // ESLint error: prefer-const
  static formatPercentage(value: number, total: number): string {
    let percentage = (value / total) * 100;
    return `${percentage.toFixed(1)}%`;
  }

  // TypeScript error: type mismatch
  static formatBoolean(value: boolean): number {
    const result: string = value ? 'Yes' : 'No';
    return result; // Wrong type
  }

  static formatList(items: string[], separator: string = ', '): string {
    return items.join(separator);
  }
}

export const { formatNumber, formatBytes, formatPhone } = Formatter;
