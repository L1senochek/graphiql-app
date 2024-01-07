import { Link } from 'react-router-dom';
import styles from './not-found.module.scss';
import { useAppSelector } from '@/store/hooks';
import { selectContentNotFound } from '@/store/slices/languageSlice/languageSlice';

const NotFound: React.FC = (): JSX.Element => {
  const content = useAppSelector(selectContentNotFound);
  return (
    <div className={styles['not-found']}>
      <h2 className={styles['not-found__title']}>{content.title}</h2>
      <h2 className={styles['not-found__message']}>{content.message}</h2>
      <Link className={`${styles['not-found__btn']} btn`} to={'/'}>
        {content.link}
      </Link>
    </div>
  );
};

export default NotFound;
