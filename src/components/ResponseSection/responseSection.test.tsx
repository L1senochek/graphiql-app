import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import getStore from '@/store/store';
import ResponseSection from './ResponseSection';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    MemoryRouter: actual.MemoryRouter,
  };
});

describe('ResponseSection Component', () => {
  it('renders ResponseSection component', () => {
    const store = getStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ResponseSection />
        </MemoryRouter>
      </Provider>
    );
  });
});
