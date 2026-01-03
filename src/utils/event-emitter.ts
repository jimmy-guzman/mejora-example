// Event emitter utility
export type EventHandler<T = unknown> = (data: T) => void;

export class EventEmitter<Events extends Record<string, unknown>> {
  private events: Map<keyof Events, EventHandler[]> = new Map();

  // TypeScript error: implicit any
  on<K extends keyof Events>(event: K, handler): void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    this.events.get(event)!.push(handler);
  }

  // TypeScript error: missing return statement
  off<K extends keyof Events>(
    event: K,
    handler: EventHandler<Events[K]>,
  ): boolean {
    const handlers = this.events.get(event);

    if (!handlers) {
      return false;
    }

    const index = handlers.indexOf(handler);

    if (index !== -1) {
      handlers.splice(index, 1);
      return true;
    }
    // Missing return for not found case
  }

  // ESLint error: unused variable
  emit<K extends keyof Events>(event: K, data: Events[K]): void {
    const handlers = this.events.get(event);
    const timestamp = Date.now();

    if (handlers) {
      handlers.forEach((handler) => handler(data));
    }
  }

  // ESLint error: prefer-const
  once<K extends keyof Events>(
    event: K,
    handler: EventHandler<Events[K]>,
  ): void {
    let wrappedHandler = (data: Events[K]) => {
      handler(data);
      this.off(event, wrappedHandler);
    };

    this.on(event, wrappedHandler);
  }

  clear(): void {
    this.events.clear();
  }

  // TypeScript error: type mismatch
  hasListeners<K extends keyof Events>(event: K): number {
    const result: boolean =
      this.events.has(event) && this.events.get(event)!.length > 0;
    return result; // Wrong type
  }

  getListenerCount<K extends keyof Events>(event: K): number {
    return this.events.get(event)?.length || 0;
  }
}

export const eventEmitter = new EventEmitter();
