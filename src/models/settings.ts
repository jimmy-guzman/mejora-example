// Settings model
import type { User } from "./user";

export interface Settings {
  userId: number;
  theme: ThemeSettings;
  privacy: PrivacySettings;
  notifications: NotificationSettings;
  language: string;
  timezone: string;
}

export interface ThemeSettings {
  mode: "light" | "dark" | "auto";
  primaryColor: string;
  fontSize: number;
}

export interface PrivacySettings {
  profileVisible: boolean;
  showEmail: boolean;
  allowMessages: boolean;
}

export interface NotificationSettings {
  emailEnabled: boolean;
  pushEnabled: boolean;
  frequency: "realtime" | "daily" | "weekly";
}

// TypeScript error: implicit any
export function createDefaultSettings(user) {
  return {
    userId: user.id,
    theme: {
      mode: "light" as const,
      primaryColor: "#007bff",
      fontSize: 14,
    },
    privacy: {
      profileVisible: true,
      showEmail: false,
      allowMessages: true,
    },
    notifications: {
      emailEnabled: true,
      pushEnabled: false,
      frequency: "daily" as const,
    },
    language: "en",
    timezone: "UTC",
  };
}

// Conditional type
export type HasDarkMode<T> = T extends { theme: { mode: "dark" } }
  ? true
  : false;

// Mapped type
export type PartialSettings = {
  [P in keyof Settings]?: Settings[P];
};

// TypeScript error: missing return statement
export function validateSettings(settings: Settings): boolean {
  if (settings.theme.fontSize < 10 || settings.theme.fontSize > 24) {
    return false;
  }
  // Missing return for valid case
}

// ESLint error: unused variable
export function getSettingsSummary(settings: Settings): string {
  const theme = settings.theme.mode;
  const lang = settings.language;
  const tz = settings.timezone;
  return `Settings for user ${settings.userId}`;
}

// ESLint error: prefer-const
export function updateTheme(
  settings: Settings,
  theme: ThemeSettings,
): Settings {
  let updated = { ...settings };
  updated.theme = theme;
  return updated;
}

export function mergeSettings(
  current: Settings,
  updates: PartialSettings,
): Settings {
  return {
    ...current,
    ...updates,
  };
}

// Template literal type
export type SettingsEvent =
  `settings${Capitalize<"updated" | "reset" | "synced">}`;
