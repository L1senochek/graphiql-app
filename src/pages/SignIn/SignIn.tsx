import { SubmitHandler, useForm } from 'react-hook-form';
import AuthForm from '@/components/AuthForm/AuthForm';
import { GRAPHI_QL_PATH, SIGN_UP_PATH } from '@/utils/const/const';
import contentJson from '@/utils/jsons/SignInContent/signInContent.json';
import IInputForm from '@/model/components/InputForm/InputForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useNavigate } from 'react-router';
import ISignIn from '@/model/pages/SignIn/SignIn';
import { setAuth } from '@/store/slices/AuthSlice';
import { useValidation } from '@/utils/validation/validation';

const SignIn: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;
  const methods = useForm({
    mode: 'onChange',
  });
  const { passwordValidation, emailValidation } = useValidation(methods);

  const signInFormFields: IInputForm[] = [
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
  ];

  const onSubmit: SubmitHandler<ISignIn> = (data): void => {
    if (methods.formState.isValid) {
      console.log(data);

      dispatch(setAuth(true));
      navigate(GRAPHI_QL_PATH);
    }
  };

  return (
    <AuthForm
      hintLink={SIGN_UP_PATH}
      content={content}
      formFields={signInFormFields}
      onSubmit={onSubmit}
      methods={methods}
    />
  );
};

export default SignIn;
