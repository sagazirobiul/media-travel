import React, { useState, useContext, useEffect } from 'react';
import './FlightDetailSidebar.css';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';

const FlightDetailSidebar = () => {
    const {id} = useParams()
    const {sendData} = useContext(UserContext);
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setSendData } = useContext(UserContext)
    const [detail, setDetail] = useState({})
    const { flightFrom, flightTo, flightName, price } = detail || sendData || {}
    const onSubmit = (data) => {
        const adultPrice = data.adult * price;
        const childPrice = data.child * (price - 5);
        const totalPrice = childPrice + adultPrice;
        const newData = { totalPrice: totalPrice, flightName: flightName, ...data }
        setSendData(newData)
        history.push('/flight-booking')
    }

    useEffect(() => {
        axios(`http://localhost:5000/flights/${id}`)
            .then(res => setDetail(res.data.result[0]))
    }, [id])

    return (
        <div className="DetailSidebar">
            <h3>{flightName}</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <span className="similar">Round-trip</span>
                <div className="col-sm-12  margin-top">
                    <label>Flying from:</label>
                    <div className="input2_inner">
                        <input defaultValue={flightFrom} {...register("flightFrom", { required: true })} type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-12  margin-top">
                    <label>To:</label>
                    <div className="input2_inner">
                        <input defaultValue={flightTo} {...register("flightTo", { required: true })} type="text" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-12  margin-top">
                    <label>Departing:</label>
                    <div className="input1_inner">
                        <input {...register("departingDate", { required: true })} type="date" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-12  margin-top">
                    <label>Returning:</label>
                    <div className="input1_inner">
                        <input {...register("returningDate", { required: true })} type="date" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-12  margin-top">
                    <label className="col-md-6" >Adults:</label>
                    <div className="input2_inner col-md-6" >
                        <input defaultValue={1} {...register("adult", { required: true })} type="number" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-12  margin-top">
                    <label className="col-md-6" >Children:</label>
                    <div className="input2_inner col-md-6" >
                        <input defaultValue={1} {...register("child", { required: true })} type="number" className="form-control" />
                    </div>
                </div>
                <div className="col-sm-12  margin-top ">
                    <label>Cabin:</label>
                    <div className="select1_inner">
                        <select defaultValue='Economy' {...register("flightType", { required: true })} style={{ width: "100%" }} className="form-control">
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                            <option>First</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-12 margin-top d-flex justify-content-around">
                    <label>Total Booking:</label>
                    <span className="text-danger">${price}</span>
                </div>
                <div className=" margin-top text-center">
                    <input type="submit" className="btn hSearchBtn" value="BOOKING NOW" />
                </div>
            </form>
        </div>
    );
};

export default FlightDetailSidebar;