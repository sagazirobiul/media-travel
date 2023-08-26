import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router';
import HotelDetailsSidebar from './HotelDetailsSidebar';
import axios from 'axios';
import { UserContext } from '../../App';

const HotelDetails = () => {
    const {id} = useParams()
    const { sendData } = useContext(UserContext)
    const [detail, setDetail] = useState({})
    const { images, description, hotelName} = detail || sendData || {};
    useEffect(() => {
        axios(`http://localhost:5000/hotels/${id}`)
            .then(res => setDetail(res.data.result[0]))
    }, [id])

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <HotelDetailsSidebar />
                </div>
                <div className="text-center col-md-8 col-sm-12 mt-3">
                    <img style={{ width: "50%" }} src={images} alt="Missing" />
                    <h1 className="text-start">{hotelName}</h1>
                    <hr />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;