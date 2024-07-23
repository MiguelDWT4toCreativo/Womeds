import React from 'react';
import HomeAboutArea from './HomeAboutArea/HomeAboutArea';
import HomeCta from './HomeCta/HomeCta';
import HomeFact from './HomeFact/HomeFact';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeOurTeam from './HomeOurTeam/HomeOurTeam';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeHeroSection/>
            <HomeAboutArea/>
            <HomeServices/>
            <HomeOurTeam/>
            <HomeFact/>
            <HomeCta/>
            <HomeFooter/>
        </>
    );
};

export default Home;