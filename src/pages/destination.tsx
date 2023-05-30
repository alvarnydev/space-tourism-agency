import Header from '../components/Header';
import { useData } from '../hooks/useData';

const Destination = () => {
  const data = useData('destinations');

  return (
    <div className='h-screen bg-cover bg-destinationMobile md:bg-destinationTablet lg:bg-destinationDesktop'>
      <Header />
      <main className='main-layout mt-32'>{}</main>
    </div>
  );
};

export default Destination;
