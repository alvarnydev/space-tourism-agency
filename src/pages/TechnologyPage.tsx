import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Header from '../components/Header';
import { fetchPageData } from '../utils/fetching';
import { LoadingPage } from './LoadingPage';
import { ErrorPage } from './ErrorPage';
import NavbarTechnology from '../components/NavbarTechnology';
import { preloadAssets } from '../utils/preload';

const TechnologyPage = () => {
  const [currentTechnology, setCurrentTechnology] = useState('Launch vehicle');
  const { isLoading, error, data } = useQuery({
    queryKey: ['crew'],
    queryFn: fetchPageData,
  });

  useEffect(() => {
    preloadAssets('technology');
  }, []);

  if (isLoading) return <LoadingPage />;
  if (error && error instanceof Error) return <ErrorPage errorMessage={error.message} />;

  return (
    <div className='min-h-screen bg-cover bg-technologyMobile md:bg-technologyTablet lg:bg-technologyDesktop'>
      <Header />
      <main className='main-layout mt-32'>
        {data?.technology
          .filter((tech) => tech.name === currentTechnology)
          .map((tech) => {
            return (
              <>
                <NavbarTechnology
                  currentTechnology={currentTechnology}
                  setCurrentTechnology={setCurrentTechnology}
                />
                <div className=''>
                  <h5>Space Launch 101</h5>
                  <p>{tech.description}</p>
                </div>
                <div>
                  <img src={new URL(tech.images.portrait, import.meta.url).href} alt={tech.name} />
                </div>
              </>
            );
          })}
      </main>
    </div>
  );
};

export default TechnologyPage;
