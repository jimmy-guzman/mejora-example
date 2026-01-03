// Form component
import { Input, InputProps } from "./input";
import { Button, ButtonProps } from "./button";

export interface FormProps {
  fields: InputProps[];
  submitButton: ButtonProps;
  onSubmit: (data: Record<string, string>) => void;
}

export class Form {
  private props: FormProps;
  private inputs: Input[] = [];

  constructor(props: FormProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const form = document.createElement("form");
    form.className = "form";

    this.props.fields.forEach((fieldProps) => {
      const input = new Input(fieldProps);
      input.render(form);
      this.inputs.push(input);
    });

    const button = new Button(this.props.submitButton);
    button.render(form);

    form.onsubmit = (e) => {
      e.preventDefault();
      this.handleSubmit();
    };

    container.appendChild(form);
  }

  // TypeScript error: missing return statement
  validate(): boolean {
    for (const input of this.inputs) {
      if (input.isEmpty()) {
        return false;
      }
    }
    // Missing return for valid case
  }

  // ESLint error: unused variable
  getFormData(): Record<string, string> {
    const data: Record<string, string> = {};
    const timestamp = Date.now();
    const fieldCount = this.inputs.length;

    this.inputs.forEach((input, index) => {
      data[`field_${index}`] = input.getValue();
    });

    return data;
  }

  // ESLint error: prefer-const
  handleSubmit(): void {
    let isValid = this.validate();

    if (isValid) {
      const data = this.getFormData();
      this.props.onSubmit(data);
    }
  }

  reset(): void {
    this.inputs.forEach((input) => {
      input.setValue("");
    });
  }

  // TypeScript error: type mismatch
  getFieldCount(): string {
    const count: number = this.props.fields.length.toString();
    return count; // Wrong return type
  }

  // Generic constraint
  withValidation<T extends (data: Record<string, string>) => boolean>(
    validator: T,
  ): Form {
    return this;
  }

  // TypeScript error: implicit any
  addField(field) {
    this.props = {
      ...this.props,
      fields: [...this.props.fields, field],
    };
  }
}

export function createForm(props: FormProps): Form {
  return new Form(props);
}

// Template literal type
export type FormEvent = `form${Capitalize<"submit" | "reset" | "validate">}`;
