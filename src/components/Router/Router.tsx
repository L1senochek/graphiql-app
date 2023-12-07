import Layout from '@/layouts/Layout/Layout';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}></Route>
    </>
  )
);

export default Router;
