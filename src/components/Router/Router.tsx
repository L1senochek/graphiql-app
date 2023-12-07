import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/"></Route>
    </>
  )
);

export default Router;
