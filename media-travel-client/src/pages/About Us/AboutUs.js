import React from 'react';
import AboutCompany from '../../components/AboutCompany/AboutCompany';
import AboutOffer from '../../components/AboutOffer/AboutOffer';
import Footer from '../../components/Footer/Footer';
import Information from '../../components/Information/Information';
import NavBar from '../../components/Shared/NavBar/NavBar';
import OurTeam from '../../components/OurTeam/OurTeam';
import Banner from '../../components/Shared/Banner';
import './AboutUs.css'

const AboutUs = () => {
    
    return (
        <div>
            <NavBar/>
            <Banner title="About Us"/>
            <div className="aboutInfo">
                <Information/>
                <AboutOffer/>
                <AboutCompany/>
                <OurTeam/>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutUs;