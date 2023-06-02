import Navbar from './Navbar';

const HeaderLogo: React.FC = () => (
  <div className='flex gap-14 items-center'>
    <img className='w-10 h-10 md:w-12 md:h-12' src='/src/assets/shared/logo.svg' />
    <div className='absolute ml-28 h-[1px] xl:w-[35%] z-10 bg-white/25' />
  </div>
);

const Header = () => {
  return (
    <header className='items-center justify-between flex my-6 mx-6 md:mt-0 md:mr-0 md:ml-10 lg:mt-10 lg:ml-14'>
      <HeaderLogo />
      <Navbar />
    </header>
  );
};

export default Header;
