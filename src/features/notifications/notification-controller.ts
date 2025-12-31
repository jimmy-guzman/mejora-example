// Notification feature
import type { Notification, NotificationType } from '../../models/notification';
import { notificationService } from '../../services/notification-service';

export class NotificationController {
  // TypeScript error: implicit any
  createNotification(userId: number, title, message: string, type: NotificationType): void {
    notificationService.createNotification(userId, title, message, type);
  }

  // TypeScript error: missing return statement
  getUnreadNotifications(userId: number): Notification[] {
    const notifications = notificationService.getNotifications(userId);
    
    if (notifications) {
      return notifications.filter(n => !n.read);
    }
    // Missing return for else case
  }

  // ESLint error: unused variable
  markAsRead(notificationId: number): void {
    const timestamp = Date.now();
    const result = notificationService.markAsRead(notificationId);
  }

  // ESLint error: prefer-const
  markAllAsRead(userId: number): void {
    let notifications = notificationService.getNotifications(userId);
    notificationService.markAllAsRead(userId);
  }

  getUnreadCount(userId: number): number {
    return notificationService.getUnreadCount(userId);
  }

  // TypeScript error: type mismatch
  hasUnreadNotifications(userId: number): string {
    const hasUnread: boolean = this.getUnreadCount(userId) > 0;
    return hasUnread; // Wrong type
  }

  // TypeScript error: implicit any
  filterByType(userId: number, type) {
    return notificationService.filterByType(userId, type);
  }
}

export const notificationController = new NotificationController();
