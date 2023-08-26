import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FlightInfo from '../FlightInfo/FlightInfo';
import FlightSidebar from '../FlightSidebar/FlightSidebar';
import PageSearch from '../PageSearch/PageSearch';
import FlyingForm from '../QuickSearch/FlyingForm';
import './Flight.css';

const Flight = () => {
    return (
        <div className="container">
               <PageSearch />
             <Row className="quickSearchForm">
                <Col md={12}>
                    <FlyingForm/>
                </Col>
            </Row>
            <div className="row mt-3">
                <div className="col-md-3">
                    <FlightSidebar/>
                </div>
                <div className="col-md-9">
                    <FlightInfo/>
                </div>
            </div>
        </div>
    );
};

export default Flight;