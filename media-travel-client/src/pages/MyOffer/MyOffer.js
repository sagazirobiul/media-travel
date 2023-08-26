import React from 'react';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Shared/Banner';
import NavBar from '../../components/Shared/NavBar/NavBar';
import './MyOffer.css'
import MyOfferContent from './MyOfferContent';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MyOffer = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <NavBar/>
            <Banner title="My Offer"/>
            <MyOfferContent/>
            <Footer/>
        </div>
    );
};

export default MyOffer;