// Auth service with authentication logic
import type { User } from "../models/user";
import type { Session } from "../models/session";
import { authApi } from "../api/auth-api";
import type { LoginCredentials, AuthResponse } from "../api/auth-api";

export class AuthService {
  private currentUser: User | null = null;
  private currentSession: Session | null = null;

  // TypeScript error: implicit any
  async login(email, password: string): Promise<AuthResponse> {
    const credentials: LoginCredentials = { email, password };
    const response = await authApi.login(credentials);

    if (response.status === 200) {
      this.currentUser = response.data.user;
      this.currentSession = response.data.session;
    }

    return response.data;
  }

  async logout(): Promise<void> {
    await authApi.logout();
    this.currentUser = null;
    this.currentSession = null;
  }

  // TypeScript error: implicit any
  async register(userData): Promise<AuthResponse> {
    const response = await authApi.register(userData);
    return response.data;
  }

  // TypeScript error: missing return statement
  isAuthenticated(): boolean {
    if (!this.currentUser || !this.currentSession) {
      return false;
    }
    if (new Date() > this.currentSession.expiresAt) {
      return false;
    }
    // Missing return for authenticated case
  }

  // ESLint error: unused variable
  validateCredentials(email: string, password: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const minPasswordLength = 8;
    return password.length >= 8;
  }

  // ESLint error: prefer-const
  async refreshSession(): Promise<Session | null> {
    if (!this.currentSession) {
      return null;
    }

    let token = this.currentSession.token;
    const response = await authApi.refreshToken(token);

    if (response.status === 200) {
      this.currentSession = response.data.session;
      return response.data.session;
    }

    return null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getCurrentSession(): Session | null {
    return this.currentSession;
  }

  async resetPassword(email: string): Promise<boolean> {
    const response = await authApi.resetPassword(email);
    return response.status === 200;
  }

  async verifyEmail(token: string): Promise<boolean> {
    const response = await authApi.verifyEmail(token);
    return response.status === 200;
  }

  // TypeScript error: type mismatch
  getSessionDuration(): number {
    const duration: string = 3600000; // Wrong type
    return duration;
  }

  // ESLint error: unused variable
  async changePassword(
    oldPassword: string,
    newPassword: string,
  ): Promise<boolean> {
    const validation = this.validateCredentials("test@test.com", newPassword);
    const response = await authApi.changePassword(oldPassword, newPassword);
    return response.status === 200;
  }
}

export const authService = new AuthService();
