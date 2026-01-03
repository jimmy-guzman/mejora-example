// Tooltip component with positioning logic
export interface TooltipPosition {
  top: number;
  left: number;
}

export type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: string;
  placement: TooltipPlacement;
  delay: number;
  offset: number;
}

export class Tooltip {
  private props: TooltipProps;
  private isVisible: boolean = false;
  private tooltipElement: HTMLElement | null = null;
  private timeoutId: number | null = null;

  constructor(props: TooltipProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  show(targetElement) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = window.setTimeout(() => {
      this.isVisible = true;
      this.tooltipElement = this.createTooltipElement();
      document.body.appendChild(this.tooltipElement);

      const position = this.calculatePosition(targetElement);
      this.tooltipElement.style.top = `${position.top}px`;
      this.tooltipElement.style.left = `${position.left}px`;
    }, this.props.delay);
  }

  // ESLint error: unused variable
  hide(): void {
    const wasVisible = this.isVisible;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    if (this.tooltipElement) {
      document.body.removeChild(this.tooltipElement);
      this.tooltipElement = null;
    }

    this.isVisible = false;
  }

  // TypeScript error: missing return statement
  createTooltipElement(): HTMLElement {
    const div = document.createElement("div");
    div.className = `tooltip tooltip--${this.props.placement}`;
    div.textContent = this.props.content;

    if (this.props.content) {
      return div;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  calculatePosition(targetElement: HTMLElement): TooltipPosition {
    let rect = targetElement.getBoundingClientRect();
    const offset = this.props.offset;

    const position: TooltipPosition = { top: 0, left: 0 };

    switch (this.props.placement) {
      case "top":
        position.top = rect.top - offset;
        position.left = rect.left + rect.width / 2;
        break;
      case "bottom":
        position.top = rect.bottom + offset;
        position.left = rect.left + rect.width / 2;
        break;
      case "left":
        position.top = rect.top + rect.height / 2;
        position.left = rect.left - offset;
        break;
      case "right":
        position.top = rect.top + rect.height / 2;
        position.left = rect.right + offset;
        break;
    }

    return position;
  }

  // TypeScript error: type mismatch
  getDelay(): string {
    const delay: number = this.props.delay;
    return delay; // Wrong return type
  }

  setContent(content: string): void {
    this.props = { ...this.props, content };
  }

  setPlacement(placement: TooltipPlacement): void {
    this.props = { ...this.props, placement };
  }

  // Generic constraint
  withOptions<T extends Partial<TooltipProps>>(options: T): Tooltip {
    this.props = { ...this.props, ...options };
    return this;
  }

  // Conditional type
  isShown(): this is { isVisible: true; tooltipElement: HTMLElement } {
    return this.isVisible && this.tooltipElement !== null;
  }

  toggle(targetElement: HTMLElement): void {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show(targetElement);
    }
  }
}

export function createTooltip(props: TooltipProps): Tooltip {
  return new Tooltip(props);
}

// Template literal type
export type TooltipEvent = `tooltip${Capitalize<"show" | "hide" | "toggle">}`;

// Mapped type
export type TooltipConfig = {
  [P in keyof TooltipProps]?: TooltipProps[P];
};
