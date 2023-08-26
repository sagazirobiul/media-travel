import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RentCar from '../RentCar/RentCar';
import FlightSidebar from '../FlightSidebar/FlightSidebar';
import PageSearch from '../PageSearch/PageSearch';
import SearchCar from '../SearchCar/SearchCar';

const ShowCars = () => {
    return (
        <section>
            <Container>
            <PageSearch />
                <Row className="quickSearchForm">
                    <Col md={12}>
                        <SearchCar />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={3}>
                        <FlightSidebar />
                    </Col>
                    <Col md={9}>
                        <RentCar/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ShowCars;