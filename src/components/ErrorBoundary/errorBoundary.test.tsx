import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import getStore from '@/store/store';
import ErrorBoundary from './ErrorBoundary';
import IconRun from '../IconRun/IconRun';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    MemoryRouter: actual.MemoryRouter,
  };
});

describe('ErrorBoundary Component', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('renders ErrorBoundary component', () => {
    const store = getStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ErrorBoundary>
            <IconRun />
          </ErrorBoundary>
        </MemoryRouter>
      </Provider>
    );
  });
  it('displays an error message', () => {
    const ProblemChild = () => {
      throw new Error('Error problem child');
      return <div></div>;
    };
    const store = getStore();
    const spy = vi.spyOn(global.console, 'error').mockImplementation(() => {});
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ErrorBoundary>
            <ProblemChild />
          </ErrorBoundary>
        </MemoryRouter>
      </Provider>
    );

    expect(getByText(/something went wrong/i)).toBeInTheDocument();
    expect(getByText('Back')).toBeInTheDocument();
    spy.mockRestore();
  });
  it('does not display an error message', () => {
    const store = getStore();
    const { queryByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ErrorBoundary>
            <IconRun />
          </ErrorBoundary>
        </MemoryRouter>
      </Provider>
    );
    expect(queryByText(/something went wrong/i)).not.toBeInTheDocument();
  });
});
