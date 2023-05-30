import Header from '../components/Header';
import HeroButton from '../components/HeroButton';
import HeroText from '../components/HeroText';

function Home() {
  return (
    <div className='h-screen bg-cover bg-homeMobile md:bg-homeTablet lg:bg-homeDesktop'>
      <Header />
      <main className='mx-[11.5%] mt-64 gap-[24%] flex justify-center items-end'>
        <HeroText />
        <HeroButton />
      </main>
    </div>
  );
}

export default Home;
