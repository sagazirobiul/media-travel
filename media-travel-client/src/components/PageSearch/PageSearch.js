import { faCar, faGift, faHotel, faPlane, faShip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PageSearch.css';

const PageSearch = () => {
    return (
        <Container id="pageSearch">
        <div className="pageSearchNav d-flex justify-content-center">
            <Link to="/pages/flight" className="navItem"><FontAwesomeIcon icon={faPlane}/> Flights</Link>
            <Link to="/pages/hotels" className="navItem"><FontAwesomeIcon icon={faHotel}/> Hotels</Link>
            <Link to="/pages/cars" className="navItem"><FontAwesomeIcon icon={faCar}/> Cars</Link>
            <Link to="/pages/cruises" className="navItem"><FontAwesomeIcon icon={faShip}/> Cruises</Link>
            <Link to="/my-offer" className="navItem"><FontAwesomeIcon icon={faGift}/> Offer</Link>
        </div>
    </Container>
    );
};

export default PageSearch;