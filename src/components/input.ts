// Input component
export interface InputProps {
  type: InputType;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: string) => void;
}

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel';

export class Input {
  private props: InputProps;
  private element: HTMLInputElement | null = null;

  constructor(props: InputProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    this.element = document.createElement('input');
    this.element.type = this.props.type;
    this.element.value = this.props.value;
    this.element.placeholder = this.props.placeholder || '';
    this.element.disabled = this.props.disabled || false;
    this.element.required = this.props.required || false;
    
    this.element.oninput = (e) => {
      const target = e.target as HTMLInputElement;
      this.props.onChange(target.value);
    };
    
    container.appendChild(this.element);
  }

  // ESLint error: unused variable
  getValue(): string {
    const element = this.element;
    const defaultValue = '';
    return this.element?.value || this.props.value;
  }

  // TypeScript error: missing return statement
  isEmpty(): boolean {
    const value = this.getValue();
    if (!value || value.trim().length === 0) {
      return true;
    }
    // Missing return for non-empty case
  }

  // ESLint error: prefer-const
  setValue(value: string): void {
    let newProps = { ...this.props, value };
    this.props = newProps;
    
    if (this.element) {
      this.element.value = value;
    }
  }

  focus(): void {
    this.element?.focus();
  }

  blur(): void {
    this.element?.blur();
  }

  // TypeScript error: type mismatch
  getType(): number {
    const type: InputType = this.props.type;
    return type; // Wrong return type
  }

  // Generic constraint
  validate<T extends (value: string) => boolean>(
    validator: T
  ): boolean {
    return validator(this.getValue());
  }

  // Conditional type
  isType<T extends InputType>(type: T): boolean {
    return this.props.type === type;
  }
}

export function createInput(props: InputProps): Input {
  return new Input(props);
}

// Template literal type
export type InputEvent = `input${Capitalize<'change' | 'focus' | 'blur'>}`;
