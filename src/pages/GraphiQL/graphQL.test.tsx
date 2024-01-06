import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import getStore from '@/store/store';
import GraphiQL from './GraphiQL';

vi.mock('@/utils/auth/useAuthFirebase', () => ({
  default: vi.fn(),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    MemoryRouter: actual.MemoryRouter,
    useNavigate: () => vi.fn(),
  };
});

vi.mock('@/utils/auth/isAuth', () => ({
  default: vi.fn(),
}));

describe('GraphiQL Component', () => {
  it('renders GraphiQL component', () => {
    const store = getStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <GraphiQL />
        </MemoryRouter>
      </Provider>
    );
  });
});
