import { Link } from 'react-router-dom';

const HeroButton = () => (
  <div className='flex-1 flex justify-end'>
    <Link to={`/destination`}>
      <button className='transition-[outline] md:w-48 md:h-48 lg:w-[17rem] lg:h-[17rem] rounded-[50%] bg-white outline-[88px] outline-white/10 hover:outline'>
        <h4 className='text-black'>Explore</h4>
      </button>
    </Link>
  </div>
);

export default HeroButton;
