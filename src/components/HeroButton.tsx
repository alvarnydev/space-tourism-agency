import { Link } from 'react-router-dom';

const HeroButton = () => (
  <div className='flex-1 flex justify-center md:justify-end'>
    <Link to={`/destination`}>
      <button className='transition-[outline] w-[150px] h-[150px] md:w-60 md:h-60 lg:w-[17rem] lg:h-[17rem] rounded-[50%] bg-white outline-[40px] md:outline-[68px] lg:outline-[88px] outline-white/10 hover:outline'>
        <h4 className='text-black'>Explore</h4>
      </button>
    </Link>
  </div>
);

export default HeroButton;
