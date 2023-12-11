import { useFormContext } from 'react-hook-form';
import styles from './input-form.module.scss';

const InputForm: React.FC = (): JSX.Element => {
  const methods = useFormContext();
  const { register, formState } = methods;

  return (
    <div className={styles['input-form']}>
      <label className={styles['input-form__label']}>Name:</label>
      <input
        className={`${styles['input-form__input']}${
          formState.errors.name ? ` ${styles['error-input']}` : ''
        }`}
        placeholder={'Name'}
        {...register('name')}
      />
    </div>
  );
};

export default InputForm;
