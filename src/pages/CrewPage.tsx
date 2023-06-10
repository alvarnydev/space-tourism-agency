import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import Header from '../components/Header';
import { fetchPageData } from '../utils/fetching';
import { LoadingPage } from './LoadingPage';
import { ErrorPage } from './ErrorPage';
import NavbarCrew from '../components/NavbarCrew';
import { preloadAssets } from '../utils/preload';

const CrewPage = () => {
  const [currentCrew, setCurrentCrew] = useState('Douglas Hurley');
  const { isLoading, error, data } = useQuery({
    queryKey: ['crew'],
    queryFn: fetchPageData,
  });

  useEffect(() => {
    preloadAssets('crew');
  }, []);

  if (isLoading) return <LoadingPage />;
  if (error && error instanceof Error) return <ErrorPage errorMessage={error.message} />;

  return (
    <div className='absolute right-0 top-0 min-h-screen bg-cover bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop'>
      <Header />
      <main className='main-layout mt-32'>
        {data?.crew
          .filter((crew) => crew.name === currentCrew)
          .map((crew) => {
            return (
              <>
                <div className=''>
                  <h5>Meet Your Crew</h5>
                  <h4>{crew.role}</h4>
                  <h2>{crew.name}</h2>
                  <p>{crew.bio}</p>
                  <NavbarCrew currentCrew={currentCrew} setCurrentCrew={setCurrentCrew} />
                </div>
                <div>
                  <img src={crew.images.webp} alt={crew.name} />
                </div>
              </>
            );
          })}
      </main>
    </div>
  );
};

export default CrewPage;
