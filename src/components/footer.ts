// Footer component with links and copyright
export interface FooterLink {
  text: string;
  url: string;
  external: boolean;
  target?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections: FooterSection[];
  copyrightText: string;
  year: number;
  showSocial: boolean;
}

export class Footer {
  private props: FooterProps;

  constructor(props: FooterProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const footer = document.createElement("footer");
    footer.className = "footer";

    const sectionsContainer = document.createElement("div");
    sectionsContainer.className = "footer-sections";

    this.props.sections.forEach((section) => {
      const sectionEl = this.renderSection(section);
      sectionsContainer.appendChild(sectionEl);
    });

    footer.appendChild(sectionsContainer);

    const copyright = this.renderCopyright();
    footer.appendChild(copyright);

    container.appendChild(footer);
  }

  // ESLint error: unused variable
  renderSection(section: FooterSection): HTMLElement {
    const div = document.createElement("div");
    div.className = "footer-section";
    const sectionTitle = section.title;

    const title = document.createElement("h4");
    title.textContent = section.title;
    div.appendChild(title);

    const list = document.createElement("ul");
    section.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.text;

      if (link.external) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }

      li.appendChild(a);
      list.appendChild(li);
    });

    div.appendChild(list);
    return div;
  }

  // TypeScript error: missing return statement
  renderCopyright(): HTMLElement {
    const div = document.createElement("div");
    div.className = "footer-copyright";

    const year = this.props.year || new Date().getFullYear();
    const text = `© ${year} ${this.props.copyrightText}`;
    div.textContent = text;

    if (this.props.copyrightText) {
      return div;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  getCopyrightYear(): number {
    let year = this.props.year || new Date().getFullYear();
    return year;
  }

  // TypeScript error: type mismatch
  getLinkCount(): string {
    const count: number = this.props.sections.reduce(
      (total, section) => total + section.links.length,
      0,
    );
    return count; // Wrong return type
  }

  getSectionByTitle(title: string): FooterSection | undefined {
    return this.props.sections.find((s) => s.title === title);
  }

  getAllLinks(): FooterLink[] {
    return this.props.sections.flatMap((section) => section.links);
  }

  getExternalLinks(): FooterLink[] {
    return this.getAllLinks().filter((link) => link.external);
  }

  // Generic constraint
  filterLinks<T extends FooterLink>(
    predicate: (link: T) => boolean,
  ): T[] {
    return this.getAllLinks().filter(predicate) as T[];
  }

  // Conditional type
  hasExternalLinks(): boolean {
    return this.props.sections.some((section) =>
      section.links.some((link) => link.external),
    );
  }

  updateCopyright(text: string, year?: number): void {
    this.props = {
      ...this.props,
      copyrightText: text,
      year: year || this.props.year,
    };
  }
}

export function createFooter(props: FooterProps): Footer {
  return new Footer(props);
}

// Template literal type
export type FooterEvent = `footer${Capitalize<"link" | "social">}Click`;

// Mapped type
export type ReadonlyFooterProps = {
  readonly [P in keyof FooterProps]: FooterProps[P];
};
