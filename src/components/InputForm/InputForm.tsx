import { useFormContext } from 'react-hook-form';
import styles from './input-form.module.scss';
import IInputForm from '@/model/components/InputForm/InputForm';

const InputForm: React.FC<IInputForm> = ({
  classNameWrapper,
  classNameLabel,
  titleLabel,
  registerInput,
  ...props
}): JSX.Element => {
  const methods = useFormContext();
  const { register, formState } = methods;

  return (
    <div
      className={`${styles['input-form']}${
        classNameWrapper ? ` ${classNameWrapper}` : ''
      }`}
    >
      {titleLabel && (
        <label
          className={`${styles['input-form__label']}${
            classNameLabel ? ` ${classNameLabel}` : ''
          }`}
        >
          {titleLabel}
        </label>
      )}
      <input
        className={`${styles['input-form__input']}${
          formState.errors.name ? ` ${styles['error-input']}` : ''
        }`}
        {...props}
        {...register(registerInput)}
      />
    </div>
  );
};

export default InputForm;
