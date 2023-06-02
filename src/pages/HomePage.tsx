import Header from '../components/Header';
import HeroButton from '../components/HeroButton';
import HeroText from '../components/HeroText';

function HomePage() {
  return (
    <div className='h-screen flex flex-col bg-cover bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop [image-rendering:-webkit-optimize-contrast] '>
      <Header />
      <main className='flex flex-col lg:flex-row items-center lg:items-end justify-between lg:justify-start gap-[20%] mt-7 md:mt-[4.5rem] md:gap-36 lg:mt-56 lg:gap-[18%]'>
        <HeroText />
        <HeroButton />
      </main>
    </div>
  );
}

export default HomePage;

// mx-[11.5%] gap-[24%] flex-1 flex flex-col justify-center items-end mb-[8%]
