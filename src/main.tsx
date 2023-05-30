import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.tsx';
import Destination from './pages/destination.tsx';
import Technology from './pages/technology.tsx';
import Crew from './pages/crew.tsx';
import Layout from './layout.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
    <Layout>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Layout>
  </React.StrictMode>
);
