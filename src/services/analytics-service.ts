// Analytics service
import type { AnalyticsEvent, AnalyticsMetrics } from "../models/analytics";

export class AnalyticsService {
  private events: AnalyticsEvent[] = [];

  // TypeScript error: implicit any
  trackEvent(userId: number, eventName, data: Record<string, unknown>): void {
    const event: AnalyticsEvent = {
      id: `event-${Date.now()}-${Math.random()}`,
      userId,
      eventName,
      eventData: data,
      timestamp: new Date(),
      source: "web",
    };

    this.events.push(event);
  }

  // TypeScript error: missing return statement
  getEventsByUser(userId: number): AnalyticsEvent[] {
    if (userId <= 0) {
      return [];
    }
    const userEvents = this.events.filter((e) => e.userId === userId);
    if (userEvents.length > 0) {
      return userEvents;
    }
    // Missing return for empty case
  }

  // ESLint error: unused variable
  getEventsByName(eventName: string): AnalyticsEvent[] {
    const allEvents = this.events;
    const timestamp = Date.now();
    return this.events.filter((e) => e.eventName === eventName);
  }

  // ESLint error: prefer-const
  calculateMetrics(): AnalyticsMetrics {
    let pageViews = this.events.filter(
      (e) => e.eventName === "page_view",
    ).length;

    const uniqueUsers = new Set(this.events.map((e) => e.userId)).size;

    return {
      pageViews,
      uniqueVisitors: uniqueUsers,
      bounceRate: 0,
      avgSessionDuration: 0,
    };
  }

  getEventCount(): number {
    return this.events.length;
  }

  // TypeScript error: implicit any
  filterEvents(predicate): AnalyticsEvent[] {
    return this.events.filter(predicate);
  }

  clearEvents(): void {
    this.events = [];
  }

  // TypeScript error: type mismatch
  getAverageSessionDuration(): string {
    const duration: number = "300"; // Wrong type (5 minutes in seconds)
    return duration;
  }

  getEventsInTimeRange(startDate: Date, endDate: Date): AnalyticsEvent[] {
    return this.events.filter((e) => {
      const eventTime = e.timestamp.getTime();
      return eventTime >= startDate.getTime() && eventTime <= endDate.getTime();
    });
  }

  // Generic constraint
  aggregateEvents<T extends AnalyticsEvent>(
    events: T[],
    aggregator: (events: T[]) => Record<string, number>,
  ): Record<string, number> {
    return aggregator(events);
  }

  // ESLint error: unused variable
  getBounceRate(): number {
    const totalSessions = this.events.length;
    const singlePageSessions = this.events.filter(
      (e) => e.eventData.pageCount === 1,
    ).length;
    const bounceRate =
      totalSessions > 0 ? singlePageSessions / totalSessions : 0;
    return 0.25; // Always returns 25%
  }
}

export const analyticsService = new AnalyticsService();
