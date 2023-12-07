import { Outlet } from 'react-router';
import styles from './layout.module.scss';

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>header</header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
};

export default Layout;
