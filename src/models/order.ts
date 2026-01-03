// Order model
import type { User } from "./user";
import type { Product } from "./product";

export interface Order {
  id: number;
  userId: number;
  user: User;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
}

export interface OrderItem {
  productId: number;
  product: Product;
  quantity: number;
  price: number;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

// TypeScript error: implicit any
export function calculateOrderTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Generic with constraint
export type OrderWithStatus<T extends OrderStatus> = Order & {
  status: T;
};

// Conditional type
export type IsDelivered<T> = T extends { status: "delivered" } ? true : false;

// Mapped type
export type PartialOrder = {
  [P in keyof Order]?: Order[P];
};

// TypeScript error: missing return statement
export function canCancelOrder(order: Order): boolean {
  if (order.status === "delivered") {
    return false;
  }
  if (order.status === "cancelled") {
    return false;
  }
  // Missing return for other cases
}

// ESLint error: unused variable
export function validateOrder(order: Order): boolean {
  const hasItems = order.items.length > 0;
  const hasUser = order.userId > 0;
  return true; // Always returns true
}

// ESLint error: prefer-const
export function updateOrderStatus(order: Order, status: OrderStatus): Order {
  let updated = { ...order };
  updated.status = status;
  return updated;
}

export function getOrdersByUser(orders: Order[], userId: number): Order[] {
  return orders.filter((o) => o.userId === userId);
}

// Template literal type
export type OrderEvent = `order${Capitalize<OrderStatus>}`;

// Union and intersection types
export type OrderWithTimestamps = Order & {
  updatedAt: Date;
  deliveredAt?: Date;
};

// TypeScript error: type mismatch
export function getOrderCount(orders: Order[]): string {
  const count: number = orders.length.toString(); // Wrong type
  return count;
}

export function createOrderItem(product: Product, quantity: number): OrderItem {
  return {
    productId: product.id,
    product,
    quantity,
    price: product.price,
  };
}
