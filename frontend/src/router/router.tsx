import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';

const Login = lazy(() => import('../pages/Login/Login'));
const SignIn = lazy(() => import('../pages/Login/SignIn/SignIn'));
const SignUp = lazy(() => import('../pages/Login/SignUp/SignUp'));

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<div>Oops! something wrong</div>}>
        <Route path="/" element={<Login />}>
          <Route index element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Route>
    )
  );
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
