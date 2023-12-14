import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import contentEn from '@/utils/jsons/SignInContents/signInContentEn.json';
import contentRu from '@/utils/jsons/SignInContents/signInContentRu.json';
import { useNavigate } from 'react-router';
import ISignIn from '@/model/pages/SignIn/SignIn';
import styles from './sign-in.module.scss';
import { GRAPHI_QL_PATH, SIGN_UP_PATH } from '@/utils/const/const';
import InputForm from '@/components/InputForm/InputForm';
import Btn from '@/components/Btn/Btn';
import { Link } from 'react-router-dom';

const SignIn: React.FC = (): JSX.Element => {
  const methods = useForm();
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;
  const content = contentEn || contentRu;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignIn> = (data): void => {
    console.log(data);
    if (formState.isValid) {
      navigate(GRAPHI_QL_PATH);
    }
  };
  return (
    <div>
      <h2 className={styles['sign-in__title']}>{content.title}</h2>
      <h4 className={styles['sign-in__item']}>
        {content.hint}
        <Link className={styles['sign-in__item_link']} to={SIGN_UP_PATH}>
          {content.hintLink}
        </Link>
      </h4>
      <FormProvider {...methods}>
        <form
          className={styles['sign-in__form']}
          onSubmit={handleSubmit(onSubmit)}
        >
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
          <Btn
            className={`${styles['sign-in__btn']}${
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

export default SignIn;
