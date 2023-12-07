import { render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import App from './App';
import { ReactElement } from 'react';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

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
