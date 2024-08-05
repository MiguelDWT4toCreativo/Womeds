import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../Home/Home/HomeFooter/HomeFooter';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesOneABout from './ServicesThreeAbout/ServicesThreeAbout';


const ServicesThree = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Tratamientos Corporales" subtitle="Servicios" />
         <ServicesOneABout/>
         <Footer/>
      </>
   );
};

export default ServicesThree;