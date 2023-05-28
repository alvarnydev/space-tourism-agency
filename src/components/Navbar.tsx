import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const NavbarElements = [
  { id: '00', path: '', name: 'Home' },
  { id: '01', path: 'destination', name: 'Destination' },
  { id: '02', path: 'crew', name: 'Crew' },
  { id: '03', path: 'technology', name: 'Technology' },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='relative ml-12 py-9 flex nav-text'>
      <div className='flex-1 flex gap-14 items-center overflow-auto'>
        <img src='/assets/shared/logo.svg' />
        <div className='absolute ml-24 h-[1px] w-2/5 z-10 bg-white/30' />
      </div>
      <ul className='flex items-center flex-1 gap-10 px-[6%] py-8 bg-white/5 backdrop-blur-xl'>
        {NavbarElements.map((element) => (
          <li key={element.id}>
            <Link
              to={`/${element.path}`}
              className={
                'transition-[border] duration-75 py-8 hover:border-b-2 hover:-mb-0.5 border-white/40' +
                (currentPath === `/${element.path}` ? 'border-white border-b-2 -mb-0.5' : '')
              }
            >
              <span className='font-bold'>{element.id}</span> {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
