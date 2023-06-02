import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import Header from '../components/Header';
import { fetchPageData } from '../utils/fetching';
import { LoadingPage } from './LoadingPage';
import { ErrorPage } from './ErrorPage';
import NavbarDestinations from '../components/NavbarDestinations';
import { preloadAssets } from '../utils/preload';

const DestinationPage = () => {
  const [currentDestination, setCurrentDestination] = useState('Moon');
  const { isLoading, error, data } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchPageData,
  });

  useEffect(() => {
    preloadAssets('home');
  }, []);

  if (isLoading) return <LoadingPage />;
  if (error && error instanceof Error) return <ErrorPage errorMessage={error.message} />;

  return (
    <div className='h-screen relative flex flex-col'>
      <div className='absolute opacity-30 brightness-200 -z-10 top-0 left-0 h-full w-full bg-cover bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop ' />
      <Header />
      <main className='mt-[4%] flex-1 mb-[8%]'>
        <h5 className='ml-[10%]'>
          <span className='text-white/25 font-bold mr-4'>01</span> Pick Your Destination
        </h5>
        <div className='mx-[11.5%] ml-[15%] mt-[3%] gap-[13.5%] flex justify-center items-end'>
          {data?.destinations
            .filter((destination) => destination.name === currentDestination)
            .map((destination) => {
              return (
                <>
                  <div className='flex-1'>
                    <img className='w-auto' src={destination.images.webp} alt={destination.name} />
                  </div>
                  <div className='flex-1 flex flex-col gap-1'>
                    <NavbarDestinations
                      currentDestination={currentDestination}
                      setCurrentDestination={setCurrentDestination}
                    />
                    <h2 className='text-justify'>{destination.name}</h2>
                    <p className='text-lightBlue'>{destination.description}</p>
                    <div className='h-[1px] bg-white/25 mt-12 mb-4' />
                    <div className='flex'>
                      <div className='flex-1 flex flex-col gap-2'>
                        <p className='sub-heading-2 text-lightBlue'>AVG. Distance</p>
                        <p className='sub-heading-1'>{destination.distance}</p>
                      </div>
                      <div className='flex-1 flex flex-col gap-2'>
                        <p className='sub-heading-2 text-lightBlue'>Est. Travel Time</p>
                        <p className='sub-heading-1'>{destination.travel}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default DestinationPage;
