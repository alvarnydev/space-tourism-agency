import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='home'>Home</Link>
      <Link to='destination'>Destination</Link>
      <Link to='crew'>Crew</Link>
      <Link to='technology'>Technology</Link>
    </div>
  );
}

export default Home;
