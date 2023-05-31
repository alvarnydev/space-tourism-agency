import { Link } from 'react-router-dom';

const HeroButton = () => (
  <div className='flex-1 flex justify-end'>
    <button className='transition-[outline] w-[17rem] h-[17rem] rounded-[50%] bg-white outline-[88px] outline-white/10 hover:outline'>
      <Link to={`/destination`}>
        <h4 className='text-black'>Explore</h4>
      </Link>
    </button>
  </div>
);

export default HeroButton;
