import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { useValidation } from '@/utils/validation/useValidation';
import validationErrors from '@/utils/jsons/ValidationErrors/ValidationErrors.json';
import ISignUp from '@/model/pages/SignUp/SignUp';

vi.mock('react-hook-form', () => ({
  useForm: vi.fn(),
}));

vi.mock('@/store/hooks', () => ({
  useAppSelector: vi.fn(() => {
    return validationErrors.ru;
  }),
}));

describe('useValidation hook', () => {
  let mockUseFormReturn: UseFormReturn<ISignUp>;
  beforeEach(() => {
    mockUseFormReturn = {
      ...useForm<ISignUp>(),
      formState: {
        isDirty: false,
        isSubmitted: false,
        submitCount: 0,
        touchedFields: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValidating: false,
        isValid: false,
        errors: {
          password: {
            type: 'required',
            message: 'Fill out this field',
          },
        },
        isLoading: false,
        disabled: false,
        dirtyFields: {},
      },
      getValues: vi.fn(() => ({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      })) as unknown as UseFormReturn<ISignUp>['getValues'],
      trigger: vi.fn(),
    };
  });

  it('should validate name', async () => {
    const { result } = renderHook(() => useValidation(mockUseFormReturn));

    const lettersMessage = validationErrors.ru.name.onlyLetters;
    const capitalLetterMessage = validationErrors.ru.name.capitalLetter;
    const onlyLettersCheck =
      result.current.nameValidation.validate.containsOnlyLetters;
    const nameWithCapitalCheck =
      result.current.nameValidation.validate.startsWithCapital;

    const validName = 'John';
    expect(onlyLettersCheck(validName)).toEqual(true);
    expect(nameWithCapitalCheck(validName)).toEqual(true);

    const invalidName = '1john';
    expect(onlyLettersCheck(invalidName)).toEqual(lettersMessage);
    expect(nameWithCapitalCheck(invalidName)).toEqual(capitalLetterMessage);
  });

  it('should validate email', async () => {
    const { result } = renderHook(() => useValidation(mockUseFormReturn));

    const errorMessage = validationErrors.ru.email.validEmail;
    const emailPatternCheck =
      result.current.emailValidation.validate.emailPattern;

    const validEmail = 'test@gmail.ru';
    expect(emailPatternCheck(validEmail)).toEqual(true);
    const invalidEmail = 'test@';
    expect(emailPatternCheck(invalidEmail)).toEqual(errorMessage);
  });

  it('should validate password', async () => {
    const { result } = renderHook(() => useValidation(mockUseFormReturn));

    const lettersMessage = validationErrors.ru.password.letter;
    const numberMessage = validationErrors.ru.password.number;
    const specialCharacterMessage =
      validationErrors.ru.password.specialCharacter;
    const letterCheck = result.current.passwordValidation.validate.letter;
    const numberCheck = result.current.passwordValidation.validate.number;
    const specialCharacterCheck =
      result.current.passwordValidation.validate.specialCharacter;

    const validPassword = 'password1!';
    expect(letterCheck(validPassword)).toEqual(true);
    expect(numberCheck(validPassword)).toEqual(true);
    expect(specialCharacterCheck(validPassword)).toEqual(true);

    const invalidPassword = '';
    expect(letterCheck(invalidPassword)).toEqual(lettersMessage);
    expect(numberCheck(invalidPassword)).toEqual(numberMessage);
    expect(specialCharacterCheck(invalidPassword)).toEqual(
      specialCharacterMessage
    );
  });
  it('should validate confirm password', async () => {
    const { result } = renderHook(() => useValidation(mockUseFormReturn));

    const passwordsDoNotMatchMessage =
      validationErrors.ru.confirmPassword.confirm;

    const passwordsMatchCheck =
      result.current.confirmPasswordValidation.validate.matchesPreviousPassword;

    const invalidConfirmPassword = 'password1!';
    expect(passwordsMatchCheck(invalidConfirmPassword)).toEqual(
      passwordsDoNotMatchMessage
    );
  });
});
