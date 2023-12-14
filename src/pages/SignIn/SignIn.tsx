import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import AuthForm from '@/components/AuthForm/AuthForm';
import { GRAPHI_QL_PATH, SIGN_UP_PATH } from '@/utils/const/const';
import contentEn from '@/utils/jsons/SignInContents/signInContentEn.json';
import contentRu from '@/utils/jsons/SignInContents/signInContentRu.json';
import ISignIn from '@/model/pages/SignIn/SignIn';
import IInputForm from '@/model/components/InputForm/InputForm';

const pass = {
  required: 'Password is required',
  pattern: {
    value: /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_]).{4,}$/,
    message: 'Must match the pattern 1Ff!',
  },
};

const SignIn: React.FC = (): JSX.Element => {
  const methods = useForm();
  const { formState } = methods;
  const content = contentEn || contentRu;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignIn> = (data): void => {
    console.log(data);
    if (formState.isValid) {
      navigate(GRAPHI_QL_PATH);
    }
  };

  const SignInFormFields: IInputForm[] = [
    {
      registerInput: 'email',
      titleLabel: content.inputEmail.titleLabel,
      placeholder: content.inputEmail.placeholder,
    },
    {
      registerInput: 'password',
      registerValidation: pass,
      titleLabel: content.inputPassword.titleLabel,
      placeholder: content.inputPassword.placeholder,
      type: 'password',
      autoComplete: 'false',
    },
  ];

  return (
    <AuthForm
      hintLink={SIGN_UP_PATH}
      onSubmit={onSubmit}
      content={content}
      formFields={SignInFormFields}
    />
  );
};

export default SignIn;
