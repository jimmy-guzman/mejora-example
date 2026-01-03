// Card component
export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  footer?: string;
  onClick?: () => void;
}

export class Card {
  private props: CardProps;

  constructor(props: CardProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const card = document.createElement("div");
    card.className = "card";

    if (this.props.imageUrl) {
      const img = document.createElement("img");
      img.src = this.props.imageUrl;
      img.alt = this.props.title;
      card.appendChild(img);
    }

    const title = document.createElement("h3");
    title.textContent = this.props.title;
    card.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = this.props.description;
    card.appendChild(desc);

    if (this.props.footer) {
      const footer = document.createElement("div");
      footer.textContent = this.props.footer;
      card.appendChild(footer);
    }

    if (this.props.onClick) {
      card.onclick = this.props.onClick;
    }

    container.appendChild(card);
  }

  // ESLint error: unused variable
  setTitle(title: string): void {
    const oldTitle = this.props.title;
    const timestamp = Date.now();
    this.props = { ...this.props, title };
  }

  // TypeScript error: missing return statement
  hasImage(): boolean {
    if (this.props.imageUrl && this.props.imageUrl.length > 0) {
      return true;
    }
    // Missing return for no image case
  }

  // ESLint error: prefer-const
  setDescription(description: string): void {
    let newProps = { ...this.props, description };
    this.props = newProps;
  }

  setImage(imageUrl: string): void {
    this.props = { ...this.props, imageUrl };
  }

  // TypeScript error: type mismatch
  getTitle(): boolean {
    const title: string = this.props.title;
    return title; // Wrong return type
  }

  // Generic constraint
  withMetadata<T extends Record<string, unknown>>(metadata: T): Card {
    return this;
  }
}

export function createCard(props: CardProps): Card {
  return new Card(props);
}

// Template literal type
export type CardEvent = `card${Capitalize<"click" | "hover" | "focus">}`;
