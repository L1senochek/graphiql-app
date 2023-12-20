import ISignUp from '@/model/pages/SignUp/SignUp';
import validationErrors from '@/utils/jsons/ValidationErrors/ValidationErrors.json';
import { UseFormReturn } from 'react-hook-form';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';

export function useValidation(methods: UseFormReturn<ISignUp>) {
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const [errorMessage, setErrorMessage] = useState(validationErrors.eng);
  const { trigger, formState } = methods;

  useEffect(() => {
    setErrorMessage(isEn ? validationErrors.eng : validationErrors.ru);
    const FormErrors = Object.keys(formState.errors) as Array<keyof ISignUp>;
    const hasFormErrors = FormErrors.length > 0;
    if (hasFormErrors) {
      trigger(FormErrors);
    }
  }, [errorMessage, trigger, formState.errors, isEn]);

  const letterCheck = (value: string) =>
    /[a-zA-Z]/.test(value) || errorMessage.password.letter;
  const numberCheck = (value: string) =>
    /\d/.test(value) || errorMessage.password.number;
  const specialCharacterCheck = (value: string) =>
    /[\W_]/.test(value) || errorMessage.password.specialCharacter;
  const startsWithCapitalCheck = (value: string) =>
    /^[A-Z]/.test(value) || errorMessage.name.capitalLetter;
  const containsOnlyLettersCheck = (value: string) =>
    /^[A-Za-z]+$/.test(value) || errorMessage.name.onlyLetters;
  const matchesPreviousPasswordCheck = (value: string) => {
    const { password } = methods.getValues();
    return password === value || errorMessage.confirmPassword.confirm;
  };
  const emailPatternCheck = (value: string) =>
    /^\S+@\S+\.\S+$/.test(value) || errorMessage.email.validEmail;

  const confirmPasswordValidation = {
    required: errorMessage.required,
    validate: {
      matchesPreviousPassword: matchesPreviousPasswordCheck,
    },
  };

  const passwordValidation = {
    required: errorMessage.required,
    validate: {
      letter: letterCheck,
      number: numberCheck,
      specialCharacter: specialCharacterCheck,
    },
    minLength: {
      value: 8,
      message: errorMessage.password.length,
    },
  };

  const emailValidation = {
    required: errorMessage.required,
    validate: {
      emailPattern: emailPatternCheck,
    },
  };

  const nameValidation = {
    required: errorMessage.required,
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
