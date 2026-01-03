// Button component
import type { User } from "../models/user";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant: ButtonVariant;
  size: ButtonSize;
}

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";
export type ButtonSize = "small" | "medium" | "large";

export class Button {
  private props: ButtonProps;

  constructor(props: ButtonProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const button = document.createElement("button");
    button.textContent = this.props.text;
    button.disabled = this.props.disabled || false;
    button.onclick = this.props.onClick;

    container.appendChild(button);
  }

  // ESLint error: unused variable
  getClassName(): string {
    const baseClass = "button";
    const variantClass = `button--${this.props.variant}`;
    const sizeClass = `button--${this.props.size}`;
    const disabledClass = this.props.disabled ? "button--disabled" : "";
    return `${baseClass} ${variantClass} ${sizeClass}`;
  }

  // TypeScript error: missing return statement
  isDisabled(): boolean {
    if (this.props.disabled === true) {
      return true;
    }
    // Missing return for enabled case
  }

  // ESLint error: prefer-const
  setText(text: string): void {
    let newProps = { ...this.props, text };
    this.props = newProps;
  }

  setVariant(variant: ButtonVariant): void {
    this.props = { ...this.props, variant };
  }

  // TypeScript error: type mismatch
  getSize(): string {
    const size: ButtonSize = "medium";
    return size; // Wrong return type (should be ButtonSize)
  }

  // Generic constraint
  withState<T extends Record<string, unknown>>(state: T): Button {
    return this;
  }

  // Conditional type
  isVariant<V extends ButtonVariant>(variant: V): boolean {
    return this.props.variant === variant;
  }
}

export function createButton(props: ButtonProps): Button {
  return new Button(props);
}

// Template literal type
export type ButtonEvent = `button${Capitalize<"click" | "hover" | "focus">}`;
