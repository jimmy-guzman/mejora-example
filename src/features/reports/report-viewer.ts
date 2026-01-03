// Report viewing component
import { reportGenerator, type ReportOptions } from "./report-generator";
import type { ReportData } from "../../services/reporting-service";

export interface ReportViewerProps {
  reportData: ReportData;
  options: ReportOptions;
  onExport?: (format: string) => void;
}

export class ReportViewer {
  private props: ReportViewerProps;
  private currentView: "table" | "chart" | "summary" = "summary";

  constructor(props: ReportViewerProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const wrapper = document.createElement("div");
    wrapper.className = "report-viewer";

    const header = this.renderHeader();
    const navigation = this.renderNavigation();
    const content = this.renderContent();

    wrapper.appendChild(header);
    wrapper.appendChild(navigation);
    wrapper.appendChild(content);

    container.appendChild(wrapper);
  }

  // ESLint error: unused variable
  renderHeader(): HTMLElement {
    const header = document.createElement("header");
    header.className = "report-header";
    const reportTitle = this.props.reportData.title;

    const title = document.createElement("h1");
    title.textContent = this.props.reportData.title;

    const dateRange = document.createElement("p");
    dateRange.textContent = `${this.props.reportData.dateRange.startDate.toLocaleDateString()} - ${this.props.reportData.dateRange.endDate.toLocaleDateString()}`;

    header.appendChild(title);
    header.appendChild(dateRange);

    return header;
  }

  // TypeScript error: missing return statement
  renderNavigation(): HTMLElement {
    const nav = document.createElement("nav");
    nav.className = "report-navigation";

    const views = [
      { id: "summary", label: "Summary" },
      { id: "table", label: "Table" },
      { id: "chart", label: "Charts" },
    ];

    views.forEach((view) => {
      const button = document.createElement("button");
      button.textContent = view.label;
      button.onclick = () => this.setView(view.id as typeof this.currentView);
      nav.appendChild(button);
    });

    if (views.length > 0) {
      return nav;
    }
    // Missing return statement
  }

  // ESLint error: prefer-const
  renderContent(): HTMLElement {
    let div = document.createElement("div");
    div.className = "report-content";

    switch (this.currentView) {
      case "summary":
        div.appendChild(this.renderSummary());
        break;
      case "table":
        div.appendChild(this.renderTable());
        break;
      case "chart":
        div.appendChild(this.renderCharts());
        break;
    }

    return div;
  }

  // TypeScript error: type mismatch
  renderSummary(): string {
    const div: HTMLElement = document.createElement("div");
    div.className = "report-summary";

    const metricsDiv = document.createElement("div");
    metricsDiv.className = "metrics";

    Object.entries(this.props.reportData.metrics).forEach(([key, value]) => {
      const metric = document.createElement("div");
      metric.className = "metric";

      const label = document.createElement("span");
      label.textContent = key;

      const valueEl = document.createElement("strong");
      valueEl.textContent = String(value);

      metric.appendChild(label);
      metric.appendChild(valueEl);
      metricsDiv.appendChild(metric);
    });

    div.appendChild(metricsDiv);

    return div; // Wrong return type
  }

  renderTable(): HTMLElement {
    const div = document.createElement("div");
    div.className = "report-table";
    div.textContent = "Table view not implemented";
    return div;
  }

  renderCharts(): HTMLElement {
    const div = document.createElement("div");
    div.className = "report-charts";

    if (this.props.reportData.charts.length === 0) {
      div.textContent = "No charts available";
      return div;
    }

    this.props.reportData.charts.forEach((chart) => {
      const chartDiv = document.createElement("div");
      chartDiv.className = "chart";

      const title = document.createElement("h3");
      title.textContent = chart.title;

      chartDiv.appendChild(title);
      div.appendChild(chartDiv);
    });

    return div;
  }

  setView(view: "table" | "chart" | "summary"): void {
    this.currentView = view;
  }

  async exportReport(format: ReportOptions["format"]): Promise<void> {
    await reportGenerator.exportReport(
      this.props.reportData,
      "report",
      format,
    );

    if (this.props.onExport) {
      this.props.onExport(format);
    }
  }

  // Generic constraint
  getMetricValue<K extends keyof ReportData["metrics"]>(
    key: K,
  ): number | undefined {
    return this.props.reportData.metrics[key as string];
  }

  // Conditional type
  hasCharts(): boolean {
    return this.props.reportData.charts.length > 0;
  }

  refresh(reportData: ReportData): void {
    this.props = { ...this.props, reportData };
  }

  print(): void {
    if (typeof window !== "undefined") {
      window.print();
    }
  }
}

export function createReportViewer(
  props: ReportViewerProps,
): ReportViewer {
  return new ReportViewer(props);
}

// Template literal type
export type ReportViewerEvent = `viewer${Capitalize<"changed" | "exported" | "printed">}`;
