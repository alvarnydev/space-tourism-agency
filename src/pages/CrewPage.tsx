import Header from '../components/Header';
import { useQuery } from '@tanstack/react-query';
import { fetchPageData } from '../utils/fetching';
import { LoadingPage } from './LoadingPage';
import { ErrorPage } from './ErrorPage';
import { useState } from 'react';
import NavbarCrew from '../components/NavbarCrew';

const CrewPage = () => {
  const [currentCrew, setCurrentCrew] = useState('Douglas Hurley');
  const { isLoading, error, data } = useQuery({
    queryKey: ['crew'],
    queryFn: fetchPageData,
  });

  if (isLoading) return <LoadingPage />;
  return error && error instanceof Error ? (
    <ErrorPage errorMessage={error.message} />
  ) : (
    <div className='absolute right-0 top-0 h-screen bg-cover bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop'>
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
