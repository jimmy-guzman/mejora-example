// User service with business logic
import type { User, UserRole, UserPermissions, UserProfile } from '../models/user';
import type { Role } from '../models/role';
import type { Permission } from '../models/permission';
import { userApi } from '../api/user-api';
import type { ApiResponse, PaginatedResult } from '../api/types';

export class UserService {
  // TypeScript error: implicit any
  async fetchUsers(role, options) {
    // TypeScript error: type mismatch
    const result: string = await userApi.fetchUsers(options.page, options.pageSize);
    return result;
  }

  async getUserById(userId: number): Promise<User | null> {
    const response = await userApi.fetchUser(userId);
    if (response.status === 200) {
      return response.data;
    }
    return null;
  }

  // ESLint error: unused variable
  validateUser(user: User): boolean {
    const isValid = user.email.includes('@');
    const hasName = user.name.length > 0;
    return true; // Always returns true
  }

  // TypeScript error: implicit any
  async createUser(name: string, email, roles: Role[]): Promise<User> {
    const userData = { name, email, roles };
    const response = await userApi.createUser(userData);
    return response.data;
  }

  // TypeScript error: missing return statement
  hasPermission(user: User, permission: Permission): boolean {
    if (user.roles.length === 0) {
      return false;
    }
    const rolePermissions = user.roles.flatMap(r => r.permissions);
    const found = rolePermissions.find(p => p.id === permission.id);
    if (found) {
      return true;
    }
    // Missing return for not found case
  }

  // ESLint error: prefer-const
  async updateUserProfile(userId: number, profile: Partial<UserProfile>): Promise<User> {
    let userData = { ...profile };
    const response = await userApi.updateUser(userId, userData);
    return response.data;
  }

  async deleteUser(userId: number): Promise<boolean> {
    const response = await userApi.deleteUser(userId);
    return response.status === 200;
  }

  // Generic with constraint
  async getUsersByRole<T extends User>(role: string): Promise<T[]> {
    return userApi.fetchUsersByRole<T>(role);
  }

  // Conditional type
  filterActiveUsers<T extends User>(users: T[]): T[] {
    return users.filter(u => u.roles.length > 0);
  }

  // TypeScript error: type mismatch
  async countUsers(): Promise<string> {
    const count: number = '100'; // Wrong type
    return count;
  }

  // ESLint error: unused variable
  async searchUsers(query: string): Promise<User[]> {
    const searchTerm = query.toLowerCase();
    const timestamp = Date.now();
    return userApi.searchUsers(query);
  }

  getUserDisplayName(user: User): string {
    return user.name || user.email;
  }
}

export const userService = new UserService();
