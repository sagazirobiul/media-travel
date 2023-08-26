import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './MyOffer.css'
import Fade from 'react-reveal/Fade';
import { Row, Tab } from 'react-bootstrap';

const OfferCard = ({data, id}) => {
    const {setSendData} = useContext(UserContext)
    const offer = Number(localStorage.getItem('offer'))

    return (
        <Tab.Pane eventKey={id + 1} className="mt-2 mb-5">
            <Row className="w-100 justify-content-center">
                {
                    data.map((data, index) => {
                        return(
                            <div className="col-md-5 mt-4" key={index}>
                                <Fade bottom duration={1800} distance='40px'>
                                    <div className="offer-card-sl ">
                                        <div className="offer-card-image text-center">
                                            <img src={data.images} alt="" />
                                        </div>
                                        <div className="offer-card-heading">
                                            {data.flightName ? data.flightName: data.hotelName? data.hotelName: data.carName? data.carName : data.cruiseName}
                                        </div>
                                        <div className="offer-card-person">
                                            { data.cityName && data.cityName }
                                            <span className={data.roomType ? 'd-inline': 'd-none'}> ({data.roomType})</span>
                                            {data.flightFrom ? data.flightFrom: data.carFrom ? data.carFrom: data.sailFrom ? data.sailFrom : ''} 
                                            { !data.roomType && " - "}
                                            {data.flightTo ? data.flightTo: data.carTo ? data.carTo: data.sailTo? data.sailTo : ""} 
                                        </div>
                                        <div className="offer-card-text">
                                            <span className={`offer-card-dollar${id + 1 }`}>$</span>{
                                                index === 0 ?
                                                data.flightName ? offer + 118
                                                : 
                                                data.hotelName? offer + 58
                                                : 
                                                data.carName? offer + 14
                                                :
                                                offer + 240
                                                :
                                                data.flightName ? offer + 107
                                                : 
                                                data.hotelName? offer + 33
                                                : 
                                                data.carName? offer + 11
                                                :
                                                offer + 200
                                            }
                                        </div>
                                        <Link
                                            onClick={() => setSendData(data)}
                                            to={`/pages/${data.flightName ? "flight-details" : data.hotelName ? "hotel-details": data.carName ? "car-details": "cruises-details"}/${data._id}`}
                                            className={`offer-card-button offer-card-button${id + 1 }`}
                                            > Details</Link>
                                    </div>
                                </Fade>
                            </div>
                        )
                    })
                }
            </Row>
        </Tab.Pane>
    )
};

export default OfferCard;