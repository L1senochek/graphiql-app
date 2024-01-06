import { MemoryRouter } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import { Mock, describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import getStore from '@/store/store';
import GraphiQL from './GraphiQL';
import getSchema from '@/utils/getSchema/getSchema';

vi.mock('@/utils/getSchema/getSchema', () => ({
  default: vi.fn(),
}));

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
  it('renders GraphiQL component', async () => {
    const store = getStore();
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <GraphiQL />
          </MemoryRouter>
        </Provider>
      );
      await Promise.resolve();
    });
  });
  it('dispatches setDocObj with schema data on successful getSchema', async () => {
    const store = getStore();
    const mockSchemaData = {
      data: {
        __schema: {
          types: [
            {
              name: 'Query',
              kind: 'OBJECT',
              description: '',
              fields: [
                {
                  name: 'testField',
                  type: { name: 'String', kind: 'SCALAR' },
                },
              ],
            },
          ],
        },
      },
    };

    (getSchema as Mock).mockResolvedValueOnce(mockSchemaData);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <GraphiQL />
        </MemoryRouter>
      </Provider>
    );

    await act(async () => {
      await Promise.resolve();
    });

    expect(store.getState().documentationSlice.docObj).toEqual(
      mockSchemaData.data
    );
  });
});
