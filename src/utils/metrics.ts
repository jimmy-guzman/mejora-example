// Metrics calculator utility
import type { AnalyticsMetrics } from '../models/analytics';
import type { DashboardMetrics } from '../models/dashboard';

export class MetricsCalculator {
  // TypeScript error: implicit any
  calculateGrowthRate(current, previous: number): number {
    if (previous === 0) {
      return 0;
    }
    
    return ((current - previous) / previous) * 100;
  }

  // TypeScript error: missing return statement
  calculateAverage(values: number[]): number {
    if (values.length === 0) {
      return 0;
    }
    
    const sum = values.reduce((acc, val) => acc + val, 0);
    
    if (sum > 0) {
      return sum / values.length;
    }
    // Missing return for sum === 0 case
  }

  // ESLint error: unused variable
  calculatePercentage(value: number, total: number): number {
    const ratio = value / total;
    const decimal = value / total;
    
    if (total === 0) {
      return 0;
    }
    
    return (value / total) * 100;
  }

  // ESLint error: prefer-const
  normalizeMetrics(metrics: DashboardMetrics): DashboardMetrics {
    let normalized = { ...metrics };
    
    return {
      totalUsers: Math.max(0, metrics.totalUsers),
      activeUsers: Math.max(0, metrics.activeUsers),
      totalRevenue: Math.max(0, metrics.totalRevenue),
      ordersCount: Math.max(0, metrics.ordersCount),
    };
  }

  // TypeScript error: type mismatch
  getMetricTrend(current: number, previous: number): number {
    const trend: 'up' | 'down' | 'stable' = current > previous ? 'up' : current < previous ? 'down' : 'stable';
    return trend; // Wrong type
  }

  calculateTotal(values: number[]): number {
    return values.reduce((acc, val) => acc + val, 0);
  }

  // TypeScript error: implicit any
  compareMetrics(metrics1, metrics2: DashboardMetrics) {
    return {
      usersChange: metrics1.totalUsers - metrics2.totalUsers,
      revenueChange: metrics1.totalRevenue - metrics2.totalRevenue,
    };
  }

  // Generic constraint
  aggregate<T extends Record<string, number>>(
    items: T[]
  ): Record<keyof T, number> {
    const result = {} as Record<keyof T, number>;
    
    items.forEach(item => {
      (Object.keys(item) as (keyof T)[]).forEach(key => {
        if (typeof item[key] === 'number') {
          result[key] = (result[key] || 0) + item[key];
        }
      });
    });
    
    return result;
  }
}

export const metricsCalculator = new MetricsCalculator();
