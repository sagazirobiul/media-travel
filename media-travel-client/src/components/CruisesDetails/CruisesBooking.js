import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import PagesHeader from '../PagesHeader/PagesHeader';
import CruisesSummary from './CruisesSummary';
import TravellerInfo from '../FlightBook/TravellerInfo';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router';
import { UserContext } from '../../App';



const CruisesBooking = () => {
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
                <h3 className="text-center">{sendData.cruiseName}</h3>
                <div className="row">
                    <div className="col-md-6">
                        <CruisesSummary />
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

export default CruisesBooking;