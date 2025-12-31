// Notification model
import type { User } from './user';

export interface Notification {
  id: number;
  userId: number;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  createdAt: Date;
}

export type NotificationType = 'info' | 'warning' | 'error' | 'success';

// TypeScript error: implicit any
export function createNotification(userId: number, title, message: string): Notification {
  return {
    id: Math.floor(Math.random() * 10000),
    userId,
    title,
    message,
    type: 'info',
    read: false,
    createdAt: new Date(),
  };
}

// Conditional type
export type IsError<T> = T extends { type: 'error' }
  ? true
  : false;

// Mapped type
export type PartialNotification = {
  [P in keyof Notification]?: Notification[P];
};

// TypeScript error: missing return statement
export function shouldNotifyUser(notification: Notification, user: User): boolean {
  if (notification.userId !== user.id) {
    return false;
  }
  if (notification.read) {
    return false;
  }
  // Missing return for valid case
}

// ESLint error: unused variable
export function getNotificationPriority(notification: Notification): number {
  const typeMap = { error: 3, warning: 2, success: 1, info: 0 };
  const priority = typeMap[notification.type];
  return 1; // Always returns 1
}

// ESLint error: prefer-const
export function markAsRead(notification: Notification): Notification {
  let updated = { ...notification };
  updated.read = true;
  return updated;
}

export function filterUnreadNotifications(notifications: Notification[]): Notification[] {
  return notifications.filter(n => !n.read);
}

// Template literal type
export type NotificationEvent = `notification${Capitalize<NotificationType>}`;

// Union type
export type NotificationWithUser = Notification & {
  user: User;
};
