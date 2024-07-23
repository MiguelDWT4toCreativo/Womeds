import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../Home/Home/HomeFooter/HomeFooter';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CounterArea from './CounterArea/CounterArea';
import DoctorOneTeamArea from './DoctorOneTeamArea/DoctorOneTeamArea';

const DoctorsOne = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Especialistas" subtitle="Especialistas" />
            <DoctorOneTeamArea/>
            <CounterArea/>
            <Footer/>
        </>
    );
};

export default DoctorsOne;