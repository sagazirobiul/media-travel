import { faArrowRight, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import PagesTestimonial from '../PagesTestimonial/PagesTestimonial';

const FlightSidebar = () => {
    return (
        <div>
            <Row>
                <Col>
                    <div className="sideFormItem d-flex">
                        <h6 className="me-2">Passenger: </h6>
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
                    </div>
                </Col>
            </Row>
            <div>
                <div className="sideBarItem d-flex justify-content-between">
                    <h5>Start Rating</h5>
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                </div>
                <div className="sideBarItem d-flex justify-content-between">
                    <h5>Price Range</h5>
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                </div>
                <div className="sideBarItem d-flex justify-content-between">
                    <h5>Departure Ports</h5>
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                </div>
                <div className="sideBarItem d-flex justify-content-between">
                    <h5>Trip Duration</h5>
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                </div>
                <div className="sideBarItem d-flex justify-content-between">
                    <h5>Ships</h5>
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                </div>
            </div>
            <PagesTestimonial/>
        </div>
    );
};

export default FlightSidebar;