import { fireEvent, render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import InputForm from './InputForm';
import type IInputForm from '@/model/components/InputForm/InputForm';
import { describe, expect, test } from 'vitest';

const FormWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const methods = useForm<IInputForm>();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('InputForm', () => {
  test('renders label', () => {
    render(
      <FormWrapper>
        <InputForm registerInput="testInput" titleLabel="Test Label" />
      </FormWrapper>
    );
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
  });
  test('toggles password visibility', async () => {
    const { container } = render(
      <FormWrapper>
        <InputForm registerInput="password" name="password" type="password" />
      </FormWrapper>
    );
    const input = container.querySelector('input[name="password"]');
    expect(input).toHaveAttribute('type', 'password');
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');
  });
});
