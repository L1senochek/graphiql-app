import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';
import HeadersEditor from '@/components/HeadersEditor/HeadersEditor';
import getStore from '@/store/store';

vi.mock('@/store/slices/headerEditorSlice', async () => {
  const actual = await vi.importActual('@/store/slices/headerEditorSlice');

  return {
    ...actual,
    selectInputValue: vi.fn(() => ''),
    setHeadersInputValue: vi.fn(),
    default: vi.fn(() => ({})),
  };
});

vi.mock('@/store/hooks', () => ({
  useAppDispatch: vi.fn(() => vi.fn()),
  useAppSelector: vi.fn(() => {}),
}));

describe('HeadersEditor Component', () => {
  const store = getStore();

  it('should render HeadersEditor component', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <HeadersEditor />
      </Provider>
    );
    expect(getByPlaceholderText('http://api-example.com')).toBeInTheDocument();
  });

  it('should update the input value on change', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <HeadersEditor />
      </Provider>
    );
    const input = getByPlaceholderText(
      'http://api-example.com'
    ) as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: 'http://new-api-example.com' },
    });
    expect(input.value).toBe('http://new-api-example.com');
  });

  it('should handle focus and blur on the input field', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <HeadersEditor />
      </Provider>
    );
    const input = getByPlaceholderText('http://api-example.com');
    fireEvent.focus(input);
    fireEvent.blur(input);
  });
});
