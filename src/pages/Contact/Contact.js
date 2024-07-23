import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../Home/Home/HomeFooter/HomeFooter';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';

const Contact = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Contactanos" subtitle="Contactanos" />
            <ContactArea/>
            <ContactFormArea/>
            <ContactMap/>
            <Footer/>
        </>
    );
};

export default Contact;