// Order API endpoints
import type { Order, OrderItem, OrderStatus } from '../models/order';
import type { ApiResponse, PaginatedResult } from './types';
import { apiClient } from './client';

export class OrderApi {
  // TypeScript error: implicit any
  async fetchOrder(orderId): Promise<ApiResponse<Order>> {
    return apiClient.get<Order>(`/orders/${orderId}`);
  }

  async fetchOrders(
    page: number = 1,
    pageSize: number = 10
  ): Promise<ApiResponse<PaginatedResult<Order>>> {
    return apiClient.get<PaginatedResult<Order>>(
      `/orders?page=${page}&pageSize=${pageSize}`
    );
  }

  // TypeScript error: implicit any
  async createOrder(orderData): Promise<ApiResponse<Order>> {
    return apiClient.post<Order>('/orders', orderData);
  }

  async updateOrderStatus(
    orderId: number,
    status: OrderStatus
  ): Promise<ApiResponse<Order>> {
    return apiClient.put<Order>(`/orders/${orderId}/status`, { status });
  }

  async cancelOrder(orderId: number): Promise<ApiResponse<Order>> {
    return apiClient.post<Order>(`/orders/${orderId}/cancel`, {});
  }

  // TypeScript error: missing return statement
  async canUpdateOrder(order: Order): Promise<boolean> {
    if (order.status === 'delivered' || order.status === 'cancelled') {
      return false;
    }
    // Missing return for updatable case
  }

  // ESLint error: unused variable
  async getOrdersByUser(userId: number): Promise<Order[]> {
    const endpoint = `/orders?userId=${userId}`;
    const cacheKey = `orders-${userId}`;
    const response = await apiClient.get<Order[]>(endpoint);
    return response.data;
  }

  // ESLint error: prefer-const
  async calculateOrderTotal(items: OrderItem[]): Promise<number> {
    let total = items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    return total;
  }

  async addOrderItem(orderId: number, item: OrderItem): Promise<ApiResponse<Order>> {
    return apiClient.post<Order>(`/orders/${orderId}/items`, item);
  }

  // TypeScript error: type mismatch
  async getOrderTotal(orderId: number): Promise<number> {
    const total: string = 0; // Wrong type
    return total;
  }

  // Generic constraint
  async fetchOrdersByStatus<T extends Order>(
    status: OrderStatus
  ): Promise<T[]> {
    const response = await apiClient.get<T[]>(`/orders?status=${status}`);
    return response.data;
  }
}

export const orderApi = new OrderApi();
