import React from 'react';
import './MyOffer.css'
import offerImg from '../../resources/img/offer.svg';
import { Col, Row, Tab, Nav } from 'react-bootstrap';
import { useState } from 'react';
import plane from '../../resources/img/airplane.png';
import hotel from '../../resources/img/hotel.png'
import car from '../../resources/img/sedan-car-front.png'
import cruise from '../../resources/img/cruise.png'
import SpinnerC from './../../components/Shared/SpinnerC';
import OfferCard from './OfferCard';
import{ flightData } from '../../data/myOfferData/flightData'
import { hotelData } from '../../data/myOfferData/hotelData'
import { carData } from '../../data/myOfferData/carData'
import { cruiseData } from '../../data/myOfferData/cruiseData'
import { useEffect } from 'react';
import { useRef } from 'react';


const MyOfferContent = () => {
    const [timeHours, setTimeHours] = useState('00')
    const [timeMinutes, setTimeMinutes] = useState('00')
    const [timeSeconds, setTimeSeconds] = useState('00')

    let interval = useRef();

    const startTimer = () => {

        const year = new Date().getFullYear()
        const countDownDate = new Date(`Jan 5, ${year + 1} 15:37:25`).getTime();

        interval = setInterval(() =>{
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if(distance < 0){
                clearInterval(interval.current)
            } else {
                setTimeHours(hours)
                setTimeMinutes(minutes)
                setTimeSeconds(seconds)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    const offerDataCollection = [flightData, hotelData, carData, cruiseData]

    return (
        <div className=" my-5">
            <h1 className="myOfferSecHeader">
                you are special, so this offer is only for you!
            </h1>
            <Row className="w-100 px-5 my-5 py-3 align-items-center">
                <Col md={5}>
                    <div className="d-flex justify-content-center">
                        <div className="countDownSec">
                            <h5>Offer Will be expired</h5>
                            <h4 id="demo">{timeHours + "h " + timeMinutes + "m " + timeSeconds + "s "}</h4>
                        </div>
                    </div>
                    <img src={offerImg} alt="" className="myOfferImg"/>
                </Col>
                <Col md={7}>
                    <Tab.Container defaultActiveKey="1"> 
                        <Row>
                            <Col md={10} className="mx-auto">
                                <Nav className="pricingNav">
                                    <Nav.Item className="priceLink1">
                                        <Nav.Link eventKey="1">
                                            <img src={`${plane}`} alt="" />
                                            Flights
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="priceLink2">
                                        <Nav.Link eventKey="2">
                                            <img src={`${hotel}`} alt="" />
                                            Hotels
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="priceLink3">
                                        <Nav.Link eventKey="3">
                                            <img src={`${car}`} alt="" />
                                            Cars
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="priceLink4">
                                        <Nav.Link eventKey="4">
                                            <img src={`${cruise}`} alt="" />
                                            Cruises
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                        </Col>
                        <Tab.Content>
                            {
                                offerDataCollection.length === 0 ?
                                <div className="spinner text-center mt-3"><SpinnerC/></div>:
                                offerDataCollection.map((data, index) => <OfferCard id={index} data={data} key={index}/>)
                            }
                        </Tab.Content>
                    </Row>
                </Tab.Container>
                </Col>
            </Row>
        </div>
    );
};

export default MyOfferContent;