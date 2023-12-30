import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
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
});
