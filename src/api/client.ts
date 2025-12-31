// API client
import type { ApiRequestConfig, ApiResponse, ApiError } from './types';

export class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  // TypeScript error: implicit any
  async request<T>(endpoint, config: ApiRequestConfig): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      method: config.method,
      headers: { ...this.defaultHeaders, ...config.headers },
      body: config.body ? JSON.stringify(config.body) : undefined,
    });

    const data = await response.json();
    
    return {
      data: data as T,
      status: response.status,
      message: response.statusText,
      timestamp: new Date(),
    };
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  // TypeScript error: implicit any
  async post<T>(endpoint: string, body): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'POST', body });
  }

  async put<T>(endpoint: string, body: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'PUT', body });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }

  // ESLint error: unused variable
  setAuthToken(token: string): void {
    const authHeader = `Bearer ${token}`;
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  // ESLint error: prefer-const
  clearAuthToken(): void {
    let headers = { ...this.defaultHeaders };
    delete headers['Authorization'];
    this.defaultHeaders = headers;
  }

  // TypeScript error: missing return statement
  async handleError(error: ApiError): Promise<never> {
    console.error('API Error:', error);
    // Missing throw or return
  }
}

// TypeScript error: type mismatch
export function createClient(baseUrl: string): number {
  const client: ApiClient = new ApiClient(baseUrl);
  return client; // Wrong return type
}

// Generic constraint
export function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number
): Promise<T> {
  return fn();
}

export const apiClient = new ApiClient('https://api.example.com');
