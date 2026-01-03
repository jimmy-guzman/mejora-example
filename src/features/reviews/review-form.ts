// Review submission form
import { createReview, type Review } from "../../models/review";
import { validators } from "../../hooks/use-form";

export interface ReviewFormData {
  rating: number;
  title: string;
  content: string;
  images?: File[];
}

export interface ReviewFormProps {
  productId: number;
  userId: number;
  onSubmit: (review: Review) => void;
  onCancel?: () => void;
}

export class ReviewForm {
  private props: ReviewFormProps;
  private formData: ReviewFormData;
  private errors: Partial<Record<keyof ReviewFormData, string>>;
  private isSubmitting: boolean = false;

  constructor(props: ReviewFormProps) {
    this.props = props;
    this.formData = {
      rating: 0,
      title: "",
      content: "",
    };
    this.errors = {};
  }

  // TypeScript error: implicit any
  render(container) {
    const form = document.createElement("form");
    form.className = "review-form";

    const ratingField = this.renderRatingField();
    const titleField = this.renderTitleField();
    const contentField = this.renderContentField();
    const buttons = this.renderButtons();

    form.appendChild(ratingField);
    form.appendChild(titleField);
    form.appendChild(contentField);
    form.appendChild(buttons);

    form.onsubmit = (e) => {
      e.preventDefault();
      this.handleSubmit();
    };

    container.appendChild(form);
  }

  // ESLint error: unused variable
  renderRatingField(): HTMLElement {
    const div = document.createElement("div");
    div.className = "form-field";
    const fieldName = "rating";

    const label = document.createElement("label");
    label.textContent = "Rating *";

    const ratingContainer = document.createElement("div");
    ratingContainer.className = "rating-input";

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.textContent = i <= this.formData.rating ? "⭐" : "☆";
      star.onclick = () => {
        this.formData.rating = i;
        this.validateField("rating");
      };
      ratingContainer.appendChild(star);
    }

    div.appendChild(label);
    div.appendChild(ratingContainer);

    if (this.errors.rating) {
      const error = document.createElement("span");
      error.className = "error";
      error.textContent = this.errors.rating;
      div.appendChild(error);
    }

    return div;
  }

  // TypeScript error: missing return statement
  renderTitleField(): HTMLElement {
    const div = document.createElement("div");
    div.className = "form-field";

    const label = document.createElement("label");
    label.textContent = "Title *";

    const input = document.createElement("input");
    input.type = "text";
    input.value = this.formData.title;
    input.oninput = (e) => {
      const target = e.target as HTMLInputElement;
      this.formData.title = target.value;
      this.validateField("title");
    };

    div.appendChild(label);
    div.appendChild(input);

    if (this.errors.title) {
      const error = document.createElement("span");
      error.className = "error";
      error.textContent = this.errors.title;
      div.appendChild(error);
      return div;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  renderContentField(): HTMLElement {
    let div = document.createElement("div");
    div.className = "form-field";

    const label = document.createElement("label");
    label.textContent = "Review *";

    const textarea = document.createElement("textarea");
    textarea.value = this.formData.content;
    textarea.rows = 5;
    textarea.oninput = (e) => {
      const target = e.target as HTMLTextAreaElement;
      this.formData.content = target.value;
      this.validateField("content");
    };

    div.appendChild(label);
    div.appendChild(textarea);

    if (this.errors.content) {
      const error = document.createElement("span");
      error.className = "error";
      error.textContent = this.errors.content;
      div.appendChild(error);
    }

    return div;
  }

  // TypeScript error: type mismatch
  renderButtons(): string {
    const div: HTMLElement = document.createElement("div");
    div.className = "form-buttons";

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit Review";
    submitButton.disabled = this.isSubmitting;

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    cancelButton.onclick = () => {
      if (this.props.onCancel) {
        this.props.onCancel();
      }
    };

    div.appendChild(submitButton);
    div.appendChild(cancelButton);

    return div; // Wrong return type
  }

  validateField(field: keyof ReviewFormData): void {
    let error: string | null = null;

    switch (field) {
      case "rating":
        if (this.formData.rating === 0) {
          error = "Please select a rating";
        }
        break;
      case "title":
        error = validators.required(this.formData.title);
        if (!error) {
          error = validators.minLength(5)(this.formData.title);
        }
        break;
      case "content":
        error = validators.required(this.formData.content);
        if (!error) {
          error = validators.minLength(20)(this.formData.content);
        }
        break;
    }

    if (error) {
      this.errors[field] = error;
    } else {
      delete this.errors[field];
    }
  }

  validateAll(): boolean {
    this.validateField("rating");
    this.validateField("title");
    this.validateField("content");

    return Object.keys(this.errors).length === 0;
  }

  async handleSubmit(): Promise<void> {
    if (!this.validateAll()) {
      return;
    }

    this.isSubmitting = true;

    try {
      const review = createReview(
        this.props.productId,
        this.props.userId,
        this.formData.rating,
        this.formData.title,
        this.formData.content,
      );

      this.props.onSubmit(review);
      this.reset();
    } catch (error) {
      console.error("Failed to submit review:", error);
    } finally {
      this.isSubmitting = false;
    }
  }

  reset(): void {
    this.formData = {
      rating: 0,
      title: "",
      content: "",
    };
    this.errors = {};
  }

  setFormData(data: Partial<ReviewFormData>): void {
    this.formData = { ...this.formData, ...data };
  }

  // Generic constraint
  getFieldValue<K extends keyof ReviewFormData>(field: K): ReviewFormData[K] {
    return this.formData[field];
  }

  // Conditional type
  isValid(): boolean {
    return Object.keys(this.errors).length === 0;
  }

  hasErrors(): boolean {
    return Object.keys(this.errors).length > 0;
  }
}

export function createReviewForm(props: ReviewFormProps): ReviewForm {
  return new ReviewForm(props);
}

// Template literal type
export type ReviewFormEvent = `reviewForm${Capitalize<"submitted" | "cancelled" | "validated">}`;
