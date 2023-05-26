import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.tsx';
import Destination from './pages/destination.tsx';
import Technology from './pages/technology.tsx';
import Crew from './pages/crew.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'destination',
    element: <Destination />,
  },
  {
    path: 'crew',
    element: <Crew />,
  },
  {
    path: 'technology',
    element: <Technology />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
