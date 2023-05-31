import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import DestinationPage from './pages/DestinationPage.tsx';
import TechnologyPage from './pages/TechnologyPage.tsx';
import CrewPage from './pages/CrewPage.tsx';
import Layout from './layout.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryPage from './pages/ErrorBoundaryPage.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: 'destination',
    element: <DestinationPage />,
  },
  {
    path: 'crew',
    element: <CrewPage />,
  },
  {
    path: 'technology',
    element: <TechnologyPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <ErrorBoundary FallbackComponent={ErrorBoundaryPage}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ErrorBoundary>
    </Layout>
  </React.StrictMode>
);
