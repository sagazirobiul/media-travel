import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { UserContext } from '../../App';
import { useContext } from 'react';

const FlightMainDetail = () => {
    const {id} = useParams()
    const {sendData} = useContext(UserContext)
    const [detail, setDetail] = useState({})
    const { flightFrom, flightTo, flightName, description, images } = detail || sendData || {}
    useEffect(() => {
        axios(`http://localhost:5000/flights/${id}`)
        .then(res => setDetail(res.data.result[0]))
    }, [id])
    return (
        <div className="text-center">
            <img style={{width: "50%"}} src={images} alt="" />
            <h1 className="text-start">{flightName}</h1>
            <p>{flightFrom} - {flightTo}</p>
            <hr />
            <p>{description}</p>
        </div>

    );
};

export default FlightMainDetail;