import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { INITIAL_PATH } from '@/utils/const/const';
import IconSettings from '../IconSettings/IconSettings';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles['header__left-side']}>
          <Link to={INITIAL_PATH}>Welcome</Link>
        </div>
        <div className={styles['header__right-side']}>
          <button>Sign Out</button>
          <IconSettings />
        </div>
      </header>
    </>
  );
};

export default Header;
