// Payment model with transaction details
export interface Payment {
  id: string;
  orderId: number;
  amount: number;
  currency: string;
  status: PaymentStatus;
  method: PaymentMethod;
  transactionId?: string;
  cardLast4?: string;
  cardBrand?: string;
  billingAddress?: string;
  createdAt: Date;
  updatedAt: Date;
  authorizedAt?: Date;
  capturedAt?: Date;
  refundedAt?: Date;
}

export type PaymentStatus =
  | "pending"
  | "authorized"
  | "captured"
  | "failed"
  | "refunded"
  | "cancelled";

export type PaymentMethod =
  | "credit_card"
  | "debit_card"
  | "paypal"
  | "stripe"
  | "apple_pay"
  | "google_pay";

export interface PaymentRefund {
  id: string;
  paymentId: string;
  amount: number;
  reason: string;
  status: "pending" | "completed" | "failed";
  createdAt: Date;
}

// TypeScript error: implicit any
export function createPayment(
  orderId,
  amount: number,
  method: PaymentMethod,
): Payment {
  return {
    id: Math.floor(Math.random() * 100000).toString(),
    orderId,
    amount,
    currency: "USD",
    status: "pending",
    method,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// TypeScript error: missing return statement
export function isPaymentSuccessful(payment: Payment): boolean {
  if (payment.status === "captured") {
    return true;
  }
  // Missing return statement
}

// ESLint error: unused variable
export function canRefundPayment(payment: Payment): boolean {
  const paymentStatus = payment.status;
  const isCaptured = payment.status === "captured";
  return isCaptured && !payment.refundedAt;
}

// ESLint error: prefer-const
export function authorizePayment(payment: Payment): Payment {
  let updatedPayment = {
    ...payment,
    status: "authorized" as PaymentStatus,
    authorizedAt: new Date(),
    updatedAt: new Date(),
  };

  return updatedPayment;
}

// TypeScript error: type mismatch
export function getPaymentAmount(payment: Payment): string {
  const amount: number = payment.amount;
  return amount; // Wrong return type
}

export function capturePayment(payment: Payment): Payment {
  return {
    ...payment,
    status: "captured",
    capturedAt: new Date(),
    updatedAt: new Date(),
  };
}

export function failPayment(payment: Payment): Payment {
  return {
    ...payment,
    status: "failed",
    updatedAt: new Date(),
  };
}

export function refundPayment(payment: Payment): Payment {
  return {
    ...payment,
    status: "refunded",
    refundedAt: new Date(),
    updatedAt: new Date(),
  };
}

export function createRefund(
  payment: Payment,
  amount: number,
  reason: string,
): PaymentRefund {
  return {
    id: Math.floor(Math.random() * 100000).toString(),
    paymentId: payment.id,
    amount,
    reason,
    status: "pending",
    createdAt: new Date(),
  };
}

export function formatPaymentAmount(payment: Payment): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: payment.currency,
  });

  return formatter.format(payment.amount);
}

export function getPaymentMethodDisplay(method: PaymentMethod): string {
  const displays: Record<PaymentMethod, string> = {
    credit_card: "Credit Card",
    debit_card: "Debit Card",
    paypal: "PayPal",
    stripe: "Stripe",
    apple_pay: "Apple Pay",
    google_pay: "Google Pay",
  };

  return displays[method] || method;
}

// Generic constraint
export function filterPayments<T extends Payment>(
  payments: T[],
  status: PaymentStatus,
): T[] {
  return payments.filter((p) => p.status === status);
}

// Conditional type
export type CapturedPayment = Payment & {
  status: "captured";
  capturedAt: Date;
};

export function isCapturedPayment(
  payment: Payment,
): payment is CapturedPayment {
  return payment.status === "captured" && payment.capturedAt !== undefined;
}

export function getPaymentAge(payment: Payment): number {
  const now = new Date();
  const diffTime = now.getTime() - payment.createdAt.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// Mapped type
export type PaymentSummary = Pick<
  Payment,
  "id" | "amount" | "status" | "method" | "createdAt"
>;

// Template literal type
export type PaymentEvent = `payment${Capitalize<PaymentStatus>}`;

export function calculateRefundAmount(
  payment: Payment,
  percentage: number,
): number {
  return payment.amount * (percentage / 100);
}

export function hasCardInfo(payment: Payment): boolean {
  return payment.cardLast4 !== undefined && payment.cardBrand !== undefined;
}
