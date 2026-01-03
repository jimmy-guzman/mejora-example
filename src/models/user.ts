// User model with cross-dependencies
import type { Role } from "./role";
import type { Permission } from "./permission";

export interface User {
  id: number;
  name: string;
  email: string;
  roles: Role[];
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  bio: string;
  avatar: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: "light" | "dark";
  language: string;
  notifications: boolean;
}

// TypeScript error: missing return statement
export function hasPermission(user: User, permission: Permission): boolean {
  if (user.roles.length === 0) {
    return false;
  }
  // Missing return for other cases
}

// TypeScript error: implicit any
export function getUserDisplayName(user) {
  return user.name || user.email;
}

// ESLint error: unused variable
export function validateUserEmail(user: User): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(user.email);
  return true; // Always returns true, isValid is unused
}

// Generic type with constraints
export type UserWithRole<T extends Role> = User & {
  primaryRole: T;
};

// Conditional type
export type IsAdmin<T> = T extends { roles: Array<infer R> }
  ? R extends { name: "admin" }
    ? true
    : false
  : false;

// Mapped type
export type ReadonlyUser = {
  readonly [P in keyof User]: User[P];
};

// Template literal type
export type UserEventName = `user${Capitalize<string>}`;

export function createUser(name: string, email: string, roles: Role[]): User {
  return {
    id: Math.floor(Math.random() * 10000),
    name,
    email,
    roles,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// ESLint error: prefer-const
export function mergeUserPreferences(
  user: User,
  prefs: Partial<UserPreferences>,
): UserProfile {
  let defaultPrefs = {
    theme: "light" as const,
    language: "en",
    notifications: true,
  };

  return {
    ...user,
    bio: "",
    avatar: "",
    preferences: { ...defaultPrefs, ...prefs },
  };
}

// Type intersection and union
export type UserOrGuest =
  | (User & { authenticated: true })
  | { authenticated: false };

export function isAuthenticatedUser(
  user: UserOrGuest,
): user is User & { authenticated: true } {
  return user.authenticated === true;
}
