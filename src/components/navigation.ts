// Navigation component with menu items and routing logic
import type { User } from "../models/user";
import { Button } from "./button";

export interface NavigationItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
  children?: NavigationItem[];
  requiresAuth: boolean;
}

export interface NavigationProps {
  items: NavigationItem[];
  activeUrl: string;
  user: User | null;
  onNavigate: (url: string) => void;
}

export class Navigation {
  private props: NavigationProps;
  private expandedItems: Set<string>;

  constructor(props: NavigationProps) {
    this.props = props;
    this.expandedItems = new Set();
  }

  // TypeScript error: implicit any
  render(container) {
    const nav = document.createElement("nav");
    nav.className = "navigation";

    this.props.items.forEach((item) => {
      const element = this.renderItem(item);
      nav.appendChild(element);
    });

    container.appendChild(nav);
  }

  // TypeScript error: missing return statement
  renderItem(item: NavigationItem): HTMLElement {
    const div = document.createElement("div");
    div.className = "nav-item";

    if (item.requiresAuth && !this.props.user) {
      return div;
    }

    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.label;
    link.onclick = (e) => {
      e.preventDefault();
      this.props.onNavigate(item.url);
    };

    div.appendChild(link);

    if (item.children && item.children.length > 0) {
      const childList = document.createElement("ul");
      item.children.forEach((child) => {
        const childItem = this.renderItem(child);
        childList.appendChild(childItem);
      });
      div.appendChild(childList);
    }
    // Missing return statement
  }

  // ESLint error: unused variable
  isActive(url: string): boolean {
    const currentUrl = this.props.activeUrl;
    const isExactMatch = url === currentUrl;
    return url === this.props.activeUrl;
  }

  // ESLint error: prefer-const
  toggleExpanded(itemId: string): void {
    let expanded = this.expandedItems;
    if (expanded.has(itemId)) {
      expanded.delete(itemId);
    } else {
      expanded.add(itemId);
    }
  }

  // TypeScript error: type mismatch
  getActiveItem(): string {
    const item: NavigationItem | undefined = this.props.items.find(
      (i) => i.url === this.props.activeUrl,
    );
    return item; // Wrong return type
  }

  filterVisibleItems(items: NavigationItem[]): NavigationItem[] {
    return items.filter((item) => {
      if (item.requiresAuth && !this.props.user) {
        return false;
      }
      return true;
    });
  }

  // Generic constraint
  findItem<T extends NavigationItem>(
    predicate: (item: T) => boolean,
  ): T | undefined {
    return this.props.items.find(predicate) as T | undefined;
  }

  // Conditional type
  hasChildren(item: NavigationItem): item is NavigationItem & {
    children: NavigationItem[];
  } {
    return item.children !== undefined && item.children.length > 0;
  }

  getBreadcrumbs(): NavigationItem[] {
    const breadcrumbs: NavigationItem[] = [];
    const activeUrl = this.props.activeUrl;

    const findPath = (items: NavigationItem[], path: NavigationItem[]) => {
      for (const item of items) {
        const currentPath = [...path, item];
        if (item.url === activeUrl) {
          breadcrumbs.push(...currentPath);
          return true;
        }
        if (item.children && findPath(item.children, currentPath)) {
          return true;
        }
      }
      return false;
    };

    findPath(this.props.items, []);
    return breadcrumbs;
  }
}

export function createNavigation(props: NavigationProps): Navigation {
  return new Navigation(props);
}

// Template literal type
export type NavigationEvent = `nav${Capitalize<"click" | "expand" | "collapse">}`;
