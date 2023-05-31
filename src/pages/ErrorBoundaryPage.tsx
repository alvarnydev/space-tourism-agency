import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import ErrorPage from './ErrorPage';

export const ErrorBoundaryPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <ErrorPage errorMessage={"This page doesn't exist!"} />;
    }

    if (error.status === 401) {
      return <ErrorPage errorMessage={"You aren't authorized to see this"} />;
    }

    if (error.status === 503) {
      return <ErrorPage errorMessage={'Looks like our API is down'} />;
    }
  }

  return <ErrorPage errorMessage={'Something happened that made the site crash. Sorry! '} />;
};

export default ErrorBoundaryPage;
