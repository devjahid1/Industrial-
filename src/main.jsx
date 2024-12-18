import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Careers from './components/Careers/Careers';
import Work from './components/Work/Work';
import Jobs from './components/Jobs/Jobs';
import Auth from './AuthProvider/Auth';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: '/jobs',
        element: (
          <PrivateRoute>
            <Jobs />
          </PrivateRoute>
        ),
      },
      {
        path: '/work',
        element: (
          <PrivateRoute>
            <Work />
          </PrivateRoute>
        ),
      },
      {
        path: '/career',
        element: (
          <PrivateRoute>
            <Careers />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Auth>
    <RouterProvider router={router} />
  </Auth>
);
