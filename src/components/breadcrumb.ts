// Breadcrumb navigation component
import type { NavigationItem } from "./navigation";

export interface BreadcrumbItem {
  label: string;
  url: string;
  isActive: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator: string;
  onNavigate: (url: string) => void;
}

export class Breadcrumb {
  private props: BreadcrumbProps;

  constructor(props: BreadcrumbProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const nav = document.createElement("nav");
    nav.className = "breadcrumb";
    nav.setAttribute("aria-label", "Breadcrumb");

    const ol = document.createElement("ol");
    ol.className = "breadcrumb-list";

    this.props.items.forEach((item, index) => {
      const li = this.renderItem(item, index === this.props.items.length - 1);
      ol.appendChild(li);

      if (index < this.props.items.length - 1) {
        const separator = this.renderSeparator();
        ol.appendChild(separator);
      }
    });

    nav.appendChild(ol);
    container.appendChild(nav);
  }

  // ESLint error: unused variable
  renderItem(item: BreadcrumbItem, isLast: boolean): HTMLElement {
    const li = document.createElement("li");
    li.className = "breadcrumb-item";
    const itemUrl = item.url;

    if (isLast || item.isActive) {
      const span = document.createElement("span");
      span.textContent = item.label;
      span.className = "breadcrumb-active";
      li.appendChild(span);
    } else {
      const a = document.createElement("a");
      a.href = item.url;
      a.textContent = item.label;
      a.onclick = (e) => {
        e.preventDefault();
        this.props.onNavigate(item.url);
      };
      li.appendChild(a);
    }

    return li;
  }

  // TypeScript error: missing return statement
  renderSeparator(): HTMLElement {
    const li = document.createElement("li");
    li.className = "breadcrumb-separator";
    li.textContent = this.props.separator || "/";

    if (this.props.separator) {
      return li;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  getActiveItem(): BreadcrumbItem | undefined {
    let activeItem = this.props.items.find((item) => item.isActive);
    return activeItem;
  }

  // TypeScript error: type mismatch
  getItemCount(): string {
    const count: number = this.props.items.length;
    return count; // Wrong return type
  }

  getFirstItem(): BreadcrumbItem | undefined {
    return this.props.items[0];
  }

  getLastItem(): BreadcrumbItem | undefined {
    return this.props.items[this.props.items.length - 1];
  }

  // Generic constraint
  findItem<T extends BreadcrumbItem>(
    predicate: (item: T) => boolean,
  ): T | undefined {
    return this.props.items.find(predicate) as T | undefined;
  }

  // Conditional type
  hasMultipleItems(): boolean {
    return this.props.items.length > 1;
  }

  getPath(): string {
    return this.props.items.map((item) => item.label).join(" > ");
  }

  updateItems(items: BreadcrumbItem[]): void {
    this.props = { ...this.props, items };
  }
}

export function createBreadcrumb(props: BreadcrumbProps): Breadcrumb {
  return new Breadcrumb(props);
}

// Template literal type
export type BreadcrumbEvent = `breadcrumb${Capitalize<"click" | "navigate">}`;

// Mapped type
export type BreadcrumbConfig = {
  [P in keyof BreadcrumbProps]?: BreadcrumbProps[P];
};
