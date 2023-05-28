import Header from '../components/Header';

function Home() {
  const HeroText = () => (
    <div className='flex-1 flex flex-col text-lightBlue tracking-[0.075em]'>
      <h5>So, you want to travel to</h5>
      <h1>Space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
        not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly
        out of this world experience!
      </p>
    </div>
  );
  const HeroButton = () => (
    <div className='flex-1 flex justify-end'>
      <button className='transition-[outline] w-[17rem] h-[17rem] rounded-[50%] bg-white outline-[88px] outline-white/10 hover:outline'>
        <h4 className='text-black'>Explore</h4>
      </button>
    </div>
  );

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
