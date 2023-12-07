import Layout from '@/layouts/Layout/Layout';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Layout />}
        errorElement={<ErrorMessage />}
      ></Route>
    </>
  )
);

export default Router;
