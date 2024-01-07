import { Link, useRouteError } from 'react-router-dom';
import styles from './error-message.module.scss';
import { useAppSelector } from '@/store/hooks';
import { selectContentErrorMessage } from '@/store/slices/languageSlice/languageSlice';

const ErrorMessage: React.FC = (): JSX.Element => {
  const content = useAppSelector(selectContentErrorMessage);
  const error = useRouteError() as Error;

  return (
    <div className={styles['error-message']}>
      <h2 className={styles['error-message__title']}>{content.title}</h2>
      <h3 className={styles['error-message__message']}>{error.message}</h3>
      <Link className={`${styles['error-message__btn']} btn`} to={'/'}>
        {content.link}
      </Link>
    </div>
  );
};

export default ErrorMessage;
