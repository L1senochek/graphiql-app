import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import getStore from '@/store/store';
import SchemaType from './SchemaType';

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

const mockType = {
  name: 'TestType',
  kind: 'OBJECT',
  fields: [
    {
      name: 'testField',
      type: { name: 'String', kind: 'SCALAR' },
    },
  ],
  description: 'This is a test type',
};

describe('SchemaType Component', () => {
  it('renders SchemaType component', () => {
    const store = getStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SchemaType type={mockType} />
        </MemoryRouter>
      </Provider>
    );
    const kindValue = mockType.fields[0].type.kind;
    expect(screen.getByText(`(${kindValue})`)).toBeInTheDocument();
  });
});
