import Layout from '@/layouts/Layout/Layout';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import NotFound from '@/components/NotFound/NotFound';
import Welcome from '@/pages/Welcome/Welcome';
import SignUp from '@/pages/SignUp/SignUp';
import GraphiQL from '@/pages/GraphiQL/GraphiQL';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorMessage />}>
        <Route path={'/welcome'} element={<Welcome />} />
        <Route path={'/sign-up'} element={<SignUp />} />
        <Route path={'/graphi-ql'} element={<GraphiQL />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default Router;
