import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styles from './sign-up.module.scss';
import Btn from '@/components/Btn/Btn';
import InputForm from '@/components/InputForm/InputForm';
import ISignUp from '@/model/pages/SignUp/SignUp';
import contentJson from '@/utils/jsons/SignUpContent/signUpContent.json';
import { useNavigate } from 'react-router';
import { GRAPHI_QL_PATH } from '@/utils/const/const';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import { useValidation } from '@/utils/validation/validation';
import { registerWithEmailAndPassword } from '@/utils/firebase/firebase';
import { setAuth } from '@/store/slices/AuthSlice';

const SignUp: React.FC = (): JSX.Element => {
  const methods = useForm({
    mode: 'onChange',
  });
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.eng : contentJson.ru;
  const {
    confirmPasswordValidation,
    passwordValidation,
    emailValidation,
    nameValidation,
  } = useValidation(methods);

  const onSubmit: SubmitHandler<ISignUp> = (data): void => {
    if (formState.isValid) {
      registerWithEmailAndPassword(data.name!, data.email!, data.password!);
      dispatch(setAuth(true));
      navigate(GRAPHI_QL_PATH);
    }
  };

  return (
    <div className={styles['sign-up']}>
      <h2 className={styles['sign-up__title']}>{content.title}</h2>
      <FormProvider {...methods}>
        <form
          className={styles['sign-up__form']}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputForm
            titleLabel={content.inputName.titleLabel}
            placeholder={content.inputName.placeholder}
            registerInput="name"
            registerValidation={nameValidation}
          />
          <InputForm
            titleLabel={content.inputEmail.titleLabel}
            placeholder={content.inputEmail.placeholder}
            registerInput="email"
            registerValidation={emailValidation}
          />
          <InputForm
            titleLabel={content.inputPassword.titleLabel}
            placeholder={content.inputPassword.placeholder}
            registerInput="password"
            type="password"
            autoComplete="false"
            registerValidation={passwordValidation}
          />
          <InputForm
            titleLabel={content.inputConfirmPassword.titleLabel}
            placeholder={content.inputConfirmPassword.placeholder}
            registerInput="confirmPassword"
            type="password"
            autoComplete="false"
            registerValidation={confirmPasswordValidation}
          />
          <Btn
            className={`${styles['sign-up__btn']}${
              isValid ? '' : ` ${styles['disabled']}`
            }`}
            type="submit"
            disabled={!isValid}
          >
            {content.buttonName}
          </Btn>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUp;
