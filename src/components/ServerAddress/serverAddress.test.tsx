import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ServerAddress from './ServerAddress';
import getStore from '@/store/store';
import { Store, UnknownAction } from '@reduxjs/toolkit';
import { setServerAddressInputValue } from '@/store/slices/serverAddressSlice/serverAddressSlice';
import { setDocLoading } from '@/store/slices/documentationSlice/documentationSlice';

describe('ServerAddress Component', () => {
  let store: Store<unknown, UnknownAction, object>;
  beforeEach(() => {
    store = getStore();
    store.dispatch = vi.fn();
  });
  afterEach(() => {
    cleanup();
  });

  it('should render the ServerAddress component', () => {
    render(
      <Provider store={store}>
        <ServerAddress />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('http://api-example.com');
    expect(inputElement).toBeInTheDocument();
  });

  it('should dispatch actions on button click after input change', () => {
    render(
      <Provider store={store}>
        <ServerAddress />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('http://api-example.com');
    const buttonElement = screen.getByRole('button');

    fireEvent.change(inputElement, { target: { value: 'http://new-api.com' } });

    fireEvent.click(buttonElement);

    expect(store.dispatch).toHaveBeenCalled();

    expect(store.dispatch).toHaveBeenCalledWith(
      setServerAddressInputValue('http://new-api.com')
    );
    expect(store.dispatch).toHaveBeenCalledWith(setDocLoading(true));
  });
});
