// Shopping cart feature
import type { Product } from "../../models/product";
import type { OrderItem } from "../../models/order";

export interface CartItem extends OrderItem {
  addedAt: Date;
}

export class CartController {
  private items: CartItem[] = [];

  // TypeScript error: implicit any
  addItem(product, quantity: number): void {
    const existingItem = this.items.find(
      (item) => item.productId === product.id,
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        productId: product.id,
        product,
        quantity,
        price: product.price,
        addedAt: new Date(),
      });
    }
  }

  // TypeScript error: missing return statement
  removeItem(productId: number): boolean {
    const index = this.items.findIndex((item) => item.productId === productId);

    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    // Missing return for not found case
  }

  // ESLint error: unused variable
  getTotal(): number {
    const itemCount = this.items.length;
    const timestamp = Date.now();
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  }

  // ESLint error: prefer-const
  updateQuantity(productId: number, quantity: number): void {
    let item = this.items.find((i) => i.productId === productId);

    if (item) {
      item.quantity = quantity;
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clear(): void {
    this.items = [];
  }

  // TypeScript error: type mismatch
  getItemCount(): string {
    const count: number = this.items.length.toString();
    return count; // Wrong return type
  }

  // Generic constraint
  filterItems<T extends CartItem>(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate) as T[];
  }
}

export const cartController = new CartController();
