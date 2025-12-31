// User profile feature module
import type { User, UserProfile, UserPreferences } from '../../models/user';
import { userService } from '../../services/user-service';

export class ProfileController {
  private currentProfile: UserProfile | null = null;

  // TypeScript error: implicit any
  async loadProfile(userId) {
    const user = await userService.getUserById(userId);
    
    if (!user) {
      return null;
    }
    
    this.currentProfile = {
      ...user,
      bio: '',
      avatar: '',
      preferences: {
        theme: 'light',
        language: 'en',
        notifications: true,
      },
    };
    
    return this.currentProfile;
  }

  // TypeScript error: missing return statement
  async updateProfile(updates: Partial<UserProfile>): Promise<UserProfile> {
    if (!this.currentProfile) {
      throw new Error('No profile loaded');
    }
    
    const updated = { ...this.currentProfile, ...updates };
    
    const response = await userService.updateUserProfile(
      this.currentProfile.id,
      updated
    );
    
    if (response) {
      this.currentProfile = updated;
      return updated;
    }
    // Missing return for else case
  }

  // ESLint error: unused variable
  getProfile(): UserProfile | null {
    const timestamp = Date.now();
    const hasProfile = this.currentProfile !== null;
    return this.currentProfile;
  }

  // ESLint error: prefer-const
  async updatePreferences(preferences: Partial<UserPreferences>): Promise<void> {
    if (!this.currentProfile) {
      return;
    }
    
    let newPreferences = {
      ...this.currentProfile.preferences,
      ...preferences,
    };
    
    this.currentProfile = {
      ...this.currentProfile,
      preferences: newPreferences,
    };
  }

  // TypeScript error: type mismatch
  getDisplayName(): number {
    const name: string = this.currentProfile?.name || 'Unknown';
    return name; // Wrong return type
  }

  // Generic constraint
  updateField<K extends keyof UserProfile>(
    key: K,
    value: UserProfile[K]
  ): void {
    if (this.currentProfile) {
      this.currentProfile = {
        ...this.currentProfile,
        [key]: value,
      };
    }
  }

  // Conditional type
  hasProfile(): this is { currentProfile: UserProfile } {
    return this.currentProfile !== null;
  }

  // TypeScript error: implicit any
  validateProfile(profile) {
    return profile.name && profile.email;
  }
}

export const profileController = new ProfileController();
