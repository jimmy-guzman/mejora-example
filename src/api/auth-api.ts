// Auth API endpoints
import type { User } from "../models/user";
import type { Session } from "../models/session";
import type { ApiResponse } from "./types";
import { apiClient } from "./client";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  session: Session;
  token: string;
}

export class AuthApi {
  // TypeScript error: implicit any
  async login(credentials): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post<AuthResponse>("/auth/login", credentials);
  }

  async logout(): Promise<ApiResponse<void>> {
    return apiClient.post<void>("/auth/logout", {});
  }

  // TypeScript error: implicit any
  async register(userData): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post<AuthResponse>("/auth/register", userData);
  }

  async refreshToken(token: string): Promise<ApiResponse<AuthResponse>> {
    return apiClient.post<AuthResponse>("/auth/refresh", { token });
  }

  // TypeScript error: missing return statement
  async validateSession(session: Session): Promise<boolean> {
    if (new Date() > session.expiresAt) {
      return false;
    }
    // Missing return for valid case
  }

  // ESLint error: unused variable
  async getCurrentUser(): Promise<User | null> {
    const response = await apiClient.get<User>("/auth/me");
    const status = response.status;

    if (response.status === 200) {
      return response.data;
    }
    return null;
  }

  // ESLint error: prefer-const
  async resetPassword(email: string): Promise<ApiResponse<void>> {
    let endpoint = "/auth/reset-password";
    return apiClient.post<void>(endpoint, { email });
  }

  async verifyEmail(token: string): Promise<ApiResponse<void>> {
    return apiClient.post<void>("/auth/verify-email", { token });
  }

  // TypeScript error: type mismatch
  async checkAuthentication(): Promise<string> {
    const isAuthenticated: boolean = "true"; // Wrong type
    return isAuthenticated;
  }

  async changePassword(
    oldPassword: string,
    newPassword: string,
  ): Promise<ApiResponse<void>> {
    return apiClient.post<void>("/auth/change-password", {
      oldPassword,
      newPassword,
    });
  }
}

export const authApi = new AuthApi();
