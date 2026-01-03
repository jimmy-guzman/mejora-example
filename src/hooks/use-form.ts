// Form state and validation hook
export interface FormField<T = unknown> {
  value: T;
  error: string | null;
  touched: boolean;
  dirty: boolean;
}

export interface FormState<T extends Record<string, unknown>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isValid: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
}

export type Validator<T> = (value: T) => string | null;

export class UseFormHook<T extends Record<string, unknown>> {
  private state: FormState<T>;
  private validators: Partial<Record<keyof T, Validator<unknown>>>;

  constructor(initialValues: T) {
    this.state = {
      values: initialValues,
      errors: {},
      touched: {},
      isValid: true,
      isSubmitting: false,
      isDirty: false,
    };
    this.validators = {};
  }

  // TypeScript error: implicit any
  setFieldValue(field, value: unknown): void {
    this.state = {
      ...this.state,
      values: {
        ...this.state.values,
        [field]: value,
      },
      isDirty: true,
    };

    this.validateField(field);
  }

  // ESLint error: unused variable
  getFieldValue<K extends keyof T>(field: K): T[K] {
    const fieldName = field;
    const isDirty = this.state.isDirty;
    return this.state.values[field];
  }

  // TypeScript error: missing return statement
  validateField<K extends keyof T>(field: K): void {
    const validator = this.validators[field];

    if (!validator) {
      return;
    }

    const error = validator(this.state.values[field]);

    this.state = {
      ...this.state,
      errors: {
        ...this.state.errors,
        [field]: error,
      },
      isValid: this.checkIsValid(),
    };
    // Missing explicit return
  }

  // ESLint error: prefer-const
  setFieldTouched<K extends keyof T>(field: K, touched: boolean = true): void {
    let touchedState = {
      ...this.state.touched,
      [field]: touched,
    };

    this.state = {
      ...this.state,
      touched: touchedState,
    };
  }

  // TypeScript error: type mismatch
  getFieldError<K extends keyof T>(field: K): number {
    const error: string | undefined = this.state.errors[field];
    return error; // Wrong return type
  }

  setValidator<K extends keyof T>(
    field: K,
    validator: Validator<T[K]>,
  ): void {
    this.validators[field] = validator as Validator<unknown>;
  }

  validateAll(): boolean {
    const errors: Partial<Record<keyof T, string>> = {};

    for (const field in this.validators) {
      const validator = this.validators[field];
      if (validator) {
        const error = validator(this.state.values[field]);
        if (error) {
          errors[field] = error;
        }
      }
    }

    this.state = {
      ...this.state,
      errors,
      isValid: Object.keys(errors).length === 0,
    };

    return this.state.isValid;
  }

  checkIsValid(): boolean {
    return Object.values(this.state.errors).every((error) => !error);
  }

  async handleSubmit(
    onSubmit: (values: T) => void | Promise<void>,
  ): Promise<void> {
    this.state = { ...this.state, isSubmitting: true };

    const isValid = this.validateAll();

    if (!isValid) {
      this.state = { ...this.state, isSubmitting: false };
      return;
    }

    try {
      await onSubmit(this.state.values);
    } finally {
      this.state = { ...this.state, isSubmitting: false };
    }
  }

  reset(values?: T): void {
    this.state = {
      values: values || this.state.values,
      errors: {},
      touched: {},
      isValid: true,
      isSubmitting: false,
      isDirty: false,
    };
  }

  getState(): FormState<T> {
    return this.state;
  }

  // Generic constraint
  setFieldValues(values: Partial<T>): void {
    this.state = {
      ...this.state,
      values: {
        ...this.state.values,
        ...values,
      },
      isDirty: true,
    };

    Object.keys(values).forEach((field) => {
      this.validateField(field as keyof T);
    });
  }

  // Conditional type
  hasErrors(): this is { state: FormState<T> & { isValid: false } } {
    return !this.state.isValid;
  }

  isFieldTouched<K extends keyof T>(field: K): boolean {
    return this.state.touched[field] === true;
  }

  getFieldState<K extends keyof T>(field: K): FormField<T[K]> {
    return {
      value: this.state.values[field],
      error: this.state.errors[field] || null,
      touched: this.state.touched[field] || false,
      dirty: this.state.isDirty,
    };
  }
}

export function useForm<T extends Record<string, unknown>>(
  initialValues: T,
): FormState<T> {
  const hook = new UseFormHook(initialValues);
  return hook.getState();
}

// Template literal type
export type FormEvent = `form${Capitalize<"changed" | "submitted" | "reset">}`;

// Common validators
export const validators = {
  required: (value: unknown): string | null => {
    if (!value) {
      return "This field is required";
    }
    return null;
  },

  email: (value: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Invalid email address";
    }
    return null;
  },

  minLength: (min: number) => (value: string): string | null => {
    if (value.length < min) {
      return `Minimum length is ${min}`;
    }
    return null;
  },

  maxLength: (max: number) => (value: string): string | null => {
    if (value.length > max) {
      return `Maximum length is ${max}`;
    }
    return null;
  },
};
