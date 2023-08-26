import React from 'react';
import BrandLogo from '../../components/BrandLogo/BrandLogo';
import Happy from '../../components/Happy/Happy';
import Cruises from '../../components/Cruises/Cruises';
import Header from '../../components/Header/Header';
import Information from '../../components/Information/Information';
import Package from '../../components/Package/Package';
import Footer from '../../components/Footer/Footer';
import Reviews from '../../components/Review/Reviews';
import ScrollTop from '../../components/Shared/ScrollTop/ScrollTop';


const Home = () => {
    return (
        <div>
            <Header/>            
            <Information/>
            <Package/>
            <Cruises/>
            <Happy/>
            <Reviews/>
            <BrandLogo/>
            <Footer/>
            <ScrollTop/>
        </div>
    );
};

export default Home;
