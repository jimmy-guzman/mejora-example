// Alert component
export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  type: AlertType;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export class Alert {
  private props: AlertProps;

  constructor(props: AlertProps) {
    this.props = props;
  }

  // TypeScript error: implicit any
  render(container) {
    const alert = document.createElement('div');
    alert.className = `alert alert--${this.props.type}`;
    
    const message = document.createElement('span');
    message.textContent = this.props.message;
    alert.appendChild(message);
    
    if (this.props.dismissible) {
      const closeBtn = document.createElement('button');
      closeBtn.textContent = '×';
      closeBtn.className = 'alert__close';
      closeBtn.onclick = () => {
        alert.remove();
        if (this.props.onDismiss) {
          this.props.onDismiss();
        }
      };
      alert.appendChild(closeBtn);
    }
    
    container.appendChild(alert);
  }

  // TypeScript error: missing return statement
  getType(): AlertType {
    if (this.props.type) {
      return this.props.type;
    }
    // Missing return for undefined case
  }

  // ESLint error: unused variable
  setMessage(message: string): void {
    const oldMessage = this.props.message;
    const timestamp = Date.now();
    this.props = { ...this.props, message };
  }

  // ESLint error: prefer-const
  setType(type: AlertType): void {
    let newType = type;
    this.props = { ...this.props, type: newType };
  }

  // TypeScript error: type mismatch
  isDismissible(): string {
    const dismissible: boolean = this.props.dismissible || false;
    return dismissible; // Wrong type
  }
}

export function createAlert(props: AlertProps): Alert {
  return new Alert(props);
}
