import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGift, faHotel, faPlane, faShip } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col} from 'react-bootstrap';
import FlyingForm from './FlyingForm';
import './QuickSearch.css'
import { Link } from 'react-router-dom';

const QuickSearch = () => {
    return (
        <Container id="quickSearch">
            <div className="quickSearchNav d-flex justify-content-center">
                <Link to="/pages/flight" className="navItem"><FontAwesomeIcon icon={faPlane}/> Flights</Link>
                <Link to="/pages/hotels" className="navItem"><FontAwesomeIcon icon={faHotel}/> Hotels</Link>
                <Link to="/pages/cars" className="navItem"><FontAwesomeIcon icon={faCar}/> Cars</Link>
                <Link to="/pages/cruises" className="navItem"><FontAwesomeIcon icon={faShip}/> Cruises</Link>
                <Link to="/my-offer" className="navItem"><FontAwesomeIcon icon={faGift}/> Offer</Link>
            </div>
            <Row className="quickSearchForm">
                <Col md={12}>
                    <FlyingForm/>
                </Col>
            </Row>
        </Container>
    );
};

export default QuickSearch;