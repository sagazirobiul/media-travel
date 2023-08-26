import React from 'react';
import './CruisesPack.css'
import { Row, Form, Col} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { useContext } from 'react';
import toast from 'react-hot-toast';


const CruisesForm = () => {
    const { register, handleSubmit } = useForm();
    const { setSendData } = useContext(UserContext)

    const onSubmit = (data) => {
        if(data.sailFrom === data.sailTo){
            toast.error('Please do a valid query. Sail From and Sail to should be unique.!');
        } else {
            setSendData(data)
        }
    }

    return (
            <Row className="quickSearchForm">
                <Col md={12}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col>
                                    <Form.Label className="fw-bold">Sail To:</Form.Label>
                                    <Form.Select defaultValue="Canada" {...register("sailFrom", { required: true })}>
                                        <option>Canada</option>
                                        <option>Alaska</option>
                                        <option>Bahamas</option>
                                        <option>California</option>
                                        <option>Texas</option>
                                        <option>NewYork</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Label className="fw-bold">Sail Form:</Form.Label>
                                    <Form.Select defaultValue="NewYork" {...register("sailTo", { required: true })}>
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
                                    <Form.Label className="fw-bold">Start Date:</Form.Label>
                                    <input type="date" className="form-control"/>
                                </Col>
                                <Col md={6}>
                                    <Form.Label className="fw-bold">End of Date:</Form.Label>
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
                </Col>
            </Row>
    );
};

export default CruisesForm;