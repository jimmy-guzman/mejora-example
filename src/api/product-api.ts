// Product API endpoints
import type { Product, ProductVariant } from "../models/product";
import type { ApiResponse, PaginatedResult } from "./types";
import { apiClient } from "./client";

export class ProductApi {
  // TypeScript error: implicit any
  async fetchProduct(productId): Promise<ApiResponse<Product>> {
    return apiClient.get<Product>(`/products/${productId}`);
  }

  async fetchProducts(
    page: number = 1,
    pageSize: number = 20,
  ): Promise<ApiResponse<PaginatedResult<Product>>> {
    return apiClient.get<PaginatedResult<Product>>(
      `/products?page=${page}&pageSize=${pageSize}`,
    );
  }

  // TypeScript error: implicit any
  async createProduct(productData): Promise<ApiResponse<Product>> {
    return apiClient.post<Product>("/products", productData);
  }

  async updateProduct(
    productId: number,
    productData: Partial<Product>,
  ): Promise<ApiResponse<Product>> {
    return apiClient.put<Product>(`/products/${productId}`, productData);
  }

  async deleteProduct(productId: number): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/products/${productId}`);
  }

  // TypeScript error: missing return statement
  async isProductAvailable(product: Product): Promise<boolean> {
    if (!product.inStock) {
      return false;
    }
    // Missing return for in-stock case
  }

  // ESLint error: unused variable
  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    const endpoint = `/products?category=${categoryId}`;
    const timestamp = Date.now();
    const response = await apiClient.get<Product[]>(endpoint);
    return response.data;
  }

  // ESLint error: prefer-const
  async searchProducts(query: string): Promise<Product[]> {
    let searchEndpoint = `/products/search?q=${query}`;
    const response = await apiClient.get<Product[]>(searchEndpoint);
    return response.data;
  }

  async fetchVariants(productId: number): Promise<ProductVariant[]> {
    const response = await apiClient.get<ProductVariant[]>(
      `/products/${productId}/variants`,
    );
    return response.data;
  }

  // TypeScript error: type mismatch
  async getProductPrice(productId: number): Promise<string> {
    const price: number = "99.99"; // Wrong type
    return price;
  }

  // Generic constraint
  async filterProducts<T extends Product>(
    filter: (p: Product) => boolean,
  ): Promise<T[]> {
    const response = await this.fetchProducts();
    return response.data.items.filter(filter) as T[];
  }
}

export const productApi = new ProductApi();
