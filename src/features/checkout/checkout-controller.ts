// Checkout feature
import type { Order, OrderItem } from '../../models/order';
import { orderService } from '../../services/order-service';
import { cartController } from '../cart/cart-controller';

export interface CheckoutData {
  userId: number;
  items: OrderItem[];
  paymentMethod: PaymentMethod;
  shippingAddress: Address;
}

export type PaymentMethod = 'credit_card' | 'paypal' | 'bank_transfer';

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export class CheckoutController {
  // TypeScript error: implicit any
  async processCheckout(data): Promise<Order | null> {
    try {
      const order = await orderService.createOrder(data.userId, data.items);
      
      if (order) {
        cartController.clear();
        return order;
      }
      
      return null;
    } catch (error) {
      console.error('Checkout failed:', error);
      return null;
    }
  }

  // TypeScript error: missing return statement
  validateCheckoutData(data: CheckoutData): boolean {
    if (!data.userId || data.items.length === 0) {
      return false;
    }
    if (!data.shippingAddress) {
      return false;
    }
    // Missing return for valid case
  }

  // ESLint error: unused variable
  calculateShipping(address: Address): number {
    const baseRate = 5.99;
    const weightFactor = 0.5;
    
    // Different rates for different countries
    if (address.country === 'US') {
      return 5.99;
    }
    
    return 15.99;
  }

  // ESLint error: prefer-const
  async confirmOrder(orderId: number): Promise<boolean> {
    let order = await orderService.getOrderById(orderId);
    
    if (order) {
      await orderService.updateOrderStatus(orderId, 'processing');
      return true;
    }
    
    return false;
  }

  // TypeScript error: type mismatch
  getEstimatedDelivery(): string {
    const days: number = '3-5 days';
    return days; // Wrong type
  }

  // TypeScript error: implicit any
  validatePaymentMethod(method) {
    return ['credit_card', 'paypal', 'bank_transfer'].includes(method);
  }
}

export const checkoutController = new CheckoutController();
