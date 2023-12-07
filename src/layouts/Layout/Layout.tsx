import { Outlet } from 'react-router';

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
