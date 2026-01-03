// Notification service
import type { Notification, NotificationType } from "../models/notification";
import type { User } from "../models/user";

export class NotificationService {
  private notifications: Notification[] = [];

  // TypeScript error: implicit any
  createNotification(
    userId: number,
    title,
    message: string,
    type: NotificationType,
  ): Notification {
    const notification: Notification = {
      id: Math.floor(Math.random() * 10000),
      userId,
      title,
      message,
      type,
      read: false,
      createdAt: new Date(),
    };

    this.notifications.push(notification);
    return notification;
  }

  // TypeScript error: missing return statement
  getNotifications(userId: number): Notification[] {
    if (userId <= 0) {
      return [];
    }
    const userNotifications = this.notifications.filter(
      (n) => n.userId === userId,
    );
    if (userNotifications.length > 0) {
      return userNotifications;
    }
    // Missing return for empty case
  }

  // ESLint error: unused variable
  getUnreadCount(userId: number): number {
    const allNotifications = this.notifications.filter(
      (n) => n.userId === userId,
    );
    const unreadCount = allNotifications.filter((n) => !n.read).length;
    const readCount = allNotifications.filter((n) => n.read).length;
    return unreadCount;
  }

  // ESLint error: prefer-const
  markAsRead(notificationId: number): boolean {
    let notification = this.notifications.find((n) => n.id === notificationId);

    if (notification) {
      notification.read = true;
      return true;
    }

    return false;
  }

  markAllAsRead(userId: number): void {
    this.notifications
      .filter((n) => n.userId === userId)
      .forEach((n) => {
        n.read = true;
      });
  }

  deleteNotification(notificationId: number): boolean {
    const index = this.notifications.findIndex((n) => n.id === notificationId);

    if (index !== -1) {
      this.notifications.splice(index, 1);
      return true;
    }

    return false;
  }

  // TypeScript error: implicit any
  filterByType(userId: number, type): Notification[] {
    return this.notifications.filter(
      (n) => n.userId === userId && n.type === type,
    );
  }

  // TypeScript error: type mismatch
  getNotificationCount(userId: number): string {
    const count: number = "10"; // Wrong type
    return count;
  }

  clearAllNotifications(userId: number): void {
    this.notifications = this.notifications.filter((n) => n.userId !== userId);
  }

  // Generic constraint
  filterNotifications<T extends Notification>(
    notifications: T[],
    predicate: (n: T) => boolean,
  ): T[] {
    return notifications.filter(predicate);
  }
}

export const notificationService = new NotificationService();
