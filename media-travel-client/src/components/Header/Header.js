import React from 'react';
import NavBar from '../../components/Shared/NavBar/NavBar';
import './Header.css';
import {Col, Row} from 'react-bootstrap'
import headerMap from '../../resources/img/headerMap.svg'
import QuickSearch from '../QuickSearch/QuickSearch';
import Fade from 'react-reveal/Fade';

const Header = () => {
    return (
        <section id="header">
            <NavBar/>
            <div className="headerContent">
                <Col md={11} className="mx-auto">
                    <Row className="w-100 align-items-center w-100">
                        <Col md={7}>
                            <Fade left duration={3000}>
                                <h3>WELCOME TO</h3>
                                <h1>MEDIA <span style={{color: '#00BFA6'}}>TRAVEL</span> AGENCY</h1>
                                <p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
                            </Fade>
                        </Col>
                        <Col md={5}>
                            <Fade top duration={3000} distance='100px'>
                                <img className="headerMap" src={`${headerMap}`} alt="" />
                            </Fade>
                        </Col>
                    </Row>
                </Col>
            </div>
            <Fade bottom duration={2000}>
                <QuickSearch/>
            </Fade>
        </section>
    );
};

export default Header;