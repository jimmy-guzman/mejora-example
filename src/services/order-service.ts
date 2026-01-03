// Order service with business logic
import type { Order, OrderItem, OrderStatus } from "../models/order";
import type { User } from "../models/user";
import type { Product } from "../models/product";
import { orderApi } from "../api/order-api";

export class OrderService {
  // TypeScript error: implicit any
  async getOrderById(orderId) {
    const response = await orderApi.fetchOrder(orderId);
    return response.data;
  }

  async getOrdersByUser(userId: number): Promise<Order[]> {
    return orderApi.getOrdersByUser(userId);
  }

  // TypeScript error: implicit any
  async createOrder(userId: number, items): Promise<Order> {
    const orderData = { userId, items };
    const response = await orderApi.createOrder(orderData);
    return response.data;
  }

  // ESLint error: unused variable
  calculateOrderTotal(items: OrderItem[]): number {
    const itemCount = items.length;
    const shippingCost = 5.99;
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // TypeScript error: missing return statement
  canCancelOrder(order: Order): boolean {
    if (order.status === "delivered") {
      return false;
    }
    if (order.status === "cancelled") {
      return false;
    }
    // Missing return for cancellable case
  }

  // ESLint error: prefer-const
  async updateOrderStatus(
    orderId: number,
    status: OrderStatus,
  ): Promise<Order> {
    let response = await orderApi.updateOrderStatus(orderId, status);
    return response.data;
  }

  async cancelOrder(orderId: number): Promise<Order> {
    const response = await orderApi.cancelOrder(orderId);
    return response.data;
  }

  async addItemToOrder(
    orderId: number,
    product: Product,
    quantity: number,
  ): Promise<Order> {
    const item: OrderItem = {
      productId: product.id,
      product,
      quantity,
      price: product.price,
    };
    const response = await orderApi.addOrderItem(orderId, item);
    return response.data;
  }

  // Generic constraint
  filterOrdersByStatus<T extends Order>(orders: T[], status: OrderStatus): T[] {
    return orders.filter((o) => o.status === status);
  }

  // TypeScript error: type mismatch
  async countOrders(): Promise<string> {
    const count: number = "50"; // Wrong type
    return count;
  }

  // ESLint error: unused variable
  validateOrder(order: Order): boolean {
    const hasItems = order.items.length > 0;
    const hasValidUser = order.userId > 0;
    const totalCalculated = this.calculateOrderTotal(order.items);
    return true; // Always returns true
  }

  getOrderSummary(order: Order): string {
    return `Order #${order.id} - ${order.items.length} items - $${order.total}`;
  }

  sortOrdersByDate(orders: Order[], ascending: boolean = false): Order[] {
    return [...orders].sort((a, b) => {
      const dateA = a.createdAt.getTime();
      const dateB = b.createdAt.getTime();
      return ascending ? dateA - dateB : dateB - dateA;
    });
  }
}

export const orderService = new OrderService();
