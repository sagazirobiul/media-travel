import React, { useState, useEffect, useContext } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import axios from 'axios';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './CruisesDetails.css'
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';

const CruisesDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const { sendData } = useContext(UserContext)
    const {setSendData} = useContext(UserContext)
    const { register, handleSubmit } = useForm();
    const [cruisesDetails, setCruisesDetails] = useState({});
    const {sailTo, sailFrom, price, images, description, cruiseName } = cruisesDetails || sendData || {}; 

    useEffect(() => {
        axios(`http://localhost:5000/cruises/${id}`)
            .then(res => setCruisesDetails(res.data.result[0]));
    }, [id]);

    const onSubmit = (data) => {
        const adultPrice = data.adult * price;
        const childPrice = data.child * (price - 5);
        const totalPrice = childPrice + adultPrice;
        const newData = { totalPrice: totalPrice, cruiseName: cruiseName, ...data }
        setSendData(newData);
        history.push('/cruises-booking')
    }

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <Container>
                <Row>
                    <Col md={3} className="mt-2">
                        <Form onSubmit={handleSubmit(onSubmit)} className="cruisesDetailsForm">
                            <h3>{cruiseName}</h3>
                            <span className="similar">Port Baltimor, USA</span>
                            <div className="mt-3">
                                <Form.Label className="fw-bold">Sail From:</Form.Label>
                                <input defaultValue={sailFrom} {...register("sailFrom", { required: true })} type="input" className="form-control" />
                            </div>
                            <div className="mt-3">
                                <Form.Label className="fw-bold">Sail To:</Form.Label>
                                <input defaultValue={sailTo} {...register("sailTo", { required: true })} type="input" className="form-control" />
                            </div>
                            <div className="mt-3">
                                <Form.Label className="fw-bold">Cabin:</Form.Label>
                                <Form.Select defaultValue="Inside" {...register("cabin", { required: true })}>
                                    <option>Inside</option>
                                    <option>Ocean View</option>
                                    <option>Balcony</option>
                                    <option>Suite</option>
                                </Form.Select>
                            </div>
                            <div className="mt-3">
                                <Form.Label className="fw-bold">Check In:</Form.Label>
                                <input {...register("checkIn", { required: true })} type="date" className="form-control" />
                            </div>
                            <div className="mt-3">
                                <Form.Label className="fw-bold">Check Out:</Form.Label>
                                <input {...register("checkOut", { required: true })} type="date" className="form-control" />
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                                <Form.Label className="fw-bold">Adults:</Form.Label>
                                <input defaultValue={1} {...register("adult", { required: true })} type="number" className="form-control ms-3" />
                            </div>
                            <div className="d-flex mt-3 align-items-center">
                                <Form.Label className="fw-bold">Children:</Form.Label>
                                <input defaultValue={1} {...register("child", { required: true })} type="number" className="form-control ms-2" />
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <span>Price:</span>
                                <span>
                                    <span className="text-danger">$ {price}</span>
                                </span>
                            </div>
                            <div className="mt-3">
                                <button className="hSearchBtn">Booking Now</button>
                            </div>
                        </Form>
                    </Col>
                    <Col md={9} className="text-center">
                        <img style={{ width: "50%" }} src={images} alt="Missing" />
                        <h1 className="text-start">{cruiseName}</h1>
                        <hr />
                        <p>{description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CruisesDetails;