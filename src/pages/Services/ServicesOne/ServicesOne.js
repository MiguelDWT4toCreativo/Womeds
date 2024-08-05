import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../Home/Home/HomeFooter/HomeFooter';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';


const ServicesOne = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Medicina Estética" subtitle="Servicios" />
         <ServicesOneABout/>
         <Footer/>
      </>
   );
};

export default ServicesOne;