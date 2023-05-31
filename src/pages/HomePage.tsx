import Header from '../components/Header';
import HeroButton from '../components/HeroButton';
import HeroText from '../components/HeroText';

function HomePage() {
  return (
    <div className='min-h-screen bg-cover bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop'>
      <Header />
      <main className='main-layout mt-[16%]'>
        <HeroText />
        <HeroButton />
      </main>
    </div>
  );
}

export default HomePage;
