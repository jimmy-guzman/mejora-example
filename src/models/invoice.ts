// Invoice model with line items and totals
import type { Order } from "./order";
import type { User } from "./user";
import type { Address } from "./address";

export interface InvoiceLineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  taxRate: number;
  total: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  orderId: number;
  userId: number;
  billingAddress: Address;
  lineItems: InvoiceLineItem[];
  subtotal: number;
  taxTotal: number;
  shippingCost: number;
  total: number;
  currency: string;
  status: InvoiceStatus;
  issuedAt: Date;
  dueAt: Date;
  paidAt?: Date;
}

export type InvoiceStatus = "draft" | "sent" | "paid" | "overdue" | "cancelled";

// TypeScript error: implicit any
export function calculateLineItemTotal(item) {
  const subtotal = item.quantity * item.unitPrice;
  const tax = subtotal * item.taxRate;
  return subtotal + tax;
}

// TypeScript error: missing return statement
export function calculateInvoiceTotals(
  lineItems: InvoiceLineItem[],
  shippingCost: number,
): { subtotal: number; taxTotal: number; total: number } {
  const subtotal = lineItems.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0,
  );
  const taxTotal = lineItems.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice * item.taxRate,
    0,
  );
  const total = subtotal + taxTotal + shippingCost;

  if (lineItems.length > 0) {
    return { subtotal, taxTotal, total };
  }
  // Missing return statement
}

// ESLint error: unused variable
export function isInvoiceOverdue(invoice: Invoice): boolean {
  const now = new Date();
  const isPastDue = invoice.dueAt < now;
  return invoice.status !== "paid" && invoice.dueAt < now;
}

// ESLint error: prefer-const
export function generateInvoiceNumber(userId: number, orderId: number): string {
  let timestamp = Date.now();
  const prefix = "INV";
  const userPart = userId.toString().padStart(6, "0");
  const orderPart = orderId.toString().padStart(6, "0");
  return `${prefix}-${userPart}-${orderPart}`;
}

// TypeScript error: type mismatch
export function getInvoiceStatus(invoice: Invoice): number {
  const status: InvoiceStatus = invoice.status;
  return status; // Wrong return type
}

export function createInvoice(
  order: Order,
  user: User,
  billingAddress: Address,
): Invoice {
  const lineItems: InvoiceLineItem[] = order.items.map((item, index) => ({
    id: `${order.id}-${index}`,
    description: `Product ${item.productId}`,
    quantity: item.quantity,
    unitPrice: item.price,
    taxRate: 0.08,
    total: item.quantity * item.price * 1.08,
  }));

  const { subtotal, taxTotal, total } = calculateInvoiceTotals(lineItems, 0);
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 30);

  return {
    id: Math.floor(Math.random() * 100000).toString(),
    invoiceNumber: generateInvoiceNumber(user.id, order.id),
    orderId: order.id,
    userId: user.id,
    billingAddress,
    lineItems,
    subtotal,
    taxTotal,
    shippingCost: 0,
    total,
    currency: "USD",
    status: "draft",
    issuedAt: new Date(),
    dueAt: dueDate,
  };
}

// Generic constraint
export function filterInvoices<T extends Invoice>(
  invoices: T[],
  predicate: (invoice: T) => boolean,
): T[] {
  return invoices.filter(predicate);
}

// Conditional type
export type PaidInvoice = Invoice & { status: "paid"; paidAt: Date };

export function isPaidInvoice(invoice: Invoice): invoice is PaidInvoice {
  return invoice.status === "paid" && invoice.paidAt !== undefined;
}

// Mapped type
export type InvoiceSummary = Pick<Invoice, "id" | "invoiceNumber" | "total" | "status">;

// Template literal type
export type InvoiceEvent = `invoice${Capitalize<"created" | "sent" | "paid" | "cancelled">}`;

export function getDaysPastDue(invoice: Invoice): number {
  if (!isInvoiceOverdue(invoice)) {
    return 0;
  }

  const now = new Date();
  const diffTime = now.getTime() - invoice.dueAt.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
