import { useForm } from 'react-hook-form';
import AuthForm from '@/components/AuthForm/AuthForm';
import { SIGN_UP_PATH } from '@/utils/const/const';
import contentJson from '@/utils/jsons/SignInContent/signInContent.json';
import IInputForm from '@/model/components/InputForm/InputForm';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const SignIn: React.FC = (): JSX.Element => {
  const methods = useForm();

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

  return (
    <AuthForm
      hintLink={SIGN_UP_PATH}
      content={content}
      formFields={signInFormFields}
      methods={methods}
    />
  );
};

export default SignIn;
