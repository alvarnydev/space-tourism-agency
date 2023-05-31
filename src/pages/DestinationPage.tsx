import Header from '../components/Header';
import { useQuery } from '@tanstack/react-query';
import { fetchPageData } from '../utils/fetching';
import { LoadingPage } from './LoadingPage';
import { ErrorPage } from './ErrorPage';
import NavbarDestinations from '../components/NavbarDestinations';
import { useState } from 'react';

const DestinationPage = () => {
  const [currentDestination, setCurrentDestination] = useState('Moon');
  const { isLoading, error, data } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchPageData,
  });

  if (isLoading) return <LoadingPage />;
  if (error && error instanceof Error) return <ErrorPage errorMessage={error.message} />;

  return (
    <div className='h-screen bg-cover bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop'>
      <Header />
      <main className='main-layout mt-32'>
        {data?.destinations
          .filter((destination) => destination.name === currentDestination)
          .map((destination) => {
            return (
              <>
                <div className=''>
                  <h5>Pick Your Destination</h5>
                  <img src={destination.images.webp} alt={destination.name} />
                </div>
                <div>
                  <NavbarDestinations
                    currentDestination={currentDestination}
                    setCurrentDestination={setCurrentDestination}
                  />
                  <h2>{destination.name}</h2>
                  <p>{destination.description}</p>
                  <div className=''>
                    <p>{destination.distance}</p>
                    <p>{destination.travel}</p>
                  </div>
                </div>
              </>
            );
          })}
      </main>
    </div>
  );
};

export default DestinationPage;
