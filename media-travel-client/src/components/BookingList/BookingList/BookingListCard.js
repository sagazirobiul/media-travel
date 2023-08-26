import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faHotel, faHelicopter, faShip } from '@fortawesome/free-solid-svg-icons';

const BookingListCard = ({ info }) => {

    return (
        <div className="col-md-4">
            <div className="userServiceCard p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="bookingIcon"><FontAwesomeIcon icon={info.flightName ? faHelicopter : info.hotelName ? faHotel : info.carName ? faCar : faShip} /> </div>
                        <div className="ms-2 c-details">
                            <h4 text="primary" className="mb-0 fw-bold"> {info.flightName ? info.flightName : info.hotelName ? info.hotelName : info.carName ? info.carName : info.cruiseName}</h4> 
                        </div>
                    </div>
                    <div className="badge" style={{cursor: "pointer"}}> <span>Booked</span> </div>
                </div>
                <div className="mt-5 px-5">
                    {
                        info.roomType ? <h6><span className="fst-italic text-info">Room Type: </span>{info.roomType}</h6> :
                            <>
                                <h6><span className="fst-italic text-info"> From: </span>{info.flightName ? info.flightFrom : info.carName ? info.carFrom : info.sailFrom}</h6>
                                <h6><span className="fst-italic text-info">To: </span>{info.flightName ? info.flightTo : info.carName ? info.carTo : info.sailTo}</h6>
                            </>
                    } 
                    <h6><span className="fst-italic text-info">checkIn Date: </span>{info.flightName ? info.departingDate.substring(0,10) : info.carName ? info.departingDate.substring(0,10) : info.checkIn.substring(0,10)}</h6>
                    <h6><span className="fst-italic text-info">CheckOut Date:</span> {info.flightName ? info.returningDate.substring(0,10) : info.carName ? info.returningDate.substring(0,10) : info.checkOut.substring(0,10)}</h6>
                    <h5><span className="fst-italic text-info">Total Cost:  $</span><span className="text-danger fw-bold">{info.flightName ? info.totalPrice : info.hotelName ? info.totalPrice : info.carName ? info.totalPrice : info.totalPrice}</span></h5>

                </div>
            </div>
        </div>
    );
};

export default BookingListCard;