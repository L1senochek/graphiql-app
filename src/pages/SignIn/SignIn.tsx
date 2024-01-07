import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AuthForm from '@/components/AuthForm/AuthForm';
import { GRAPHI_QL_PATH, SIGN_UP_PATH } from '@/utils/const/const';
import IInputForm from '@/model/components/InputForm/InputForm';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useNavigate } from 'react-router';
import ISignIn from '@/model/pages/SignIn/SignIn';
import { setAuth } from '@/store/slices/authSlice/authSlice';
import { useValidation } from '@/utils/validation/useValidation';
import { logInWithEmailAndPassword } from '@/utils/firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  setUserDisplayName,
  setUserEmail,
  setUserUid,
} from '@/store/slices/firebaseUserSlice/firebaseUserSlice';
import { selectContentSignIn } from '@/store/slices/languageSlice/languageSlice';
import { FirebaseError } from 'firebase/app';
import ErrorModal from '@/components/ErrorModal/ErrorModal';
import useAuthFirebaseLogin from '@/utils/auth/useAuthFirebaseLogin';

const SignIn: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const content = useAppSelector(selectContentSignIn);
  const methods = useForm({
    mode: 'onChange',
  });
  const { passwordValidation, emailValidation } = useValidation(methods);
  const [error, setError] = useState<string | null>(null);

  useAuthFirebaseLogin();

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

  const onSubmit: SubmitHandler<ISignIn> = async (data): Promise<void> => {
    if (methods.formState.isValid) {
      try {
        await logInWithEmailAndPassword(data.email!, data.password!);
        dispatch(setAuth(true));
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
          }
        });
      } catch (err) {
        console.error(err);
        if (err && err instanceof FirebaseError) {
          setError(err.message);
        }
      }
    }
  };

  const closeModal = (): void => setError(null);

  return (
    <>
      <AuthForm
        hintLink={SIGN_UP_PATH}
        content={content}
        formFields={signInFormFields}
        onSubmit={onSubmit}
        methods={methods}
      />
      {error && <ErrorModal errorMessage={error} onClose={closeModal} />}
    </>
  );
};

export default SignIn;
