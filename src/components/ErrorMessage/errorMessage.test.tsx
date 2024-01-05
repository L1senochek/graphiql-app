import { render, RenderResult } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import getStore from '@/store/store';
import ErrorMessage from './ErrorMessage';

vi.mock('react-router-dom', async () => {
  const originalModule = await vi.importActual('react-router-dom');
  return {
    ...originalModule,
    useRouteError: vi.fn(() => new Error('Test Error')),
  };
});

describe('ErrorMessage component tests', () => {
  let component: RenderResult;
  const store = getStore();

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <ErrorMessage />
        </MemoryRouter>
      </Provider>
    );
  });

  it('displays the error message from the route error', () => {
    const { getByText } = component;
    expect(getByText('Test Error')).toBeInTheDocument();
  });
});
