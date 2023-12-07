import { FC } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import styles from './error-message.module.scss';

const ErrorMessage: FC = (): JSX.Element => {
  const error = useRouteError() as Error;

  return (
    <div className={styles['error-message']}>
      <h2 className={styles['error-message__title']}>Error message:</h2>
      <h3 className={styles['error-message__message']}>{error.message}</h3>
      <Link className={styles['error-message__btn btn']} to={'/'}>
        Go to the Home
      </Link>
    </div>
  );
};

export default ErrorMessage;
