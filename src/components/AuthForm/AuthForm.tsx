import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import InputForm from '@/components/InputForm/InputForm';
import Btn from '@/components/Btn/Btn';
import IAuthFormProps from '@/model/components/AuthForm/AuthForm';
import styles from './auth-form.module.scss';

const AuthForm = <T extends Record<string, string>>({
  hintLink,
  onSubmit,
  content,
  formFields,
}: IAuthFormProps<T>): JSX.Element => {
  const methods = useForm<T>();
  const { handleSubmit, formState } = methods;
  const { isValid } = formState;

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
