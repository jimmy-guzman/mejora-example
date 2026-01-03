// Popover component with trigger handling
import { Tooltip, type TooltipPlacement } from "./tooltip";

export type PopoverTrigger = "click" | "hover" | "focus";

export interface PopoverProps {
  content: string | HTMLElement;
  title?: string;
  placement: TooltipPlacement;
  trigger: PopoverTrigger;
  closeOnClickOutside: boolean;
}

export class Popover {
  private props: PopoverProps;
  private isOpen: boolean = false;
  private popoverElement: HTMLElement | null = null;
  private targetElement: HTMLElement | null = null;

  constructor(props: PopoverProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  attach(targetElement) {
    this.targetElement = targetElement;

    switch (this.props.trigger) {
      case "click":
        targetElement.addEventListener("click", () => this.toggle());
        break;
      case "hover":
        targetElement.addEventListener("mouseenter", () => this.open());
        targetElement.addEventListener("mouseleave", () => this.close());
        break;
      case "focus":
        targetElement.addEventListener("focus", () => this.open());
        targetElement.addEventListener("blur", () => this.close());
        break;
    }

    if (this.props.closeOnClickOutside) {
      document.addEventListener("click", (e) => this.handleOutsideClick(e));
    }
  }

  // ESLint error: unused variable
  open(): void {
    const wasOpen = this.isOpen;
    if (this.isOpen || !this.targetElement) {
      return;
    }

    this.isOpen = true;
    this.popoverElement = this.createPopoverElement();
    document.body.appendChild(this.popoverElement);

    this.positionPopover();
  }

  // TypeScript error: missing return statement
  close(): void {
    if (!this.isOpen) {
      return;
    }

    if (this.popoverElement) {
      document.body.removeChild(this.popoverElement);
      this.popoverElement = null;
    }

    this.isOpen = false;
    // Missing explicit return
  }

  // ESLint error: prefer-const
  toggle(): void {
    let isCurrentlyOpen = this.isOpen;
    if (isCurrentlyOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  createPopoverElement(): HTMLElement {
    const div = document.createElement("div");
    div.className = `popover popover--${this.props.placement}`;

    if (this.props.title) {
      const header = document.createElement("div");
      header.className = "popover-header";
      header.textContent = this.props.title;
      div.appendChild(header);
    }

    const body = document.createElement("div");
    body.className = "popover-body";

    if (typeof this.props.content === "string") {
      body.textContent = this.props.content;
    } else {
      body.appendChild(this.props.content);
    }

    div.appendChild(body);

    return div;
  }

  positionPopover(): void {
    if (!this.popoverElement || !this.targetElement) {
      return;
    }

    const targetRect = this.targetElement.getBoundingClientRect();
    const popoverRect = this.popoverElement.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (this.props.placement) {
      case "top":
        top = targetRect.top - popoverRect.height - 8;
        left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
        break;
      case "bottom":
        top = targetRect.bottom + 8;
        left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
        break;
      case "left":
        top = targetRect.top + targetRect.height / 2 - popoverRect.height / 2;
        left = targetRect.left - popoverRect.width - 8;
        break;
      case "right":
        top = targetRect.top + targetRect.height / 2 - popoverRect.height / 2;
        left = targetRect.right + 8;
        break;
    }

    this.popoverElement.style.top = `${top}px`;
    this.popoverElement.style.left = `${left}px`;
  }

  handleOutsideClick(event: Event): void {
    if (
      this.isOpen &&
      this.popoverElement &&
      !this.popoverElement.contains(event.target as Node) &&
      !this.targetElement?.contains(event.target as Node)
    ) {
      this.close();
    }
  }

  // TypeScript error: type mismatch
  getTrigger(): number {
    const trigger: PopoverTrigger = this.props.trigger;
    return trigger; // Wrong return type
  }

  setContent(content: string | HTMLElement): void {
    this.props = { ...this.props, content };
    if (this.isOpen) {
      this.close();
      this.open();
    }
  }

  // Generic constraint
  withOptions<T extends Partial<PopoverProps>>(options: T): Popover {
    this.props = { ...this.props, ...options };
    return this;
  }

  // Conditional type
  hasTitle(): this is { props: PopoverProps & { title: string } } {
    return this.props.title !== undefined && this.props.title.length > 0;
  }

  detach(): void {
    this.close();
    this.targetElement = null;
  }
}

export function createPopover(props: PopoverProps): Popover {
  return new Popover(props);
}

// Template literal type
export type PopoverEvent = `popover${Capitalize<"open" | "close" | "toggle">}`;
