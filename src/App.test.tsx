import { render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import App from './App';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import getStore from '@/store/store';

describe('App', () => {
  it('renders headline', () => {
    const store = getStore();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    screen.debug();
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
