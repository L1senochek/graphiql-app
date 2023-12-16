import { FormProvider, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import InputForm from '@/components/InputForm/InputForm';
import Btn from '@/components/Btn/Btn';
import IAuthFormProps from '@/model/components/AuthForm/AuthForm';
import styles from './auth-form.module.scss';
import { useNavigate } from 'react-router';
import { GRAPHI_QL_PATH } from '@/utils/const/const';
import { useAppDispatch } from '@/store/hooks';
import { registerWithEmailAndPassword } from '@/utils/firebase/firebase';
import { setAuth } from '@/store/slices/AuthSlice';
import ISignUp from '@/model/pages/SignUp/SignUp';

const AuthForm = ({
  hintLink,
  content,
  formFields,
  methods,
}: IAuthFormProps): JSX.Element => {
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ISignUp> = (data): void => {
    if (isValid) {
      registerWithEmailAndPassword(data.name!, data.email!, data.password!);
      dispatch(setAuth(true));
      navigate(GRAPHI_QL_PATH);
    }
  };

  return (
    <div className={styles['auth-form']}>
      <h2 className={styles['auth-form__title']}>{content.title}</h2>
      <h4 className={styles['auth-form__item']}>
        {content.hint}
        <Link className={styles['auth-form__item_link']} to={hintLink}>
          {content.hintLink}
        </Link>
      </h4>
      <FormProvider {...methods}>
        <form
          className={styles['auth-form__form']}
          onSubmit={handleSubmit(onSubmit)}
        >
          {formFields.map((field, index) => (
            <InputForm key={index} {...field} />
          ))}
          <Btn
            className={`${styles['auth-form__btn']}${
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

export default AuthForm;
