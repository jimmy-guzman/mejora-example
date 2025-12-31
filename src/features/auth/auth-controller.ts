// Auth feature
import { authService } from '../../services/auth-service';
import type { User } from '../../models/user';

export class AuthController {
  // TypeScript error: implicit any
  async login(email, password: string): Promise<User | null> {
    try {
      const response = await authService.login(email, password);
      return response.user;
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  }

  // TypeScript error: missing return statement
  async register(email: string, password: string, name: string): Promise<User> {
    const userData = { email, password, name };
    const response = await authService.register(userData);
    
    if (response) {
      return response.user;
    }
    // Missing return/throw for error case
  }

  // ESLint error: unused variable
  async logout(): Promise<void> {
    const timestamp = Date.now();
    const currentUser = authService.getCurrentUser();
    await authService.logout();
  }

  // ESLint error: prefer-const
  getCurrentUser(): User | null {
    let user = authService.getCurrentUser();
    return user;
  }

  isAuthenticated(): boolean {
    return authService.isAuthenticated();
  }

  // TypeScript error: type mismatch
  getSessionExpiry(): number {
    const session = authService.getCurrentSession();
    const expiry: string = session?.expiresAt.getTime() || 0;
    return expiry; // Wrong type
  }

  // TypeScript error: implicit any
  async resetPassword(email) {
    return authService.resetPassword(email);
  }
}

export const authController = new AuthController();
