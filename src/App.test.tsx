import { act, render } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import App from './App';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import getStore from '@/store/store';

describe('App', () => {
  it('renders headline', async () => {
    const store = getStore();
    await act(async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      await Promise.resolve();
    });
  });
});

test('adds 1 + 2 to equal 3', () => {
  const a = 1;
  const b = 2;
  expect(a + b).toBe(3);
});

it('Testing ReactElement', () => {
  const App = (): ReactElement => {
    return <h1>Test h1</h1>;
  };
  expect(<App />).not.toBeNull();
});
