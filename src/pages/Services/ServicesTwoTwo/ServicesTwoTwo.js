import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../Home/Home/HomeFooter/HomeFooter';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesOneABout from './ServicesTwoTwoAbout/ServicesTwoTwoAbout';


const ServicesTwoTwo = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Tratamientos Faciales" subtitle="Servicios" />
         <ServicesOneABout/>
         <Footer/>
      </>
   );
};

export default ServicesTwoTwo;