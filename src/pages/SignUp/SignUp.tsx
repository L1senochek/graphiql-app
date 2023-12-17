import { SubmitHandler, useForm } from 'react-hook-form';
import AuthForm from '@/components/AuthForm/AuthForm';
import IInputForm from '@/model/components/InputForm/InputForm';
import contentJson from '@/utils/jsons/SignUpContent/signUpContent.json';
import { SIGN_IN_PATH } from '@/utils/const/const';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useValidation } from '@/utils/validation/validation';
import { useNavigate } from 'react-router';
import { GRAPHI_QL_PATH } from '@/utils/const/const';
import { useAppDispatch } from '@/store/hooks';
import { registerWithEmailAndPassword } from '@/utils/firebase/firebase';
import { setAuth } from '@/store/slices/AuthSlice';
import ISignUp from '@/model/pages/SignUp/SignUp';

const SignUp: React.FC = (): JSX.Element => {
  const methods = useForm({
    mode: 'onChange',
  });
  const {
    confirmPasswordValidation,
    passwordValidation,
    emailValidation,
    nameValidation,
  } = useValidation(methods);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;

  const signUpformFields: IInputForm[] = [
    {
      registerInput: 'name',
      titleLabel: content.inputName.titleLabel,
      placeholder: content.inputName.placeholder,
      registerValidation: nameValidation,
    },
    {
      registerInput: 'email',
      titleLabel: content.inputEmail.titleLabel,
      placeholder: content.inputEmail.placeholder,
      registerValidation: emailValidation,
    },
    {
      registerInput: 'password',
      titleLabel: content.inputPassword.titleLabel,
      placeholder: content.inputPassword.placeholder,
      type: 'password',
      autoComplete: 'false',
      registerValidation: passwordValidation,
    },
    {
      registerInput: 'confirmPassword',
      titleLabel: content.inputConfirmPassword.titleLabel,
      placeholder: content.inputConfirmPassword.placeholder,
      type: 'password',
      autoComplete: 'false',
      registerValidation: confirmPasswordValidation,
    },
  ];

  const onSubmit: SubmitHandler<ISignUp> = (data): void => {
    if (methods.formState.isValid) {
      registerWithEmailAndPassword(data.name!, data.email!, data.password!);
      dispatch(setAuth(true));
      navigate(GRAPHI_QL_PATH);
    }
  };

  return (
    <>
      <AuthForm
        hintLink={SIGN_IN_PATH}
        content={content}
        formFields={signUpformFields}
        onSubmit={onSubmit}
        methods={methods}
      />
    </>
  );
};

export default SignUp;
