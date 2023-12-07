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
import {
  GRAPHI_QL_PATH,
  INITIAL_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  WELCOME_PATH,
} from '@/utils/const/const';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={INITIAL_PATH}
        element={<Layout />}
        errorElement={<ErrorMessage />}
      >
        <Route path="" element={<Navigate to={WELCOME_PATH} />} />
        <Route path={WELCOME_PATH} index element={<Welcome />} />
        <Route path={SIGN_UP_PATH} element={<SignUp />} />
        <Route path={SIGN_IN_PATH} element={<SignIn />} />
        <Route path={GRAPHI_QL_PATH} element={<GraphiQL />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

export default Router;
