import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import PagesHeader from '../PagesHeader/PagesHeader';
import FlightSummery from './FlightSummery';
import TravellerInfo from './TravellerInfo';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router';
import { UserContext } from '../../App';


const FlightBooking = () => {
    const stripePromise = loadStripe('pk_test_51IelfGJBxHT2pUbRm03tIDwHfgZ3s2SXe6BJjm1M77QynScexxZtvb8E63q8J5y8AWmuD2m2fZLvqpatrVPJTgof00gYNTRgWV');
    const { sendData } = useContext(UserContext);
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section>
            <PagesHeader />
            <div className="container my-5">
                <h3 className="text-center my-4">{sendData?.flightName}</h3>
                <div className="row">
                    <div className="col-md-6">
                        <FlightSummery />
                    </div>
                    <div className="col-md-6">
                        <Elements stripe={stripePromise}>
                            <TravellerInfo />
                        </Elements>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default FlightBooking;