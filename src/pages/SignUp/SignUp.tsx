import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styles from './sign-up.module.scss';
import Btn from '@/components/Btn/Btn';
import InputForm from '@/components/InputForm/InputForm';
import ISignUp from '@/model/pages/SignUp/SignUp';

const SignUp: React.FC = (): JSX.Element => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<ISignUp> = (data): void => {
    console.log(data);
  };

  return (
    <div className={styles['sign-up']}>
      <h2 className={styles['sign-up__title']}>SignUp</h2>
      <FormProvider {...methods}>
        <form
          className={styles['sign-up__form']}
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputForm />
          <Btn className={styles['sign-up__btn']} type="submit">
            Submit
          </Btn>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUp;
