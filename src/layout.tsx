import { PropsWithChildren } from 'react';
import Header from './components/Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className=''>
      <Header />
      <main className=''>{children}</main>
    </div>
  );
};

export default Layout;
