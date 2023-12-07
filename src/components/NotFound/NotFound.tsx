import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './not-found.module.scss';

const NotFound: FC = (): JSX.Element => {
  return (
    <div className={styles['not-found']}>
      <h2 className={styles['not-found__title']}>Page not found!</h2>
      <h2 className={styles['not-found__message']}>404</h2>
      <Link className={styles['not-found__btn btn']} to={'/'}>
        Go to the Home
      </Link>
    </div>
  );
};

export default NotFound;
