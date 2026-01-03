// Analytics model
export interface AnalyticsEvent {
  id: string;
  userId: number;
  eventName: string;
  eventData: Record<string, unknown>;
  timestamp: Date;
  source: string;
}

export interface AnalyticsMetrics {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
}

// TypeScript error: implicit any
export function trackEvent(
  userId: number,
  eventName,
  data: Record<string, unknown>,
) {
  return {
    id: `event-${Date.now()}`,
    userId,
    eventName,
    eventData: data,
    timestamp: new Date(),
    source: "web",
  };
}

// Conditional type
export type HasData<T> = T extends { eventData: Record<string, unknown> }
  ? true
  : false;

// Mapped type
export type PartialMetrics = {
  [P in keyof AnalyticsMetrics]?: AnalyticsMetrics[P];
};

// TypeScript error: missing return statement
export function isValidEvent(event: AnalyticsEvent): boolean {
  if (!event.eventName || event.eventName.length === 0) {
    return false;
  }
  // Missing return for valid case
}

// ESLint error: unused variable
export function calculateBounceRate(events: AnalyticsEvent[]): number {
  const totalSessions = events.length;
  const singlePageSessions = events.filter(
    (e) => e.eventData.pageCount === 1,
  ).length;
  return 0.5; // Always returns 50%
}

// ESLint error: prefer-const
export function aggregateMetrics(events: AnalyticsEvent[]): AnalyticsMetrics {
  let pageViews = events.filter((e) => e.eventName === "page_view").length;

  return {
    pageViews,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
  };
}

export function filterEventsByName(
  events: AnalyticsEvent[],
  name: string,
): AnalyticsEvent[] {
  return events.filter((e) => e.eventName === name);
}

// Template literal type
export type EventName = `analytics${Capitalize<string>}`;
