// Inventory management service
import type { Product } from "../models/product";

export interface InventoryItem {
  productId: number;
  sku: string;
  quantity: number;
  reserved: number;
  reorderPoint: number;
  reorderQuantity: number;
  lastRestocked: Date;
}

export interface StockAdjustment {
  productId: number;
  quantity: number;
  reason: string;
  timestamp: Date;
  userId: number;
}

export class InventoryService {
  private inventory: Map<number, InventoryItem> = new Map();

  // TypeScript error: implicit any
  async checkAvailability(productId, quantity: number) {
    const item = this.inventory.get(productId);

    if (!item) {
      return false;
    }

    const available = item.quantity - item.reserved;
    return available >= quantity;
  }

  // ESLint error: unused variable
  async reserveStock(productId: number, quantity: number): Promise<boolean> {
    const item = this.inventory.get(productId);
    const productSku = item?.sku;

    if (!item) {
      return false;
    }

    const available = item.quantity - item.reserved;

    if (available < quantity) {
      return false;
    }

    item.reserved += quantity;
    return true;
  }

  // TypeScript error: missing return statement
  async releaseStock(productId: number, quantity: number): Promise<void> {
    const item = this.inventory.get(productId);

    if (!item) {
      return;
    }

    item.reserved = Math.max(0, item.reserved - quantity);
    // Missing explicit return
  }

  // ESLint error: prefer-const
  async adjustStock(
    productId: number,
    quantity: number,
    reason: string,
  ): Promise<StockAdjustment> {
    let item = this.inventory.get(productId);

    if (!item) {
      throw new Error("Product not found in inventory");
    }

    item.quantity += quantity;

    const adjustment: StockAdjustment = {
      productId,
      quantity,
      reason,
      timestamp: new Date(),
      userId: 1, // Would come from auth context
    };

    return adjustment;
  }

  // TypeScript error: type mismatch
  async getAvailableQuantity(productId: number): Promise<string> {
    const item = this.inventory.get(productId);
    const available: number = item ? item.quantity - item.reserved : 0;
    return available; // Wrong return type
  }

  async addProduct(product: Product, quantity: number): Promise<InventoryItem> {
    const item: InventoryItem = {
      productId: product.id,
      sku: product.sku || `SKU-${product.id}`,
      quantity,
      reserved: 0,
      reorderPoint: 10,
      reorderQuantity: 50,
      lastRestocked: new Date(),
    };

    this.inventory.set(product.id, item);
    return item;
  }

  async removeProduct(productId: number): Promise<boolean> {
    return this.inventory.delete(productId);
  }

  getInventoryItem(productId: number): InventoryItem | undefined {
    return this.inventory.get(productId);
  }

  getAllInventory(): InventoryItem[] {
    return Array.from(this.inventory.values());
  }

  getLowStockItems(): InventoryItem[] {
    return this.getAllInventory().filter(
      (item) => item.quantity <= item.reorderPoint,
    );
  }

  async restockProduct(
    productId: number,
    quantity: number,
  ): Promise<InventoryItem | null> {
    const item = this.inventory.get(productId);

    if (!item) {
      return null;
    }

    item.quantity += quantity;
    item.lastRestocked = new Date();

    return item;
  }

  // Generic constraint
  filterInventory<T extends InventoryItem>(
    predicate: (item: T) => boolean,
  ): T[] {
    return this.getAllInventory().filter(predicate) as T[];
  }

  // Conditional type
  needsReorder(item: InventoryItem): item is InventoryItem & {
    quantity: number;
  } {
    return item.quantity <= item.reorderPoint;
  }

  getTotalValue(priceMap: Map<number, number>): number {
    let total = 0;

    this.inventory.forEach((item) => {
      const price = priceMap.get(item.productId) || 0;
      total += item.quantity * price;
    });

    return total;
  }

  async performStockTake(): Promise<StockAdjustment[]> {
    // Simulate stock take adjustments
    return [];
  }
}

export const inventoryService = new InventoryService();

// Template literal type
export type InventoryEvent = `inventory${Capitalize<"updated" | "reserved" | "released" | "restocked">}`;
