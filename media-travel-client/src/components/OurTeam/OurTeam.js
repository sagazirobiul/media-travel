import { faBehance, faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { teamData } from '../../data/teamData';
import './OurTeam.css'

const OurTeam = () => {
    return (
        <Container className="aboutTeam">
            <h1 className="text-center secHeader">OUR TEAM</h1>
            <p className="text-center secParagrap">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
            tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <Row>
                {
                    teamData.map(({name, role, img}) => {
                        return <Col md={3}>
                            <div className="teamCard">
                                <div className="teamImg">
                                    <img src={`${img}`} alt="" />
                                    <h6>{role}</h6>
                                </div>
                                <h5>{name}</h5>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faFacebook}/>
                                </span>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </span>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </span>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faGoogle}/>
                                </span>
                                <span className="aboutSocial">
                                    <FontAwesomeIcon icon={faBehance}/>
                                </span>
                                <span className="aboutSocial">
                                    
                                </span>
                            </div>
                        </Col>
                    })
                }
            </Row>
        </Container>
    );
};

export default OurTeam;