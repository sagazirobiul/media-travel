import React from 'react';
import { Row, Col, Form, } from 'react-bootstrap';
import { UserContext } from './../../App';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const FlyingForm = () => {
    const { register, handleSubmit } = useForm();
    const { setSendData } = useContext(UserContext)

    const onSubmit = (data) => {
        if(data.flightFrom === data.flightTo){
            toast.error('Please do a valid query. Flying From and Flying to should be unique.!');
        } else {
            setSendData(data)
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md={4}>
                    <Row>
                        <Col>
                            <Form.Label className="fw-bold">Flying from:</Form.Label>
                            <Form.Select defaultValue="Canada" {...register("flightFrom", { required: true })}>
                                <option>Canada</option>
                                <option>Alaska</option>
                                <option>Bahamas</option>
                                <option>California</option>
                                <option>Texas</option>
                                <option>NewYork</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Label className="fw-bold">To:</Form.Label>
                            <Form.Select defaultValue="NewYork" {...register("flightTo", { required: true })}>
                                <option>Canada</option>
                                <option>Alaska</option>
                                <option>Bahamas</option>
                                <option>California</option>
                                <option>Texas</option>
                                <option>NewYork</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col md={6}>
                            <Form.Label className="fw-bold">Departing:</Form.Label>
                            <input type="date" className="form-control"/>
                        </Col>
                        <Col md={6}>
                            <Form.Label className="fw-bold">Returning:</Form.Label>
                            <input type="date" className="form-control"/>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col>
                            <Form.Label className="fw-bold">Adult:</Form.Label>
                            <Form.Select>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9+</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Label className="fw-bold">Child:</Form.Label>
                            <Form.Select>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9+</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <div className="hBtnWrapper">
                                <button type="submit" className="hSearchBtn">SEARCH</button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    );
};

export default FlyingForm;