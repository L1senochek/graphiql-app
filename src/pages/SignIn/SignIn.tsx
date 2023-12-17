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

const SignIn: React.FC = (): JSX.Element => {
  const methods = useForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;

  const signInFormFields: IInputForm[] = [
    {
      registerInput: 'email',
      titleLabel: content.inputEmail.titleLabel,
      placeholder: content.inputEmail.placeholder,
    },
    {
      registerInput: 'password',
      titleLabel: content.inputPassword.titleLabel,
      placeholder: content.inputPassword.placeholder,
      type: 'password',
      autoComplete: 'false',
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
