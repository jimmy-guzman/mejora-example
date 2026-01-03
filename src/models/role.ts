// Role model
import type { Permission } from "./permission";

export interface Role {
  id: number;
  name: string;
  permissions: Permission[];
  level: number;
}

export type RoleType = "admin" | "user" | "moderator" | "guest";

export interface RoleHierarchy {
  role: Role;
  parent?: Role;
  children: Role[];
}

// ESLint error: unused variable
export function createRole(name: string, permissions: Permission[]): Role {
  const timestamp = Date.now();
  return {
    id: Math.floor(Math.random() * 1000),
    name,
    permissions,
    level: 1,
  };
}

// TypeScript error: type mismatch
export function getRoleLevel(role: Role): string {
  const level: number = "high"; // Wrong type assignment
  return level;
}

// Generic constraint
export function hasPermissionInRole<T extends Role>(
  role: T,
  permissionName: string,
): boolean {
  return role.permissions.some((p) => p.name === permissionName);
}

// Conditional type
export type RolePermissions<T> = T extends Role ? T["permissions"] : never;

// Mapped type
export type PartialRole = {
  [P in keyof Role]?: Role[P];
};

export function isHigherRole(role1: Role, role2: Role): boolean {
  return role1.level > role2.level;
}

// TypeScript error: implicit any
export function combineRoles(roles) {
  return roles.reduce((acc, role) => {
    return [...acc, ...role.permissions];
  }, []);
}

// ESLint error: prefer-const
export function updateRoleLevel(role: Role, newLevel: number): Role {
  let updated = { ...role };
  updated.level = newLevel;
  return updated;
}

export type RoleName = Role["name"];
export type RolePermissionList = Role["permissions"];
