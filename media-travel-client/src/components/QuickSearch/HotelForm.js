import React, { useContext } from 'react';
import { Row, Col, Form, } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const HotelForm = () => {
    const { register, handleSubmit } = useForm();
    const { setSendData } = useContext(UserContext)

    const onSubmit = (data) => {
            setSendData(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col md={4}>
                    <Row>
                        <Col>
                            <Form.Label className="fw-bold">City:</Form.Label>
                            <Form.Select defaultValue="Las vegas" {...register("cityName", { required: true })}>
                                <option>Las vegas</option>
                                <option>Paris</option>
                                <option>California</option>
                                <option>London</option>
                                <option>NewYork</option>
                                <option>Texas</option>
                            </Form.Select>
                        </Col>
                       
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col md={6}>
                            <Form.Label className="fw-bold">Check-In:</Form.Label>
                            <input type="date" className="form-control"/>
                        </Col>
                        <Col md={6}>
                            <Form.Label className="fw-bold">Check-Out:</Form.Label>
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

export default HotelForm;