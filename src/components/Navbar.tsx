import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import menuCloseUrl from '../assets/shared/icon-close.svg';
import menuOpenUrl from '../assets/shared/icon-hamburger.svg';

const NavbarElements = [
  { id: '00', path: '', name: 'Home' },
  { id: '01', path: 'destination', name: 'Destination' },
  { id: '02', path: 'crew', name: 'Crew' },
  { id: '03', path: 'technology', name: 'Technology' },
];

const DesktopNav: React.FC<{
  currentPath: string;
}> = ({ currentPath }) => (
  <nav className='absolute md:static nav-text px-[6.5%] lg:px-[11%] bg-white/5 backdrop-blur-xl'>
    <ul className='hidden min-w-fit py-9 md:flex gap-10 '>
      {NavbarElements.map((element) => (
        <li key={element.id}>
          <Link
            to={`/${element.path}`}
            className={
              'transition-[border] duration-75 py-9 whitespace-nowrap ' +
              (currentPath === `/${element.path}`
                ? 'border-white border-b-[3px] mb-[-3px]'
                : 'hover:border-white/40 hover:border-b-[3px] hover:mb-[-3px] ')
            }
          >
            <span className='font-bold mr-1 hidden lg:inline-block'>{element.id}</span>{' '}
            {element.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const NavToggler: React.FC<{
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isMenuOpen, setIsMenuOpen }) => (
  <div className='relative select-none md:hidden z-20'>
    <input
      className='peer hidden'
      type='checkbox'
      id='navi-toggle'
      defaultChecked={isMenuOpen}
      onChange={() => setIsMenuOpen(!isMenuOpen)}
    />
    <label className='z-20 cursor-pointer ' htmlFor='navi-toggle'>
      {isMenuOpen ? (
        <img width={28} height={28} src={menuCloseUrl} />
      ) : (
        <img width={28} height={28} src={menuOpenUrl} />
      )}
    </label>
  </div>
);

const NavMenu: React.FC<{
  isOpen: boolean;
}> = ({ isOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return isOpen ? <MobileNav /> : <DesktopNav currentPath={currentPath} />;
};

const MobileNav: React.FC = () => (
  <nav className='transition-all duration-700 absolute right-0 top-0 h-screen bg-white/5 backdrop-blur-xl nav-text pl-10 pr-20 pt-[30%] min-w-[50%]'>
    <ul className='flex flex-col gap-10'>
      {NavbarElements.map((element) => (
        <li key={element.id}>
          <Link to={`/${element.path}`} className={'whitespace-nowrap '}>
            <span className='font-bold mr-2'>{element.id}</span> {element.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <NavToggler isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <NavMenu isOpen={isMenuOpen} />
    </>
  );
};

export default Navbar;
