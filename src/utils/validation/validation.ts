import ISignUp from '@/model/pages/SignUp/SignUp';
import { UseFormReturn } from 'react-hook-form';

export function useValidation(methods: UseFormReturn<ISignUp>) {
  const confirmPasswordValidation = {
    required: 'Confirm password is required',
    validate: {
      matchesPreviousPassword: (value: string) => {
        const { password } = methods.getValues();
        return password === value || 'Password should match!';
      },
    },
  };

  const passwordValidation = {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must have at least 8 characters',
    },
    pattern: {
      value: /^(?=.*[\p{L}])(?=.*\d)(?=.*[\W_]).{8,}$/u,
      message:
        'Password must contain at least one letter, one number, and one special character',
    },
  };

  const emailValidation = {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Enter valid email',
    },
  };

  const nameValidation = {
    required: 'Name is required',
    pattern: {
      value: /^[A-Z][a-z]*$/,
      message: 'Name must start with a capital letter and contain only letters',
    },
  };

  return {
    confirmPasswordValidation,
    passwordValidation,
    emailValidation,
    nameValidation,
  };
}
