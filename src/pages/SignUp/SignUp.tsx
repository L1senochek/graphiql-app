import { FormProvider, useForm } from 'react-hook-form';

const SignUp: React.FC = (): JSX.Element => {
  const methods = useForm();
  return (
    <>
      <div>SignUp</div>
      <FormProvider {...methods}>
        <form></form>
      </FormProvider>
    </>
  );
};

export default SignUp;
