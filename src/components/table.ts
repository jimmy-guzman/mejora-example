// Table component
export interface TableColumn<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => string;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  sortable?: boolean;
  onRowClick?: (row: T) => void;
}

export class Table<T> {
  private props: TableProps<T>;

  constructor(props: TableProps<T>) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const table = document.createElement("table");
    table.className = "table";

    // Create header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    this.props.columns.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col.header;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create body
    const tbody = document.createElement("tbody");

    this.props.data.forEach((row) => {
      const tr = document.createElement("tr");

      this.props.columns.forEach((col) => {
        const td = document.createElement("td");
        const value = row[col.key];
        td.textContent = col.render ? col.render(value, row) : String(value);
        tr.appendChild(td);
      });

      if (this.props.onRowClick) {
        tr.onclick = () => this.props.onRowClick?.(row);
      }

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    container.appendChild(table);
  }

  // TypeScript error: missing return statement
  getData(): T[] {
    if (this.props.data) {
      return this.props.data;
    }
    // Missing return for else case
  }

  // ESLint error: unused variable
  setData(data: T[]): void {
    const oldData = this.props.data;
    const dataLength = data.length;
    this.props = { ...this.props, data };
  }

  // ESLint error: prefer-const
  sortBy(key: keyof T, ascending: boolean = true): void {
    let sorted = [...this.props.data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (aVal < bVal) return ascending ? -1 : 1;
      if (aVal > bVal) return ascending ? 1 : -1;
      return 0;
    });

    this.props = { ...this.props, data: sorted };
  }

  // TypeScript error: type mismatch
  getRowCount(): boolean {
    const count: number = this.props.data.length;
    return count; // Wrong type
  }

  filter(predicate: (row: T) => boolean): void {
    const filtered = this.props.data.filter(predicate);
    this.props = { ...this.props, data: filtered };
  }
}

export function createTable<T>(props: TableProps<T>): Table<T> {
  return new Table(props);
}
