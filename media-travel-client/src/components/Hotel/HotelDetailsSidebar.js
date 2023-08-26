import React, { useState, useContext, useEffect } from 'react';
import '../FlightDetail/FlightDetailSidebar.css';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

const HotelDetailsSidebar = () => {
    const {id} = useParams()
    const history = useHistory();
    const { register, handleSubmit} = useForm();
    const { sendData, setSendData } = useContext(UserContext)
    const [detail, setDetail] = useState({})
    const { hotelName, price, cityName, roomType } = detail || sendData || {}

    const onSubmit = (data) => {
        const totalPrice = data.adult * price;
        const newData ={totalPrice: totalPrice, hotelName: hotelName, ...data}
        setSendData(newData)
        history.push('/hotel-booking')
    }

    useEffect(() => {
        axios(`http://localhost:5000/hotels/${id}`)
        .then(res => setDetail(res.data.result[0]))
    }, [id])

    return (
        <div className="DetailSidebar my-4">
            <h3>{hotelName}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-sm-12  margin-top">
                    <label className="col-md-6" >CityName:</label>
                    <div className="input2_inner" >
                        <input defaultValue={cityName} {...register("cityName", { required: true })} type="input" className="form-control"/>
                    </div>
                </div>
                <div className="col-sm-12  margin-top">
                    <label>Check In:</label>
                    <div className="input1_inner">
                        <input {...register("checkIn", { required: true })} type="date" className="form-control"/>
                    </div>
                </div>
                <div className="col-sm-12  margin-top">
                    <label>Check Out:</label>
                    <div className="input1_inner">
                        <input {...register("checkOut", { required: true })} type="date" className="form-control"/>
                    </div>
                </div>
                <div className="col-sm-12  margin-top">
                    <label className="col-md-6" >Room Type:</label>
                    <div className="input2_inner">
                        <input defaultValue={roomType} {...register("roomType", { required: true })} type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-12  margin-top">
                    <label className="col-md-6" >Adults:</label>
                    <div className="input2_inner col-md-6" >
                        <input defaultValue={1} {...register("adult", { required: true })} type="number" className="form-control"/>
                    </div>
                </div>
                <div className="col-sm-12 margin-top d-flex justify-content-around">
                    <label>Total Booking:</label>
                    <span className="text-danger">$ {price}</span>
                </div>
                <div className=" margin-top text-center">
                    <input type="submit" className="btn hSearchBtn" value="BOOKING NOW" />
                </div>
            </form>
        </div>
    );
};

export default HotelDetailsSidebar;