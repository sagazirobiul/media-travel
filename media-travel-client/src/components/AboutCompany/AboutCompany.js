import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutPic from '../../resources/img/aboutPic.svg';
import './AboutCompany.css'
import ProgressMeter from './ProgressMeter';


const AboutCompany = () => {

    return (
        <Container>
            <h1 className="text-center secHeader">ABOUT OUR COMPANY</h1>
            <p className="text-center secParagrap">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
            tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <Row className="mt-2 align-items-center">
                <Col md={6}>
                    <div className="aboutPlaneContainer">
                        <img src={aboutPic} alt="" className="aboutPlane img-fluid"/>
                    </div>
                </Col>
                <Col md={6} className="aboutPlaneDes">
                    <h4>TRAVEL AGENCY</h4>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.</p>
                    <ProgressMeter/>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutCompany;