import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='py-5 flex nav-text'>
      <div className='flex-1 flex jusitfy-center items-center'>Icon</div>
      <ul className='flex flex-1 gap-8 p-8'>
        <li>
          <Link to='/'>
            <span className='font-bold'>00</span> Home
          </Link>
        </li>
        <li>
          <Link to='/destination'>
            <span className='font-bold'>01</span> Destination
          </Link>
        </li>
        <li>
          <Link to='/crew'>
            <span className='font-bold'>02</span> Crew
          </Link>
        </li>
        <li>
          <Link to='/technology'>
            <span className='font-bold'>03</span> Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
