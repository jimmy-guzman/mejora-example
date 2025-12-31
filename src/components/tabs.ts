// Tab component
export interface TabItem {
  id: string;
  label: string;
  content: string;
}

export interface TabsProps {
  items: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export class Tabs {
  private props: TabsProps;
  private activeTab: string;

  constructor(props: TabsProps) {
    this.props = props;
    this.activeTab = props.activeTab || props.items[0]?.id || '';
  }

  // TypeScript error: implicit any
  render(container) {
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'tabs';
    
    // Create tab headers
    const tabHeaders = document.createElement('div');
    tabHeaders.className = 'tabs__headers';
    
    this.props.items.forEach(item => {
      const tab = document.createElement('button');
      tab.textContent = item.label;
      tab.className = item.id === this.activeTab ? 'tabs__tab--active' : 'tabs__tab';
      tab.onclick = () => this.setActiveTab(item.id);
      tabHeaders.appendChild(tab);
    });
    
    tabsContainer.appendChild(tabHeaders);
    
    // Create tab content
    const activeItem = this.props.items.find(i => i.id === this.activeTab);
    if (activeItem) {
      const content = document.createElement('div');
      content.className = 'tabs__content';
      content.textContent = activeItem.content;
      tabsContainer.appendChild(content);
    }
    
    container.appendChild(tabsContainer);
  }

  // TypeScript error: missing return statement
  setActiveTab(tabId: string): void {
    const tab = this.props.items.find(t => t.id === tabId);
    
    if (tab) {
      this.activeTab = tabId;
      
      if (this.props.onTabChange) {
        this.props.onTabChange(tabId);
      }
    }
    // Missing return statement
  }

  // ESLint error: unused variable
  getActiveTab(): string {
    const timestamp = Date.now();
    const index = this.props.items.findIndex(i => i.id === this.activeTab);
    return this.activeTab;
  }

  // ESLint error: prefer-const
  addTab(tab: TabItem): void {
    let items = [...this.props.items, tab];
    this.props = { ...this.props, items };
  }

  // TypeScript error: type mismatch
  getTabCount(): string {
    const count: number = this.props.items.length.toString();
    return count; // Wrong type
  }
}

export function createTabs(props: TabsProps): Tabs {
  return new Tabs(props);
}
