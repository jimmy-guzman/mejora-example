// Dropdown component
export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export class Dropdown {
  private props: DropdownProps;

  constructor(props: DropdownProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const select = document.createElement('select');
    select.className = 'dropdown';
    
    if (this.props.placeholder) {
      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = this.props.placeholder;
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    
    this.props.options.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.textContent = option.label;
      opt.disabled = option.disabled || false;
      
      if (option.value === this.props.value) {
        opt.selected = true;
      }
      
      select.appendChild(opt);
    });
    
    select.onchange = (e) => {
      const target = e.target as HTMLSelectElement;
      this.props.onChange(target.value);
    };
    
    container.appendChild(select);
  }

  // TypeScript error: missing return statement
  getValue(): string {
    if (this.props.value) {
      return this.props.value;
    }
    // Missing return for undefined case
  }

  // ESLint error: unused variable
  setValue(value: string): void {
    const oldValue = this.props.value;
    const timestamp = Date.now();
    this.props = { ...this.props, value };
  }

  // ESLint error: prefer-const
  addOption(option: DropdownOption): void {
    let options = [...this.props.options, option];
    this.props = { ...this.props, options };
  }

  // TypeScript error: type mismatch
  getOptionCount(): boolean {
    const count: number = this.props.options.length;
    return count; // Wrong type
  }
}

export function createDropdown(props: DropdownProps): Dropdown {
  return new Dropdown(props);
}
