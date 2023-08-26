import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './BookingCar.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PagesHeader from '../PagesHeader/PagesHeader';
import Footer from '../Footer/Footer';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import TravellerInfo from '../FlightBook/TravellerInfo';
import { useLocation } from 'react-router';



const BookingCar = () => {
    const { sendData } = useContext(UserContext);
    const stripePromise = loadStripe('pk_test_51IelfGJBxHT2pUbRm03tIDwHfgZ3s2SXe6BJjm1M77QynScexxZtvb8E63q8J5y8AWmuD2m2fZLvqpatrVPJTgof00gYNTRgWV');

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section id="booking-section">
            <PagesHeader />
            <div className="container my-5">
                <h2 className="text-center">{sendData.carName}</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h4>CARS SUMMARY</h4>
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Pick Up:</p>
                                <h5>{sendData?.carFrom}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Return:</p>
                                <h5>{sendData?.carTo}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Check-In:</p>
                                <h5>{sendData?.departingDate}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Check-Out:</p>
                                <h5>{sendData?.returningDate}</h5>
                            </div>
                        </div>
                        <div>
                            <h4>CHARGES</h4>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Fees:</p>
                                <h5>Included</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Total:</p>
                                <h5>${sendData?.totalPrice}</h5>
                            </div>
                        </div>
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
}

export default BookingCar;