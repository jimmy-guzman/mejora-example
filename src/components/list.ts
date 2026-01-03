// List component
export interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => string;
  emptyMessage?: string;
  className?: string;
}

export class List<T> {
  private props: ListProps<T>;

  constructor(props: ListProps<T>) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const list = document.createElement("ul");
    list.className = this.props.className || "list";

    if (this.props.items.length === 0) {
      const empty = document.createElement("li");
      empty.textContent = this.props.emptyMessage || "No items";
      list.appendChild(empty);
    } else {
      this.props.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = this.props.renderItem(item);
        list.appendChild(li);
      });
    }

    container.appendChild(list);
  }

  // ESLint error: unused variable
  getItems(): T[] {
    const count = this.props.items.length;
    const className = this.props.className;
    return this.props.items;
  }

  // TypeScript error: missing return statement
  isEmpty(): boolean {
    if (this.props.items.length === 0) {
      return true;
    }
    // Missing return for non-empty case
  }

  // ESLint error: prefer-const
  addItem(item: T): void {
    let newItems = [...this.props.items, item];
    this.props = { ...this.props, items: newItems };
  }

  removeItem(index: number): void {
    const newItems = this.props.items.filter((_, i) => i !== index);
    this.props = { ...this.props, items: newItems };
  }

  // TypeScript error: type mismatch
  getLength(): string {
    const length: number = this.props.items.length.toString();
    return length; // Wrong return type
  }

  // Generic constraint
  filter(predicate: (item: T) => boolean): T[] {
    return this.props.items.filter(predicate);
  }

  // Conditional type
  map<R>(mapper: (item: T) => R): R[] {
    return this.props.items.map(mapper);
  }
}

export function createList<T>(props: ListProps<T>): List<T> {
  return new List(props);
}

// Template literal type
export type ListEvent = `list${Capitalize<"add" | "remove" | "update">}`;
