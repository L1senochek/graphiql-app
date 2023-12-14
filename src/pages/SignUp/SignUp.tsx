import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import AuthForm from '@/components/AuthForm/AuthForm';
import { GRAPHI_QL_PATH, SIGN_IN_PATH } from '@/utils/const/const';
import contentEn from '@/utils/jsons/SignUpContents/signUpContentEn.json';
import contentRu from '@/utils/jsons/SignUpContents/signUpContentRu.json';
import ISignUp from '@/model/pages/SignUp/SignUp';
import IInputForm from '@/model/components/InputForm/InputForm';

const SignUp: React.FC = (): JSX.Element => {
  const methods = useForm();
  const { formState } = methods;
  const content = contentEn || contentRu;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignUp> = (data): void => {
    console.log(data);
    if (formState.isValid) {
      navigate(GRAPHI_QL_PATH);
    }
  };

  const formFields: IInputForm[] = [
    {
      registerInput: 'name',
      titleLabel: content.inputName.titleLabel,
      placeholder: content.inputName.placeholder,
    },
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
    {
      registerInput: 'ConfirmPassword',
      titleLabel: content.inputConfirmPassword.titleLabel,
      placeholder: content.inputConfirmPassword.placeholder,
      type: 'password',
      autoComplete: 'false',
    },
  ];

  return (
    <AuthForm
      hintLink={SIGN_IN_PATH}
      onSubmit={onSubmit}
      content={content}
      formFields={formFields}
    />
  );
};

export default SignUp;
