import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

const SingleCar = ({ car }) => {
    const { images, carName, carType, location, price, _id} = car;
    
    return (
        <div className="col-md-4 my-3">
            <div className="card-sl">
                <div className="card-image text-center">
                    <img src={images} alt="" />
                </div>
                <div className="card-heading">
                    {carName}
                </div>
                <div className="card-person">
                    <h5>{location}</h5>
                </div>
                <div className=" card-text">
                {carType} $ {price}
                </div>
                <Link  to={`/pages/car-details/${_id}`} className="card-button"> Details</Link>
            </div>
        </div>
    );
};

export default SingleCar;