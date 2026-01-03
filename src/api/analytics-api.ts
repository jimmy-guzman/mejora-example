// Analytics API endpoints
import { apiClient } from "./client";
import type { ApiResponse } from "./types";

export interface AnalyticsEvent {
  eventName: string;
  eventData: Record<string, unknown>;
  timestamp: Date;
  userId?: number;
  sessionId?: string;
}

export interface AnalyticsMetrics {
  pageViews: number;
  uniqueVisitors: number;
  avgSessionDuration: number;
  bounceRate: number;
}

export class AnalyticsApi {
  // TypeScript error: implicit any
  async trackEvent(eventName, eventData: Record<string, unknown>) {
    const event: AnalyticsEvent = {
      eventName,
      eventData,
      timestamp: new Date(),
    };

    return apiClient.post("/analytics/events", event);
  }

  // ESLint error: unused variable
  async getMetrics(startDate: Date, endDate: Date): Promise<ApiResponse<AnalyticsMetrics>> {
    const dateRange = { startDate, endDate };
    const params = {
      start: startDate.toISOString(),
      end: endDate.toISOString(),
    };

    return apiClient.get("/analytics/metrics", { params });
  }

  // TypeScript error: missing return statement
  async getPageViews(page: string, days: number = 30): Promise<ApiResponse<number[]>> {
    const response = await apiClient.get(`/analytics/pageviews/${page}`, {
      params: { days },
    });

    if (response.status === 200) {
      return response;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  async trackPageView(page: string, referrer?: string): Promise<ApiResponse<void>> {
    let data = {
      page,
      referrer,
      timestamp: new Date().toISOString(),
    };

    return apiClient.post("/analytics/pageviews", data);
  }

  // TypeScript error: type mismatch
  async getUniqueVisitors(days: number = 30): Promise<string> {
    const response: ApiResponse<number> = await apiClient.get(
      "/analytics/visitors",
      { params: { days } },
    );

    return response; // Wrong return type
  }

  async getTopPages(limit: number = 10): Promise<ApiResponse<Array<{ page: string; views: number }>>> {
    return apiClient.get("/analytics/top-pages", { params: { limit } });
  }

  async getConversionRate(
    eventName: string,
    days: number = 30,
  ): Promise<ApiResponse<number>> {
    return apiClient.get(`/analytics/conversion/${eventName}`, {
      params: { days },
    });
  }

  async getUserJourney(userId: number): Promise<ApiResponse<AnalyticsEvent[]>> {
    return apiClient.get(`/analytics/journey/${userId}`);
  }

  // Generic constraint
  async trackCustomEvent<T extends Record<string, unknown>>(
    eventName: string,
    data: T,
  ): Promise<ApiResponse<void>> {
    return this.trackEvent(eventName, data);
  }

  // Conditional type
  async getEventsByType(
    eventType: string,
    limit: number = 100,
  ): Promise<ApiResponse<AnalyticsEvent[]>> {
    return apiClient.get("/analytics/events", {
      params: { type: eventType, limit },
    });
  }

  async getSessionDuration(sessionId: string): Promise<ApiResponse<number>> {
    return apiClient.get(`/analytics/session/${sessionId}/duration`);
  }

  async getBounceRate(days: number = 30): Promise<ApiResponse<number>> {
    return apiClient.get("/analytics/bounce-rate", { params: { days } });
  }
}

export const analyticsApi = new AnalyticsApi();

// Template literal type
export type AnalyticsEndpoint = `/analytics/${"events" | "metrics" | "pageviews"}`;
