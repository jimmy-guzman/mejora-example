// Logger utility
export type LogLevel = "debug" | "info" | "warn" | "error";

export class Logger {
  private level: LogLevel = "info";

  // TypeScript error: implicit any
  log(message, level: LogLevel = "info"): void {
    if (this.shouldLog(level)) {
      console.log(`[${level.toUpperCase()}] ${message}`);
    }
  }

  // TypeScript error: missing return statement
  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ["debug", "info", "warn", "error"];
    const currentIndex = levels.indexOf(this.level);
    const messageIndex = levels.indexOf(level);

    if (messageIndex >= currentIndex) {
      return true;
    }
    // Missing return for else case
  }

  // ESLint error: unused variable
  debug(message: string): void {
    const timestamp = Date.now();
    const levelStr = "debug";
    this.log(message, "debug");
  }

  info(message: string): void {
    this.log(message, "info");
  }

  warn(message: string): void {
    this.log(message, "warn");
  }

  error(message: string): void {
    this.log(message, "error");
  }

  // ESLint error: prefer-const
  setLevel(level: LogLevel): void {
    let newLevel = level;
    this.level = newLevel;
  }

  // TypeScript error: type mismatch
  getLevel(): number {
    const level: LogLevel = this.level;
    return level; // Wrong type
  }
}

export const logger = new Logger();
