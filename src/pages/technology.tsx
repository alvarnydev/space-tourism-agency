import Header from '../components/Header';
import { useQuery } from '@tanstack/react-query';
import { fetchPageData } from '../utils/fetching';
import { LoadingPage } from '../components/LoadingPage';
import { ErrorPage } from '../components/ErrorPage';
import { useState } from 'react';

const Technology = () => {
  const [currentTech, setCurrentTech] = useState('Launch vehicle');
  const { isLoading, error, data } = useQuery({
    queryKey: ['crew'],
    queryFn: fetchPageData,
  });

  if (isLoading) return <LoadingPage />;
  if (error && error instanceof Error) return <ErrorPage errorMessage={error.message} />;

  return (
    <div className='h-screen bg-cover bg-technologyMobile md:bg-technologyTablet lg:bg-technologyDesktop'>
      <Header />
      <main className='main-layout mt-32'>
        {data?.technology
          .filter((tech) => tech.name === currentTech)
          .map((tech) => {
            return (
              <>
                <div className=''>
                  <h5>Space Launch 101</h5>
                  <p>{tech.description}</p>
                </div>
                <div>
                  <img src={tech.images.portrait} alt={tech.name} />
                </div>
              </>
            );
          })}
      </main>
    </div>
  );
};

export default Technology;
