import ISignUp from '@/model/pages/SignUp/SignUp';
import { UseFormReturn } from 'react-hook-form';

export function useValidation(methods: UseFormReturn<ISignUp>) {
  const passwordLetterCheck = (value: string) =>
    /[a-zA-Z]/.test(value) || 'Password must contain one letter';
  const passwordNumberCheck = (value: string) =>
    /\d/.test(value) || 'Password must contain one number';
  const passwordSpecialCharacterCheck = (value: string) =>
    /[\W_]/.test(value) || 'Password must contain one special character';
  const startsWithCapitalCheck = (value: string) =>
    /^[A-Z]/.test(value) || 'Name must start with a capital letter';
  const containsOnlyLettersCheck = (value: string) =>
    /^[A-Za-z]+$/.test(value) || 'Name must contain only letters';

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
    validate: {
      letter: passwordLetterCheck,
      number: passwordNumberCheck,
      specialCharacter: passwordSpecialCharacterCheck,
    },
    minLength: {
      value: 8,
      message: 'Password must have 8 characters',
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
    validate: {
      startsWithCapital: startsWithCapitalCheck,
      containsOnlyLetters: containsOnlyLettersCheck,
    },
  };

  return {
    confirmPasswordValidation,
    passwordValidation,
    emailValidation,
    nameValidation,
  };
}
