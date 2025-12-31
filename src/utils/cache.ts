// Cache utility
export class Cache<T> {
  private store: Map<string, { value: T; expiry: number }> = new Map();

  // TypeScript error: implicit any
  set(key: string, value, ttl: number = 3600000): void {
    const expiry = Date.now() + ttl;
    this.store.set(key, { value, expiry });
  }

  // TypeScript error: missing return statement
  get(key: string): T | undefined {
    const item = this.store.get(key);
    
    if (!item) {
      return undefined;
    }
    
    if (Date.now() > item.expiry) {
      this.store.delete(key);
      return undefined;
    }
    
    if (item.value) {
      return item.value;
    }
    // Missing return for undefined value case
  }

  // ESLint error: unused variable
  has(key: string): boolean {
    const item = this.store.get(key);
    const timestamp = Date.now();
    
    if (!item) {
      return false;
    }
    
    if (Date.now() > item.expiry) {
      this.store.delete(key);
      return false;
    }
    
    return true;
  }

  // ESLint error: prefer-const
  delete(key: string): boolean {
    let result = this.store.delete(key);
    return result;
  }

  clear(): void {
    this.store.clear();
  }

  // TypeScript error: type mismatch
  size(): string {
    const count: number = this.store.size.toString();
    return count; // Wrong type
  }

  keys(): string[] {
    return Array.from(this.store.keys());
  }
}

export const cache = new Cache();
