import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutOffer.css'

const AboutOffer = () => {
    return (
        <Container>
            <div className="aboutOffer">
                <h1 className="text-center secHeader">WHAT WE OFFER ?</h1>
                <p className="text-center secParagrap">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
                tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                <Row>
                    <Col md={6}>
                        <div className="aboutOfferContainer mt-2">
                            <div className="aboutOfferItem d-flex align-items-center">
                                <span className="aboutOfferIcon"><FontAwesomeIcon icon={faChevronCircleRight}/></span>
                                <h5 style={{marginLeft: '0.8rem'}}>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet.</h5>
                            </div>
                            <div className="aboutOfferItem d-flex align-items-center">
                                <span className="aboutOfferIcon"><FontAwesomeIcon icon={faChevronCircleRight}/></span>
                                <h5 style={{marginLeft: '0.8rem'}}>Option congue nihil imperdiet doming id quod mazim placerat facer.</h5>
                            </div>
                            <div className="aboutOfferItem d-flex align-items-center">
                                <span className="aboutOfferIcon"><FontAwesomeIcon icon={faChevronCircleRight}/></span>
                                <h5 style={{marginLeft: '0.8rem'}}>Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes.</h5>
                            </div>
                            <div className="aboutOfferItem d-flex align-items-center">
                                <span className="aboutOfferIcon"><FontAwesomeIcon icon={faChevronCircleRight}/></span>
                                <h5 style={{marginLeft: '0.8rem'}}>Investigationes demonstraverunt lectores.</h5>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <p className="aboutOfferDes">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default AboutOffer;