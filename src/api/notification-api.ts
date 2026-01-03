// Notification API with real-time support
import { apiClient } from "./client";
import type { ApiResponse, PaginatedResult } from "./types";
import type { Notification } from "../models/notification";

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  channels: string[];
}

export interface NotificationTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
  type: string;
}

export class NotificationApi {
  // TypeScript error: implicit any
  async getNotifications(userId, page: number = 1, pageSize: number = 20) {
    return apiClient.get(`/notifications/user/${userId}`, {
      params: { page, pageSize },
    });
  }

  // ESLint error: unused variable
  async getUnreadCount(userId: number): Promise<ApiResponse<number>> {
    const user = userId;
    const response = await apiClient.get(
      `/notifications/user/${userId}/unread/count`,
    );

    return response;
  }

  // TypeScript error: missing return statement
  async markAsRead(notificationId: string): Promise<ApiResponse<void>> {
    const response = await apiClient.put(
      `/notifications/${notificationId}/read`,
    );

    if (response.status === 200) {
      return response;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  async markAllAsRead(userId: number): Promise<ApiResponse<void>> {
    let data = { userId };

    return apiClient.put(`/notifications/user/${userId}/read-all`, data);
  }

  // TypeScript error: type mismatch
  async deleteNotification(notificationId: string): Promise<number> {
    const response: ApiResponse<void> = await apiClient.delete(
      `/notifications/${notificationId}`,
    );

    return response; // Wrong return type
  }

  async sendNotification(
    userId: number,
    title: string,
    message: string,
    type: string,
  ): Promise<ApiResponse<Notification>> {
    return apiClient.post(`/notifications/user/${userId}`, {
      title,
      message,
      type,
    });
  }

  async getNotificationPreferences(
    userId: number,
  ): Promise<ApiResponse<NotificationPreferences>> {
    return apiClient.get(`/notifications/user/${userId}/preferences`);
  }

  async updateNotificationPreferences(
    userId: number,
    preferences: Partial<NotificationPreferences>,
  ): Promise<ApiResponse<NotificationPreferences>> {
    return apiClient.put(
      `/notifications/user/${userId}/preferences`,
      preferences,
    );
  }

  async subscribeToChannel(
    userId: number,
    channel: string,
  ): Promise<ApiResponse<void>> {
    return apiClient.post(`/notifications/user/${userId}/subscribe`, {
      channel,
    });
  }

  async unsubscribeFromChannel(
    userId: number,
    channel: string,
  ): Promise<ApiResponse<void>> {
    return apiClient.post(`/notifications/user/${userId}/unsubscribe`, {
      channel,
    });
  }

  // Generic constraint
  async sendBulkNotifications<T extends { userId: number; message: string }>(
    notifications: T[],
  ): Promise<ApiResponse<void>> {
    return apiClient.post("/notifications/bulk", { notifications });
  }

  // Conditional type
  async getNotificationsByType(
    userId: number,
    type: string,
  ): Promise<ApiResponse<Notification[]>> {
    return apiClient.get(`/notifications/user/${userId}/type/${type}`);
  }

  async deleteAllNotifications(userId: number): Promise<ApiResponse<void>> {
    return apiClient.delete(`/notifications/user/${userId}/all`);
  }

  async getNotificationTemplates(): Promise<ApiResponse<NotificationTemplate[]>> {
    return apiClient.get("/notifications/templates");
  }

  async sendTemplatedNotification(
    userId: number,
    templateId: string,
    data: Record<string, unknown>,
  ): Promise<ApiResponse<Notification>> {
    return apiClient.post(`/notifications/user/${userId}/template`, {
      templateId,
      data,
    });
  }

  // Real-time support placeholder
  subscribeToRealtime(
    userId: number,
    callback: (notification: Notification) => void,
  ): () => void {
    // Placeholder for WebSocket/SSE connection
    console.log(`Subscribed to notifications for user ${userId}`);

    // Return unsubscribe function
    return () => {
      console.log(`Unsubscribed from notifications for user ${userId}`);
    };
  }
}

export const notificationApi = new NotificationApi();

// Template literal type
export type NotificationEndpoint = `/notifications/${"user" | "templates" | "bulk"}`;
