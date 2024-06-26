import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <div className='h-16'>
        <Nav></Nav>
      </div>
      <div className='min-h-[calc(100vh-150px)]'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
