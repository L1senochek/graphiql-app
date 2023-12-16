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
    pattern: {
      value: /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{4,}$/,
      message: 'Must match the pattern 1Ff!',
    },
  };

  return { confirmPasswordValidation, passwordValidation };
}
