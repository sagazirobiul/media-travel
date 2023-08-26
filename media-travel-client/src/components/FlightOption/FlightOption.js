import React from 'react';
import { Link } from 'react-router-dom';
import './FlightOption.css';
const FlightOption = ({ data }) => {
    const { price, images, _id } = data;

    return (
        <div className="col-md-4 mt-4">
            <div className="card-sl ">
                <div className="card-image text-center">
                    <img src={images} alt="" />
                </div>
                <div className="card-heading">
                    {data.flightName ? data.flightName: data.hotelName? data.hotelName: data.carName? data.carName : data.cruiseName}
                </div>
                <div className="card-person">
                    { data.cityName && data.cityName }
                    <span className={data.roomType ? 'd-inline': 'd-none'}> ({data.roomType})</span>
                    {data.flightFrom ? data.flightFrom: data.carFrom ? data.carFrom: data.sailFrom ? data.sailFrom : ''} 
                    { !data.roomType && " - "}
                    {data.flightTo ? data.flightTo: data.carTo ? data.carTo: data.sailTo? data.sailTo : ""} 
                </div>
                <div className="card-text">
                    <span className="dolar">$</span>{price}
                </div>
                <Link 
                    to={`/pages/${data.flightName ? "flight-details" : data.hotelName ? "hotel-details": data.carName ? "car-details": "cruises-details"}/${_id}`}
                    className="card-button"
                    > Details</Link>
            </div>
        </div>


    );
};

export default FlightOption;