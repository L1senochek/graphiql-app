import { Outlet } from 'react-router';
import styles from './layout.module.scss';
import Header from '@/components/Header/HeaderSticky';
import Footer from '@/components/Footer/Footer';

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
