import { Link } from 'react-router-dom';
import styles from './header.module.scss';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <Link to={'/'}>header</Link>
      </header>
    </>
  );
};

export default Header;
