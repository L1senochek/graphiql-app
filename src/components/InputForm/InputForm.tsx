import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './input-form.module.scss';
import IInputForm from '@/model/components/InputForm/InputForm';
import IconEyeOn from '@/components/IconEyeOn/IconEyeOn';
import IconEyeOff from '@/components/IconEyeOff/IconEyeOff';
import Btn from '@/components/Btn/Btn';

const InputForm: React.FC<IInputForm> = ({
  registerInput,
  registerValidation,
  classNameWrapper,
  classNameLabel,
  titleLabel,
  ...props
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const methods = useFormContext();
  const { register, formState } = methods;
  const errorMessage = formState.errors[registerInput]?.message;

  return (
    <div className={`${styles['input-form']} ${classNameWrapper || ''}`}>
      {titleLabel && (
        <label
          className={`${styles['input-form__label']} ${classNameLabel || ''}`}
        >
          {titleLabel}
        </label>
      )}
      {props.type === 'password' ? (
        <div
          className={`${styles['input-form__password']} ${
            formState.errors[registerInput]?.message
              ? styles['error-input']
              : ''
          }`}
        >
          <input
            {...props}
            className={styles['input-form__password_input']}
            {...register(registerInput, registerValidation)}
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
          className={`${styles['input-form__input']} ${
            formState.errors[registerInput]?.message
              ? styles['error-input']
              : ''
          }`}
          {...register(registerInput, registerValidation)}
        />
      )}
      {formState.errors[registerInput] && (
        <p className={styles['input-form__error']}>
          {errorMessage?.toString()}
        </p>
      )}
    </div>
  );
};

export default InputForm;
