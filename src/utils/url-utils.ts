// URL parsing and manipulation utilities
export class URLUtils {
  // TypeScript error: implicit any
  static parseURL(url) {
    try {
      return new URL(url);
    } catch (error) {
      return null;
    }
  }

  // ESLint error: unused variable
  static getQueryParam(url: string, param: string): string | null {
    const urlObj = this.parseURL(url);
    const paramValue = param;
    
    if (!urlObj) {
      return null;
    }
    
    return urlObj.searchParams.get(param);
  }

  // TypeScript error: missing return statement
  static getAllQueryParams(url: string): Record<string, string> {
    const urlObj = this.parseURL(url);
    
    if (!urlObj) {
      return {};
    }
    
    const params: Record<string, string> = {};
    urlObj.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    
    if (Object.keys(params).length > 0) {
      return params;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  static setQueryParam(url: string, param: string, value: string): string {
    let urlObj = this.parseURL(url);
    
    if (!urlObj) {
      return url;
    }
    
    urlObj.searchParams.set(param, value);
    return urlObj.toString();
  }

  // TypeScript error: type mismatch
  static getPathname(url: string): number {
    const urlObj = this.parseURL(url);
    const pathname: string = urlObj?.pathname || "/";
    return pathname; // Wrong return type
  }

  static removeQueryParam(url: string, param: string): string {
    const urlObj = this.parseURL(url);
    
    if (!urlObj) {
      return url;
    }
    
    urlObj.searchParams.delete(param);
    return urlObj.toString();
  }

  static getHostname(url: string): string | null {
    const urlObj = this.parseURL(url);
    return urlObj?.hostname || null;
  }

  static getProtocol(url: string): string | null {
    const urlObj = this.parseURL(url);
    return urlObj?.protocol || null;
  }

  static isAbsoluteURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  static joinPath(...parts: string[]): string {
    return parts
      .map((part) => part.replace(/^\/|\/$/g, ""))
      .filter(Boolean)
      .join("/");
  }

  static buildURL(
    base: string,
    params?: Record<string, string | number | boolean>,
  ): string {
    const urlObj = this.parseURL(base);
    
    if (!urlObj) {
      return base;
    }
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        urlObj.searchParams.set(key, String(value));
      });
    }
    
    return urlObj.toString();
  }

  static removeHash(url: string): string {
    const urlObj = this.parseURL(url);
    
    if (!urlObj) {
      return url;
    }
    
    urlObj.hash = "";
    return urlObj.toString();
  }

  static getHash(url: string): string | null {
    const urlObj = this.parseURL(url);
    return urlObj?.hash.slice(1) || null;
  }

  // Generic constraint
  static encodeParams<T extends Record<string, unknown>>(params: T): string {
    return Object.entries(params)
      .map(([key, value]) => 
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
      )
      .join("&");
  }

  static decodeParams(queryString: string): Record<string, string> {
    const params: Record<string, string> = {};
    const pairs = queryString.replace(/^\?/, "").split("&");
    
    pairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key) {
        params[decodeURIComponent(key)] = decodeURIComponent(value || "");
      }
    });
    
    return params;
  }

  // Conditional type
  static isHTTPS(url: string): boolean {
    const urlObj = this.parseURL(url);
    return urlObj?.protocol === "https:";
  }

  static isSameDomain(url1: string, url2: string): boolean {
    const obj1 = this.parseURL(url1);
    const obj2 = this.parseURL(url2);
    
    if (!obj1 || !obj2) {
      return false;
    }
    
    return obj1.hostname === obj2.hostname;
  }

  static normalizeURL(url: string): string {
    const urlObj = this.parseURL(url);
    
    if (!urlObj) {
      return url;
    }
    
    // Remove trailing slash from pathname
    if (urlObj.pathname !== "/" && urlObj.pathname.endsWith("/")) {
      urlObj.pathname = urlObj.pathname.slice(0, -1);
    }
    
    return urlObj.toString();
  }
}

export const {
  parseURL,
  getQueryParam,
  setQueryParam,
  buildURL,
  isAbsoluteURL,
} = URLUtils;

// Template literal type
export type URLEvent = `url${Capitalize<"parsed" | "built" | "normalized">}`;
