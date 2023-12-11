import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input-form.module.scss';
import IInputForm from '@/model/components/InputForm/InputForm';
import IconEyeOn from '@/components/IconEyeOn/IconEyeOn';
import IconEyeOff from '@/components/IconEyeOff/IconEyeOff';
import Btn from '@/components/Btn/Btn';

const InputForm: React.FC<IInputForm> = ({
  classNameWrapper,
  classNameLabel,
  titleLabel,
  registerInput,
  ...props
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
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
      {props.type === 'password' ? (
        <div
          className={`${styles['input-form__password']} ${
            formState.errors.passwordOne?.message ? styles['error-input'] : ''
          }`}
        >
          <input
            {...props}
            className={styles['input-form__password_input']}
            {...register(registerInput)}
            type={showPassword ? 'text' : 'password'}
          />
          <Btn
            type="button"
            className={styles['input-form__password_btn']}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <IconEyeOn /> : <IconEyeOff />}
          </Btn>
        </div>
      ) : (
        <input
          {...props}
          className={`${styles['input-form__input']}${
            formState.errors.name ? ` ${styles['error-input']}` : ''
          }`}
          {...register(registerInput)}
        />
      )}
      <p className={styles['input-form__error']}></p>
    </div>
  );
};

export default InputForm;
