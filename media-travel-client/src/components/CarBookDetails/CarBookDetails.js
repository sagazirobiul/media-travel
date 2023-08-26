import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router';
import { UserContext } from '../../App';
import './CarBookDetails.css';
import { useForm } from 'react-hook-form';

const CarBookDetails = () => {
    const { id } = useParams()
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setSendData } = useContext(UserContext)
    const [detail, setDetail] = useState({})
    const { carFrom, carTo, carName, price, images, description } = detail || {}

    const onSubmit = (data) => {
        const newData = { totalPrice: price, carName: carName, ...data }
        setSendData(newData)
        history.push('/car-booking')
    }

    useEffect(() => {
        axios(`http://localhost:5000/cars/${id}`)
            .then(res => setDetail(res.data.result[0]))
    }, [id])

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <section id="car-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 details-form p-4 mb-5 h-75">
                        <h5>{carName}</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <span className="similar">Round-trip</span>
                            <div className="col-sm-12  margin-top">
                                <label>Pick Up:</label>
                                <div className="input2_inner">
                                    <input defaultValue={carFrom} {...register("carFrom", { required: true })} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-12  margin-top">
                                <label>Return:</label>
                                <div className="input2_inner">
                                    <input defaultValue={carTo} {...register("carTo", { required: true })} type="text" className="form-control" />
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
                            <div className="col-sm-12 margin-top d-flex justify-content-around">
                                <label>Total Booking:</label>
                                <span className="text-danger">$ {price}</span>
                            </div>
                            <div className=" margin-top text-center">
                                <input type="submit" className="btn hSearchBtn" value="BOOKING NOW" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-9 text-center">
                        <img style={{ width: "50%" }} src={images} alt="" />
                        <h1 className="text-start">{carName}</h1>
                        <p>{carFrom} - {carTo}</p>
                        <hr />
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CarBookDetails;