import { SubmitHandler, useForm } from 'react-hook-form';
import AuthForm from '@/components/AuthForm/AuthForm';
import IInputForm from '@/model/components/InputForm/InputForm';
import { SIGN_IN_PATH } from '@/utils/const/const';
import { useAppSelector } from '@/store/hooks';
import { useValidation } from '@/utils/validation/useValidation';
import { useNavigate } from 'react-router';
import { GRAPHI_QL_PATH } from '@/utils/const/const';
import { useAppDispatch } from '@/store/hooks';
import { registerWithEmailAndPassword } from '@/utils/firebase/firebase';
import { setAuth } from '@/store/slices/authSlice';
import ISignUp from '@/model/pages/SignUp/SignUp';
import {
  setUserDisplayName,
  setUserEmail,
  setUserUid,
} from '@/store/slices/firebaseUserSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { selectContentSignUp } from '@/store/slices/languageSlice';

const SignUp: React.FC = (): JSX.Element => {
  const methods = useForm({
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const content = useAppSelector(selectContentSignUp);
  const {
    confirmPasswordValidation,
    passwordValidation,
    emailValidation,
    nameValidation,
  } = useValidation(methods);

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

  const onSubmit: SubmitHandler<ISignUp> = async (data): Promise<void> => {
    if (methods.formState.isValid) {
      await registerWithEmailAndPassword(
        data.name!,
        data.email!,
        data.password!
      );
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          const email = user.email;
          const displayName = user.displayName;

          dispatch(setUserUid(uid));
          dispatch(setUserEmail(email!));
          dispatch(setUserDisplayName(displayName!));
          dispatch(setAuth(true));

          navigate(GRAPHI_QL_PATH);
        } else {
          // User is signed out
        }
      });
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
