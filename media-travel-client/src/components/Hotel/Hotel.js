import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageSearch from '../PageSearch/PageSearch';
import HotelForm from '../QuickSearch/HotelForm';
import './Hotel.css';
import HotelInfo from './HotelInfo';
import HotelSidebar from './HotelSidebar';

const Hotel = () => {
    return (
        <div className="container">
            <PageSearch />
             <Row className="quickSearchForm">
                <Col md={12}>
                    <HotelForm/>
                </Col>
            </Row>
            <div className="row mt-3">
                <div className="col-md-3">
                    <HotelSidebar/>
                </div>
                <div className="col-md-9">
                    <HotelInfo/>
                </div>
            </div>
        </div>
    );
};

export default Hotel;