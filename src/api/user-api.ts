// User API endpoints
import type { User, UserProfile } from '../models/user';
import type { ApiResponse, PaginatedResult } from './types';
import { apiClient } from './client';

export class UserApi {
  // TypeScript error: implicit any
  async fetchUser(userId): Promise<ApiResponse<User>> {
    return apiClient.get<User>(`/users/${userId}`);
  }

  async fetchUsers(
    page: number = 1,
    pageSize: number = 10
  ): Promise<ApiResponse<PaginatedResult<User>>> {
    return apiClient.get<PaginatedResult<User>>(
      `/users?page=${page}&pageSize=${pageSize}`
    );
  }

  // TypeScript error: implicit any
  async createUser(userData): Promise<ApiResponse<User>> {
    return apiClient.post<User>('/users', userData);
  }

  async updateUser(userId: number, userData: Partial<User>): Promise<ApiResponse<User>> {
    return apiClient.put<User>(`/users/${userId}`, userData);
  }

  async deleteUser(userId: number): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/users/${userId}`);
  }

  // TypeScript error: missing return statement
  async validateUser(user: User): Promise<boolean> {
    if (!user.email || !user.name) {
      return false;
    }
    // Missing return for valid case
  }

  // ESLint error: unused variable
  async getUserProfile(userId: number): Promise<UserProfile | null> {
    const response = await this.fetchUser(userId);
    const status = response.status;
    
    if (response.status === 200) {
      return response.data as UserProfile;
    }
    return null;
  }

  // ESLint error: prefer-const
  async searchUsers(query: string): Promise<User[]> {
    let endpoint = `/users/search?q=${query}`;
    const response = await apiClient.get<User[]>(endpoint);
    return response.data;
  }

  // Generic constraint
  async fetchUsersByRole<T extends User>(role: string): Promise<T[]> {
    const response = await apiClient.get<T[]>(`/users?role=${role}`);
    return response.data;
  }

  // TypeScript error: type mismatch
  async getUserCount(): Promise<string> {
    const count: number = '0'; // Wrong type
    return count;
  }
}

export const userApi = new UserApi();
