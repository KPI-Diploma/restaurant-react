import { Outlet } from 'react-router-dom';
import Header from '@/components/common/Header/component.tsx';
import Footer from '@/components/common/Footer/component.tsx';

const DefaultLayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default DefaultLayout;