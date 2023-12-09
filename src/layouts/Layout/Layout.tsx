import { Outlet } from 'react-router';
import styles from './layout.module.scss';
import Header from '@/components/Header/HeaderSticky';

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>footer</footer>
    </>
  );
};

export default Layout;
