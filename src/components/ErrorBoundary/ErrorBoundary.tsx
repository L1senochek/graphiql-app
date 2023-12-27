import React, { ErrorInfo } from 'react';
import Btn from '@/components/Btn/Btn';
import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '@/model/components/ErrorBoundary/ErrorBoundary';

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, btnClicked: false };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true, btnClicked: false };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReloadClick = (): void => {
    this.setState({ btnClicked: true });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1 className="error-boundary__title">Something went wrong.</h1>
          <Btn className="error-boundary__btn" onClick={this.handleReloadClick}>
            Back
          </Btn>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
