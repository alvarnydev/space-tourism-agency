import Header from '../components/Header';
import { useQuery } from '@tanstack/react-query';
import { fetchPageData } from '../utils/fetching';
import { LoadingPage } from '../components/LoadingPage';
import { ErrorPage } from '../components/ErrorPage';
import { useState } from 'react';

const Crew = () => {
  const [currentCrew, setCurrentCrew] = useState('Douglas Hurley');
  const { isLoading, error, data } = useQuery({
    queryKey: ['crew'],
    queryFn: fetchPageData,
  });

  if (isLoading) return <LoadingPage />;
  if (error && error instanceof Error) return <ErrorPage errorMessage={error.message} />;

  return (
    <div className='h-screen bg-cover bg-crewMobile md:bg-crewTablet lg:bg-crewDesktop'>
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

export default Crew;
