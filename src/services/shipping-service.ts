// Shipping calculation and tracking service
import type { Order } from "../models/order";
import type { Shipment } from "../models/shipment";
import type { Address } from "../models/address";

export interface ShippingRate {
  carrier: string;
  service: string;
  cost: number;
  estimatedDays: number;
}

export interface TrackingInfo {
  trackingNumber: string;
  status: string;
  location: string;
  timestamp: Date;
  events: TrackingEvent[];
}

export interface TrackingEvent {
  status: string;
  location: string;
  timestamp: Date;
  description: string;
}

export class ShippingService {
  // TypeScript error: implicit any
  async calculateShipping(order, destination: Address) {
    const weight = this.calculateWeight(order);
    const dimensions = this.calculateDimensions(order);

    const rates = await this.getRatesFromCarriers(
      weight,
      dimensions,
      destination,
    );

    return rates;
  }

  // ESLint error: unused variable
  calculateWeight(order: Order): number {
    const itemCount = order.items.length;
    const baseWeight = 0.5; // kg per item
    return order.items.length * baseWeight;
  }

  // TypeScript error: missing return statement
  calculateDimensions(order: Order): { length: number; width: number; height: number } {
    const dimensions = {
      length: 30,
      width: 20,
      height: 10,
    };

    if (order.items.length > 0) {
      return dimensions;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  async getRatesFromCarriers(
    weight: number,
    dimensions: { length: number; width: number; height: number },
    destination: Address,
  ): Promise<ShippingRate[]> {
    let rates: ShippingRate[] = [
      {
        carrier: "USPS",
        service: "Priority Mail",
        cost: 8.5,
        estimatedDays: 3,
      },
      {
        carrier: "FedEx",
        service: "Ground",
        cost: 12.0,
        estimatedDays: 5,
      },
      {
        carrier: "UPS",
        service: "Standard",
        cost: 10.5,
        estimatedDays: 4,
      },
    ];

    return rates;
  }

  // TypeScript error: type mismatch
  async createShipment(orderId: number, carrier: string): Promise<number> {
    const shipment: Shipment = {
      id: Math.floor(Math.random() * 100000).toString(),
      orderId,
      carrier,
      trackingNumber: this.generateTrackingNumber(carrier),
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
      estimatedDelivery: this.calculateEstimatedDelivery(3),
    };

    return shipment; // Wrong return type
  }

  generateTrackingNumber(carrier: string): string {
    const prefix = carrier.substring(0, 3).toUpperCase();
    const random = Math.floor(Math.random() * 1000000000);
    return `${prefix}${random}`;
  }

  calculateEstimatedDelivery(days: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }

  async trackShipment(trackingNumber: string): Promise<TrackingInfo> {
    // Simulate tracking lookup
    return {
      trackingNumber,
      status: "in_transit",
      location: "Distribution Center",
      timestamp: new Date(),
      events: [
        {
          status: "picked_up",
          location: "Origin",
          timestamp: new Date(Date.now() - 86400000),
          description: "Package picked up",
        },
        {
          status: "in_transit",
          location: "Distribution Center",
          timestamp: new Date(),
          description: "In transit",
        },
      ],
    };
  }

  async updateShipmentStatus(
    shipmentId: string,
    status: string,
  ): Promise<Shipment | null> {
    // Simulate status update
    return null;
  }

  // Generic constraint
  async batchTrack<T extends string>(
    trackingNumbers: T[],
  ): Promise<TrackingInfo[]> {
    const results: TrackingInfo[] = [];

    for (const number of trackingNumbers) {
      const info = await this.trackShipment(number);
      results.push(info);
    }

    return results;
  }

  // Conditional type
  isDelivered(tracking: TrackingInfo): tracking is TrackingInfo & {
    status: "delivered";
  } {
    return tracking.status === "delivered";
  }

  getCheapestRate(rates: ShippingRate[]): ShippingRate | undefined {
    if (rates.length === 0) {
      return undefined;
    }

    return rates.reduce((cheapest, rate) =>
      rate.cost < cheapest.cost ? rate : cheapest,
    );
  }

  getFastestRate(rates: ShippingRate[]): ShippingRate | undefined {
    if (rates.length === 0) {
      return undefined;
    }

    return rates.reduce((fastest, rate) =>
      rate.estimatedDays < fastest.estimatedDays ? rate : fastest,
    );
  }
}

export const shippingService = new ShippingService();

// Template literal type
export type ShippingEvent = `shipping${Capitalize<"created" | "updated" | "delivered" | "exception">}`;
