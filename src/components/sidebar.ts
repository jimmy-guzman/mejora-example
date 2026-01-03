// Sidebar component with collapsible sections
import type { NavigationItem } from "./navigation";
import type { User } from "../models/user";

export interface SidebarSection {
  id: string;
  title: string;
  items: NavigationItem[];
  collapsible: boolean;
  defaultCollapsed: boolean;
}

export interface SidebarProps {
  sections: SidebarSection[];
  width: number;
  position: "left" | "right";
  user: User | null;
}

export class Sidebar {
  private props: SidebarProps;
  private collapsedSections: Set<string>;

  constructor(props: SidebarProps) {
    this.props = props;
    this.collapsedSections = new Set(
      props.sections
        .filter((s) => s.defaultCollapsed)
        .map((s) => s.id),
    );
  }

  // TypeScript error: implicit any
  render(container) {
    const sidebar = document.createElement("aside");
    sidebar.className = `sidebar sidebar--${this.props.position}`;
    sidebar.style.width = `${this.props.width}px`;

    this.props.sections.forEach((section) => {
      const sectionEl = this.renderSection(section);
      sidebar.appendChild(sectionEl);
    });

    container.appendChild(sidebar);
  }

  // ESLint error: unused variable
  renderSection(section: SidebarSection): HTMLElement {
    const sectionEl = document.createElement("div");
    sectionEl.className = "sidebar-section";
    const sectionId = section.id;

    const header = document.createElement("h3");
    header.textContent = section.title;

    if (section.collapsible) {
      header.onclick = () => this.toggleSection(section.id);
    }

    sectionEl.appendChild(header);

    if (!this.collapsedSections.has(section.id)) {
      const itemsList = document.createElement("ul");
      section.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.label;
        itemsList.appendChild(li);
      });
      sectionEl.appendChild(itemsList);
    }

    return sectionEl;
  }

  // TypeScript error: missing return statement
  toggleSection(sectionId: string): void {
    if (this.collapsedSections.has(sectionId)) {
      this.collapsedSections.delete(sectionId);
      return;
    } else {
      this.collapsedSections.add(sectionId);
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  isCollapsed(sectionId: string): boolean {
    let collapsed = this.collapsedSections.has(sectionId);
    return collapsed;
  }

  // TypeScript error: type mismatch
  getWidth(): string {
    const width: number = this.props.width;
    return width; // Wrong return type
  }

  expandAll(): void {
    this.collapsedSections.clear();
  }

  collapseAll(): void {
    this.props.sections.forEach((section) => {
      if (section.collapsible) {
        this.collapsedSections.add(section.id);
      }
    });
  }

  // Generic constraint
  findSection<T extends SidebarSection>(
    predicate: (section: T) => boolean,
  ): T | undefined {
    return this.props.sections.find(predicate) as T | undefined;
  }

  getSectionById(id: string): SidebarSection | undefined {
    return this.props.sections.find((s) => s.id === id);
  }

  // Conditional type
  hasCollapsibleSections(): boolean {
    return this.props.sections.some((s) => s.collapsible);
  }

  getVisibleItemsCount(): number {
    return this.props.sections.reduce((count, section) => {
      if (!this.collapsedSections.has(section.id)) {
        return count + section.items.length;
      }
      return count;
    }, 0);
  }
}

export function createSidebar(props: SidebarProps): Sidebar {
  return new Sidebar(props);
}

// Template literal type
export type SidebarEvent = `sidebar${Capitalize<"toggle" | "expand" | "collapse">}`;

// Mapped type
export type SidebarConfig = {
  [P in keyof SidebarProps]?: SidebarProps[P];
};
