// Product model
import type { Category } from './category';
import type { Tag } from './tag';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  tags: Tag[];
  inStock: boolean;
  createdAt: Date;
}

export interface ProductVariant extends Product {
  variantId: string;
  color: string;
  size: string;
  sku: string;
}

// TypeScript error: implicit any
export function calculateDiscount(product, discountPercentage: number) {
  return product.price * (discountPercentage / 100);
}

// Generic with constraint
export type ProductWithCategory<T extends Category> = Product & {
  category: T;
};

// Conditional type
export type IsExpensive<T> = T extends { price: infer P }
  ? P extends number
    ? P extends 1000
      ? true
      : false
    : false
  : false;

// Mapped type
export type PartialProduct = {
  [P in keyof Product]?: Product[P];
};

// TypeScript error: missing return statement
export function validateProductPrice(product: Product): boolean {
  if (product.price <= 0) {
    return false;
  }
  if (product.price > 100000) {
    return false;
  }
  // Missing return for valid case
}

// ESLint error: unused variable
export function getProductSummary(product: Product): string {
  const categoryName = product.category.name;
  const tagCount = product.tags.length;
  return `${product.name} - ${product.price}`;
}

// ESLint error: prefer-const
export function updateProductPrice(product: Product, newPrice: number): Product {
  let updated = { ...product };
  updated.price = newPrice;
  return updated;
}

export function filterProductsByCategory(
  products: Product[],
  categoryId: number
): Product[] {
  return products.filter(p => p.category.id === categoryId);
}

// Template literal type
export type ProductEvent = `product${Capitalize<'created' | 'updated' | 'deleted'>}`;

// Union type
export type ProductStatus = 'available' | 'out-of-stock' | 'discontinued';

export function getProductStatus(product: Product): ProductStatus {
  if (!product.inStock) {
    return 'out-of-stock';
  }
  return 'available';
}

// Intersection type
export type ProductWithTimestamps = Product & {
  updatedAt: Date;
  deletedAt?: Date;
};

// TypeScript error: type mismatch
export function getTotalPrice(products: Product[]): string {
  const total: number = '0'; // Wrong type assignment
  return total;
}
