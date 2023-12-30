import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import getStore from '@/store/store';
import Settings from './Settings';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    MemoryRouter: actual.MemoryRouter,
  };
});

describe('Settings Component', () => {
  it('renders Settings component', () => {
    const store = getStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Settings />
        </MemoryRouter>
      </Provider>
    );
  });
  it('toggles the menu open/closed when clicking the settings button', () => {
    const store = getStore();
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Settings />
        </MemoryRouter>
      </Provider>
    );

    const settingsBtn = screen.getByRole('switch');

    expect(screen.getByRole('switch')).not.toHaveClass('_open');

    fireEvent.click(settingsBtn);
    fireEvent.click(settingsBtn);

    expect(screen.getByRole('switch')).not.toHaveClass('open');
  });
});
