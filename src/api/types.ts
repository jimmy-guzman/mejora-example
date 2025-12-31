// API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ApiRequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string>;
}

// TypeScript error: implicit any
export function createSuccessResponse(data, message = 'Success'): ApiResponse<unknown> {
  return {
    data,
    status: 200,
    message,
    timestamp: new Date(),
  };
}

// TypeScript error: missing return statement
export function isSuccessResponse<T>(response: ApiResponse<T>): boolean {
  if (response.status >= 200 && response.status < 300) {
    return true;
  }
  // Missing return for error case
}

// ESLint error: unused variable
export function createErrorResponse(code: string, message: string): ApiError {
  const timestamp = Date.now();
  return {
    code,
    message,
  };
}

// Generic with constraint
export function mapResponse<T, R>(
  response: ApiResponse<T>,
  mapper: (data: T) => R
): ApiResponse<R> {
  return {
    ...response,
    data: mapper(response.data),
  };
}

// Conditional type
export type ResponseData<T> = T extends ApiResponse<infer D>
  ? D
  : never;

// Mapped type
export type PartialConfig = {
  [P in keyof ApiRequestConfig]?: ApiRequestConfig[P];
};

// ESLint error: prefer-const
export function createPaginatedResult<T>(
  items: T[],
  total: number,
  page: number,
  pageSize: number
): PaginatedResult<T> {
  let hasMore = page * pageSize < total;
  
  return {
    items,
    total,
    page,
    pageSize,
    hasMore,
  };
}

// Template literal type
export type ApiEndpoint = `/${'users' | 'products' | 'orders'}${string}`;

// TypeScript error: type mismatch
export function getStatusText(status: number): number {
  const text: string = status; // Wrong type
  return text;
}

export function validateResponse<T>(response: ApiResponse<T>): boolean {
  return response.status >= 200 && response.status < 300;
}
