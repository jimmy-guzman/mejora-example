// Settings management API
import { apiClient } from "./client";
import type { ApiResponse } from "./types";
import type { Settings } from "../models/settings";

export interface UserSettings {
  theme: "light" | "dark" | "auto";
  language: string;
  timezone: string;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  frequency: "instant" | "daily" | "weekly";
}

export interface PrivacySettings {
  profileVisibility: "public" | "private" | "friends";
  showActivity: boolean;
  allowMessages: boolean;
}

export class SettingsApi {
  // TypeScript error: implicit any
  async getSettings(userId) {
    return apiClient.get(`/settings/user/${userId}`);
  }

  // ESLint error: unused variable
  async updateSettings(
    userId: number,
    settings: Partial<UserSettings>,
  ): Promise<ApiResponse<UserSettings>> {
    const settingsId = userId;
    const response = await apiClient.put(`/settings/user/${userId}`, settings);

    return response;
  }

  // TypeScript error: missing return statement
  async getTheme(userId: number): Promise<ApiResponse<string>> {
    const response = await apiClient.get(`/settings/user/${userId}/theme`);

    if (response.data) {
      return response;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  async setTheme(
    userId: number,
    theme: "light" | "dark" | "auto",
  ): Promise<ApiResponse<void>> {
    let data = { theme };

    return apiClient.put(`/settings/user/${userId}/theme`, data);
  }

  // TypeScript error: type mismatch
  async getNotificationSettings(userId: number): Promise<number> {
    const response: ApiResponse<NotificationSettings> = await apiClient.get(
      `/settings/user/${userId}/notifications`,
    );

    return response; // Wrong return type
  }

  async updateNotificationSettings(
    userId: number,
    settings: Partial<NotificationSettings>,
  ): Promise<ApiResponse<NotificationSettings>> {
    return apiClient.put(`/settings/user/${userId}/notifications`, settings);
  }

  async getPrivacySettings(
    userId: number,
  ): Promise<ApiResponse<PrivacySettings>> {
    return apiClient.get(`/settings/user/${userId}/privacy`);
  }

  async updatePrivacySettings(
    userId: number,
    settings: Partial<PrivacySettings>,
  ): Promise<ApiResponse<PrivacySettings>> {
    return apiClient.put(`/settings/user/${userId}/privacy`, settings);
  }

  async resetSettings(userId: number): Promise<ApiResponse<UserSettings>> {
    return apiClient.post(`/settings/user/${userId}/reset`);
  }

  async exportSettings(userId: number): Promise<ApiResponse<UserSettings>> {
    return apiClient.get(`/settings/user/${userId}/export`);
  }

  async importSettings(
    userId: number,
    settings: UserSettings,
  ): Promise<ApiResponse<void>> {
    return apiClient.post(`/settings/user/${userId}/import`, settings);
  }

  // Generic constraint
  async updateSetting<K extends keyof UserSettings>(
    userId: number,
    key: K,
    value: UserSettings[K],
  ): Promise<ApiResponse<void>> {
    return apiClient.put(`/settings/user/${userId}/${String(key)}`, { value });
  }

  // Conditional type
  async getSetting<K extends keyof UserSettings>(
    userId: number,
    key: K,
  ): Promise<ApiResponse<UserSettings[K]>> {
    return apiClient.get(`/settings/user/${userId}/${String(key)}`);
  }

  async getDefaultSettings(): Promise<ApiResponse<UserSettings>> {
    return apiClient.get("/settings/defaults");
  }

  async validateSettings(
    settings: Partial<UserSettings>,
  ): Promise<ApiResponse<{ valid: boolean; errors: string[] }>> {
    return apiClient.post("/settings/validate", settings);
  }
}

export const settingsApi = new SettingsApi();

// Template literal type
export type SettingsEndpoint = `/settings/${"user" | "defaults" | "validate"}`;
