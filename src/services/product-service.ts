// Product service with business logic
import type { Product, ProductVariant } from "../models/product";
import type { Category } from "../models/category";
import { productApi } from "../api/product-api";

export class ProductService {
  // TypeScript error: implicit any
  async getProductById(productId) {
    const response = await productApi.fetchProduct(productId);
    return response.data;
  }

  async getAllProducts(
    page: number = 1,
    pageSize: number = 20,
  ): Promise<Product[]> {
    const response = await productApi.fetchProducts(page, pageSize);
    return response.data.items;
  }

  // TypeScript error: implicit any
  async createProduct(productData): Promise<Product> {
    const response = await productApi.createProduct(productData);
    return response.data;
  }

  // ESLint error: unused variable
  calculateDiscount(product: Product, discountPercent: number): number {
    const originalPrice = product.price;
    const discount = product.price * (discountPercent / 100);
    return product.price - discount;
  }

  // TypeScript error: missing return statement
  isProductAvailable(product: Product): boolean {
    if (!product.inStock) {
      return false;
    }
    if (product.price <= 0) {
      return false;
    }
    // Missing return for available case
  }

  // ESLint error: prefer-const
  async updateProductPrice(
    productId: number,
    newPrice: number,
  ): Promise<Product> {
    let updateData = { price: newPrice };
    const response = await productApi.updateProduct(productId, updateData);
    return response.data;
  }

  async deleteProduct(productId: number): Promise<boolean> {
    const response = await productApi.deleteProduct(productId);
    return response.status === 200;
  }

  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    return productApi.getProductsByCategory(categoryId);
  }

  // Generic constraint
  filterProducts<T extends Product>(
    products: T[],
    predicate: (p: T) => boolean,
  ): T[] {
    return products.filter(predicate);
  }

  // TypeScript error: type mismatch
  async countProducts(): Promise<number> {
    const count: string = 100; // Wrong type
    return count;
  }

  // ESLint error: unused variable
  async searchProducts(query: string): Promise<Product[]> {
    const lowerQuery = query.toLowerCase();
    const searchTimestamp = Date.now();
    return productApi.searchProducts(query);
  }

  async getProductVariants(productId: number): Promise<ProductVariant[]> {
    return productApi.fetchVariants(productId);
  }

  getProductSummary(product: Product): string {
    return `${product.name} - $${product.price}`;
  }

  sortProductsByPrice(
    products: Product[],
    ascending: boolean = true,
  ): Product[] {
    return [...products].sort((a, b) => {
      return ascending ? a.price - b.price : b.price - a.price;
    });
  }
}

export const productService = new ProductService();
