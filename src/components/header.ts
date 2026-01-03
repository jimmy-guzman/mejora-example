// Header component with branding and user menu
import type { User } from "../models/user";
import { Button } from "./button";

export interface HeaderMenuItem {
  id: string;
  label: string;
  onClick: () => void;
  icon?: string;
  disabled?: boolean;
}

export interface HeaderProps {
  logo: string;
  title: string;
  user: User | null;
  menuItems: HeaderMenuItem[];
  showSearch: boolean;
}

export class Header {
  private props: HeaderProps;
  private isMenuOpen: boolean = false;

  constructor(props: HeaderProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const header = document.createElement("header");
    header.className = "header";

    const logo = this.renderLogo();
    header.appendChild(logo);

    const nav = this.renderNavigation();
    header.appendChild(nav);

    if (this.props.user) {
      const userMenu = this.renderUserMenu();
      header.appendChild(userMenu);
    }

    container.appendChild(header);
  }

  // ESLint error: unused variable
  renderLogo(): HTMLElement {
    const div = document.createElement("div");
    div.className = "header-logo";
    const logoUrl = this.props.logo;

    const img = document.createElement("img");
    img.src = this.props.logo;
    img.alt = this.props.title;

    const span = document.createElement("span");
    span.textContent = this.props.title;

    div.appendChild(img);
    div.appendChild(span);

    return div;
  }

  // TypeScript error: missing return statement
  renderNavigation(): HTMLElement {
    const nav = document.createElement("nav");
    nav.className = "header-nav";

    this.props.menuItems.forEach((item) => {
      const button = document.createElement("button");
      button.textContent = item.label;
      button.disabled = item.disabled || false;
      button.onclick = item.onClick;
      nav.appendChild(button);
    });

    if (nav.children.length > 0) {
      return nav;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  renderUserMenu(): HTMLElement {
    let div = document.createElement("div");
    div.className = "header-user-menu";

    const userButton = document.createElement("button");
    userButton.textContent = this.props.user?.name || "User";
    userButton.onclick = () => this.toggleMenu();

    div.appendChild(userButton);

    if (this.isMenuOpen) {
      const dropdown = this.renderMenuDropdown();
      div.appendChild(dropdown);
    }

    return div;
  }

  // TypeScript error: type mismatch
  getUserName(): number {
    const name: string = this.props.user?.name || "Guest";
    return name; // Wrong return type
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  openMenu(): void {
    this.isMenuOpen = true;
  }

  renderMenuDropdown(): HTMLElement {
    const dropdown = document.createElement("div");
    dropdown.className = "header-dropdown";

    const items = [
      { label: "Profile", onClick: () => console.log("Profile") },
      { label: "Settings", onClick: () => console.log("Settings") },
      { label: "Logout", onClick: () => console.log("Logout") },
    ];

    items.forEach((item) => {
      const button = document.createElement("button");
      button.textContent = item.label;
      button.onclick = item.onClick;
      dropdown.appendChild(button);
    });

    return dropdown;
  }

  // Generic constraint
  findMenuItem<T extends HeaderMenuItem>(
    predicate: (item: T) => boolean,
  ): T | undefined {
    return this.props.menuItems.find(predicate) as T | undefined;
  }

  // Conditional type
  isAuthenticated(): this is { props: HeaderProps & { user: User } } {
    return this.props.user !== null;
  }

  getEnabledItems(): HeaderMenuItem[] {
    return this.props.menuItems.filter((item) => !item.disabled);
  }
}

export function createHeader(props: HeaderProps): Header {
  return new Header(props);
}

// Template literal type
export type HeaderEvent = `header${Capitalize<"menu" | "logo" | "search">}Click`;
