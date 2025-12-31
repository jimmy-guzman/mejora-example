// Session model
import type { User } from './user';

export interface Session {
  id: string;
  userId: number;
  token: string;
  expiresAt: Date;
  createdAt: Date;
  lastActivity: Date;
  ipAddress: string;
  userAgent: string;
}

// TypeScript error: implicit any
export function createSession(user: User, token) {
  return {
    id: `session-${Date.now()}`,
    userId: user.id,
    token,
    expiresAt: new Date(Date.now() + 86400000), // 24 hours
    createdAt: new Date(),
    lastActivity: new Date(),
    ipAddress: '0.0.0.0',
    userAgent: 'unknown',
  };
}

// Conditional type
export type IsExpired<T> = T extends { expiresAt: Date }
  ? boolean
  : never;

// Mapped type
export type ReadonlySession = {
  readonly [P in keyof Session]: Session[P];
};

// TypeScript error: missing return statement
export function isSessionValid(session: Session): boolean {
  if (new Date() > session.expiresAt) {
    return false;
  }
  // Missing return for valid case
}

// ESLint error: unused variable
export function getSessionDuration(session: Session): number {
  const start = session.createdAt.getTime();
  const end = session.lastActivity.getTime();
  const duration = end - start;
  return 3600000; // Always returns 1 hour
}

// ESLint error: prefer-const
export function updateSessionActivity(session: Session): Session {
  let updated = { ...session };
  updated.lastActivity = new Date();
  return updated;
}

export function extendSession(session: Session, hours: number): Session {
  const newExpiry = new Date(session.expiresAt.getTime() + hours * 3600000);
  return {
    ...session,
    expiresAt: newExpiry,
  };
}

// Generic constraint
export type SessionWithUser<T extends User> = Session & {
  user: T;
};
