import React, { useContext, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import PagesHeader from '../PagesHeader/PagesHeader';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import TravellerInfo from '../FlightBook/TravellerInfo';

const BookingHotels = () => {
    const { sendData } = useContext(UserContext);
    const stripePromise = loadStripe('pk_test_51IelfGJBxHT2pUbRm03tIDwHfgZ3s2SXe6BJjm1M77QynScexxZtvb8E63q8J5y8AWmuD2m2fZLvqpatrVPJTgof00gYNTRgWV');

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section>
            <PagesHeader />
            <div className="container my-5">
                <h2 className="text-center">{sendData.hotelName}</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h4>HOTEL SUMMARY</h4>
                        <div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Room Type:</p>
                                <h5 className="text-danger">{sendData.roomType}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Price per night:</p>
                                <h5 className="text-danger">{sendData.totalPrice}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Check-In:</p>
                                <h5 className="text-danger">{sendData.checkIn}</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Check-Out:</p>
                                <h5 className="text-danger">{sendData.checkOut}</h5>
                            </div>
                        </div>
                        <div>
                            <h4>CHARGES</h4>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Fees:</p>
                                <h5 className="text-danger">Included</h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Total:</p>
                                <h5 className="text-danger">${sendData.totalPrice}</h5>
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
};

export default BookingHotels;