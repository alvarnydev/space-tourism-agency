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
    <nav className='relative ml-12 pt-10 flex nav-text'>
      <div className='flex-1 flex gap-14 items-center overflow-auto'>
        <img src='/assets/shared/logo.svg' />
        <div className='absolute ml-28 h-[1px] w-[35%] z-10 bg-white/25' />
      </div>
      <ul className='flex items-center flex-1 gap-10 px-[9%] py-9 bg-white/5 backdrop-blur-xl'>
        {NavbarElements.map((element) => (
          <li key={element.id}>
            <Link
              to={`/${element.path}`}
              className={
                'transition-[border] duration-75 py-9 hover:border-b-[3px] hover:mb-[-3px] border-white/40' +
                (currentPath === `/${element.path}` ? 'border-white border-b-[3px] mb-[-3px]' : '')
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
