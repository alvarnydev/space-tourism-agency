import { useQuery } from '@tanstack/react-query';

import { LoadingPage } from '../pages/LoadingPage';
import { ErrorPage } from '../pages/ErrorPage';
import { PageDataType } from '../types';

const fetchPageData = async (): Promise<PageDataType> => {
  const response = await fetch(`/data/data.json`).then((res) => res.json());
  return response.data;
};

export function useData(page: 'destinations' | 'crew' | 'technology') {
  const { isLoading, error, data } = useQuery({
    queryKey: [page],
    queryFn: fetchPageData,
  });

  if (isLoading) return <LoadingPage />;
  if (error && error instanceof Error) return <ErrorPage errorMessage={error.message} />;
  if (data === undefined) return <ErrorPage errorMessage='No data found' />;

  return data[page];
}
