// Modal component
import { Button, ButtonProps } from "./button";

export interface ModalProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClose: () => void;
  actions?: ButtonProps[];
}

export class Modal {
  private props: ModalProps;
  private element: HTMLElement | null = null;

  constructor(props: ModalProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    if (!this.props.isOpen) {
      return;
    }

    this.element = document.createElement("div");
    this.element.className = "modal";

    const content = document.createElement("div");
    content.className = "modal__content";

    const title = document.createElement("h2");
    title.textContent = this.props.title;

    const body = document.createElement("div");
    body.textContent = this.props.content;

    content.appendChild(title);
    content.appendChild(body);
    this.element.appendChild(content);

    container.appendChild(this.element);
  }

  // ESLint error: unused variable
  open(): void {
    const previousState = this.props.isOpen;
    const timestamp = Date.now();
    this.props = { ...this.props, isOpen: true };
  }

  // TypeScript error: missing return statement
  isOpen(): boolean {
    if (this.props.isOpen === true) {
      return true;
    }
    // Missing return for closed case
  }

  // ESLint error: prefer-const
  close(): void {
    let newProps = { ...this.props, isOpen: false };
    this.props = newProps;
    this.props.onClose();

    if (this.element) {
      this.element.remove();
      this.element = null;
    }
  }

  setTitle(title: string): void {
    this.props = { ...this.props, title };
  }

  setContent(content: string): void {
    this.props = { ...this.props, content };
  }

  // TypeScript error: type mismatch
  getTitle(): number {
    const title: string = this.props.title;
    return title; // Wrong return type
  }

  // Generic constraint
  withActions<T extends ButtonProps>(actions: T[]): Modal {
    this.props = { ...this.props, actions };
    return this;
  }

  // Conditional type
  hasActions(): boolean {
    return this.props.actions !== undefined && this.props.actions.length > 0;
  }

  // TypeScript error: implicit any
  addAction(action) {
    const currentActions = this.props.actions || [];
    this.props = {
      ...this.props,
      actions: [...currentActions, action],
    };
  }
}

export function createModal(props: ModalProps): Modal {
  return new Modal(props);
}

// Template literal type
export type ModalEvent = `modal${Capitalize<"open" | "close" | "action">}`;
