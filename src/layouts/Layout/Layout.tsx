import { Outlet } from 'react-router';
import styles from './layout.module.scss';
import { Link } from 'react-router-dom';

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <Link to={'/'}>header</Link>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
};

export default Layout;
