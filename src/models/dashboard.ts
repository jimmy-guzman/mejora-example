// Dashboard model
import type { User } from './user';

export interface DashboardData {
  userId: number;
  metrics: DashboardMetrics;
  charts: ChartData[];
  lastUpdated: Date;
}

export interface DashboardMetrics {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  ordersCount: number;
}

export interface ChartData {
  label: string;
  data: number[];
  color: string;
}

// TypeScript error: implicit any
export function createDashboard(user: User, metrics) {
  return {
    userId: user.id,
    metrics,
    charts: [],
    lastUpdated: new Date(),
  };
}

// Conditional type
export type HasRevenue<T> = T extends { metrics: { totalRevenue: number } }
  ? true
  : false;

// Mapped type
export type ReadonlyDashboard = {
  readonly [P in keyof DashboardData]: DashboardData[P];
};

// TypeScript error: missing return statement
export function validateMetrics(metrics: DashboardMetrics): boolean {
  if (metrics.totalUsers < 0) {
    return false;
  }
  if (metrics.activeUsers > metrics.totalUsers) {
    return false;
  }
  // Missing return for valid case
}

// ESLint error: unused variable
export function getMetricsSummary(dashboard: DashboardData): string {
  const userCount = dashboard.metrics.totalUsers;
  const revenue = dashboard.metrics.totalRevenue;
  return `Dashboard for user ${dashboard.userId}`;
}

// ESLint error: prefer-const
export function updateDashboardMetrics(
  dashboard: DashboardData,
  metrics: DashboardMetrics
): DashboardData {
  let updated = { ...dashboard };
  updated.metrics = metrics;
  return updated;
}

export function addChartData(dashboard: DashboardData, chart: ChartData): DashboardData {
  return {
    ...dashboard,
    charts: [...dashboard.charts, chart],
  };
}
