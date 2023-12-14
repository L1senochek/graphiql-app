import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styles from './sign-up.module.scss';
import Btn from '@/components/Btn/Btn';
import InputForm from '@/components/InputForm/InputForm';
import ISignUp from '@/model/pages/SignUp/SignUp';
import contentJson from '@/utils/jsons/SignUpContent/signUpContent.json';
import { useNavigate } from 'react-router';
import { GRAPHI_QL_PATH } from '@/utils/const/const';
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';

const SignUp: React.FC = (): JSX.Element => {
  const methods = useForm();
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;
  const navigate = useNavigate();
  const isEn = useAppSelector((state: RootState) => state.languageSlice.eng);
  const content = isEn ? contentJson.en : contentJson.ru;

  const onSubmit: SubmitHandler<ISignUp> = (data): void => {
    console.log(data);
    if (formState.isValid) {
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
          />
          <InputForm
            titleLabel={content.inputEmail.titleLabel}
            placeholder={content.inputEmail.placeholder}
            registerInput="email"
          />
          <InputForm
            titleLabel={content.inputPassword.titleLabel}
            placeholder={content.inputPassword.placeholder}
            registerInput="password"
            type="password"
            autoComplete="false"
          />
          <InputForm
            titleLabel={content.inputConfirmPassword.titleLabel}
            placeholder={content.inputConfirmPassword.placeholder}
            registerInput="ConfirmPassword"
            type="password"
            autoComplete="false"
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
