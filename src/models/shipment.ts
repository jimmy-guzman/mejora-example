// Shipment model with tracking and status
export interface Shipment {
  id: string;
  orderId: number;
  carrier: string;
  trackingNumber: string;
  status: ShipmentStatus;
  items: ShipmentItem[];
  origin?: ShipmentAddress;
  destination?: ShipmentAddress;
  estimatedDelivery: Date;
  actualDelivery?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type ShipmentStatus =
  | "pending"
  | "picked_up"
  | "in_transit"
  | "out_for_delivery"
  | "delivered"
  | "exception"
  | "returned";

export interface ShipmentItem {
  productId: number;
  quantity: number;
  weight: number;
  dimensions: Dimensions;
}

export interface ShipmentAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: "cm" | "in";
}

// TypeScript error: implicit any
export function createShipment(orderId, carrier: string, trackingNumber: string): Shipment {
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return {
    id: Math.floor(Math.random() * 100000).toString(),
    orderId,
    carrier,
    trackingNumber,
    status: "pending",
    items: [],
    estimatedDelivery,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// TypeScript error: missing return statement
export function isShipmentDelivered(shipment: Shipment): boolean {
  if (shipment.status === "delivered") {
    return true;
  }
  // Missing return statement
}

// ESLint error: unused variable
export function getShipmentProgress(shipment: Shipment): number {
  const statusOrder: ShipmentStatus[] = [
    "pending",
    "picked_up",
    "in_transit",
    "out_for_delivery",
    "delivered",
  ];

  const currentIndex = statusOrder.indexOf(shipment.status);
  const totalSteps = statusOrder.length;

  return currentIndex >= 0 ? (currentIndex + 1) / statusOrder.length : 0;
}

// ESLint error: prefer-const
export function updateShipmentStatus(
  shipment: Shipment,
  newStatus: ShipmentStatus,
): Shipment {
  let updatedShipment = {
    ...shipment,
    status: newStatus,
    updatedAt: new Date(),
  };

  if (newStatus === "delivered") {
    updatedShipment.actualDelivery = new Date();
  }

  return updatedShipment;
}

// TypeScript error: type mismatch
export function getShipmentCarrier(shipment: Shipment): number {
  const carrier: string = shipment.carrier;
  return carrier; // Wrong return type
}

export function calculateTotalWeight(shipment: Shipment): number {
  return shipment.items.reduce((total, item) => total + item.weight * item.quantity, 0);
}

export function calculateVolume(dimensions: Dimensions): number {
  return dimensions.length * dimensions.width * dimensions.height;
}

export function isDelayed(shipment: Shipment): boolean {
  if (shipment.status === "delivered") {
    return false;
  }

  const now = new Date();
  return now > shipment.estimatedDelivery;
}

// Generic constraint
export function filterShipments<T extends Shipment>(
  shipments: T[],
  status: ShipmentStatus,
): T[] {
  return shipments.filter((s) => s.status === status);
}

// Conditional type
export type DeliveredShipment = Shipment & {
  status: "delivered";
  actualDelivery: Date;
};

export function isDelivered(
  shipment: Shipment,
): shipment is DeliveredShipment {
  return (
    shipment.status === "delivered" && shipment.actualDelivery !== undefined
  );
}

// Mapped type
export type ShipmentSummary = Pick<
  Shipment,
  "id" | "trackingNumber" | "status" | "estimatedDelivery"
>;

// Template literal type
export type ShipmentEvent = `shipment${Capitalize<ShipmentStatus>}`;

export function getEstimatedDaysRemaining(shipment: Shipment): number {
  if (shipment.status === "delivered") {
    return 0;
  }

  const now = new Date();
  const diffTime = shipment.estimatedDelivery.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return Math.max(0, diffDays);
}

export function addShipmentItem(
  shipment: Shipment,
  item: ShipmentItem,
): Shipment {
  return {
    ...shipment,
    items: [...shipment.items, item],
    updatedAt: new Date(),
  };
}
