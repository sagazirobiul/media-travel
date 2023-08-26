import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import buster from '../../resources/img/footimg.svg'

const Footer = () => {
    return (
        <div class="foot mt-3">
                    <footer class="footer w-100">
                        <div class="container">
                            <div class="row">

                                <div class="col-md-3 m-b-30">
                                    <div class="footer-title m-t-5 m-b-20 p-b-8">
                                        About us
                                    </div>
                                    <p class="white-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illo id dolorem laborum deleniti quasi enim. Libero explicabo illo dolore!</p>
                                </div>

                                <div class="col-md-3 m-b-30">
                                    <div class="footer-title m-t-5 m-b-20 p-b-8">
                                        Latest services
                                    </div>
                                    <div class="footer-links">
                                        <a href="#">
                                            Appointment
                                        </a>
                                        <a href="#">
                                            Biman Flight
                                        </a>
                                        <a href="#">
                                            Cruise
                                        </a>
                                        <a href="#">
                                            Local trip
                                        </a>
                                    </div>
                                </div>

                                <div class="col-md-3 m-b-30">
                                    <div class="footer-title m-t-5 m-b-20 p-b-8">
                                        Quick Links
                                    </div>
                                    <div class="footer-links">
                                        <a href="#">
                                            Blog
                                        </a>
                                        <a href="#">
                                            FAQ
                                        </a>
                                        <a href="#">
                                            Terms & conditions
                                        </a>
                                        <a href="#">
                                            Privacy policy
                                        </a>
                                    </div>
                                </div>

                                <div class="col-md-3 m-b-30">
                                    <div class="footer-title m-t-5 m-b-20 p-b-8">
                                        Support
                                    </div>
                                    <div class="footer-links">
                                        <a href="#">
                                            Affiliate
                                        </a>
                                        <a href="#">
                                            Login
                                        </a>
                                        <a href="#">
                                            All theme package
                                        </a>
                                        <a href="#">
                                            Support forum
                                        </a>
                                    </div>
                                    <div class="footer-social-links m-t-30">
                                        <li>
                                        <a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a>
                                        <a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                                        <a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a>
                                           
                                        </li>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </footer>
                    <div className="footer-bottom">
                        <div className="col-md-11 mx-auto d-flex justify-content-between align-items-center">
                            <div>
                            Copyright © 2021, All Rights Reserved by Media Travel Agency.
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <span>Developed By - </span>
                                <img src={buster} alt="" />
                            </div>
                        </div>
                    </div>
             
        </div>
    );
};

export default Footer;