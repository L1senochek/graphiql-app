import Layout from '@/layouts/Layout/Layout';
import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import NotFound from '@/components/NotFound/NotFound';
import Welcome from '@/pages/Welcome/Welcome';
import SignUp from '@/pages/SignUp/SignUp';
import GraphiQL from '@/pages/GraphiQL/GraphiQL';
import SignIn from '@/pages/SignIn/SignIn';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<ErrorMessage />}>
        <Route path="" element={<Navigate to={`welcome`} />} />
        <Route path={'welcome'} index element={<Welcome />} />
        <Route path={'sign-up'} element={<SignUp />} />
        <Route path={'sign-in'} element={<SignIn />} />
        <Route path={'graphi-ql'} element={<GraphiQL />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default Router;
