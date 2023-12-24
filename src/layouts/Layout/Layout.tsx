import { Outlet, useLocation } from 'react-router';
import styles from './layout.module.scss';
import Header from '@/components/Header/HeaderSticky';
import Footer from '@/components/Footer/Footer';
import { GRAPHI_QL_PATH } from '@/utils/const/const';

const Layout: React.FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <>
      <Header />
      <main
        className={`${styles.main}${
          location.pathname === GRAPHI_QL_PATH ? ` ${styles['graphi-ql']}` : ''
        }`}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
