import React from 'react';
import './serviceKnow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/Shared/NavBar/NavBar';
import img1 from '../../resources/img/moreKnow/blog-p-1.jpg';
import img2 from '../../resources/img/moreKnow/blog-p-2.jpg';
import img3 from '../../resources/img/moreKnow/blog-p-3.jpg';
import img4 from '../../resources/img/moreKnow/blog-p-4.png';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Shared/Banner';

const serviceKnow = () => {
    return (
        <div className="serviceKnow">
            <NavBar />
            <Banner title="Latest News"/>
            <section class="blog" id="blog">
                <div class="containerService">
                    <div class="blog-content">

                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={img1} alt="Not Found......." />
                                <span><i> <FontAwesomeIcon icon={faHeart} /></i></span>
                            </div>
                            <div class="blog-text">
                                <span>20 January, 2021</span>
                                <h2>Take memories, leave footprints.</h2>
                                <p>What’s on my bucket list? Everywhere. Until you step into the unknown, you don’t know what you’re made of.</p>
                            </div>
                        </div>

                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={img2} alt="" />
                                <span><i> <FontAwesomeIcon icon={faHeart} /></i></span>
                            </div>
                            <div class="blog-text">
                                <span>10 May, 2021</span>
                                <h2>Always say yes to new adventures.</h2>
                                <p>Life is short and the world is wide. I better get started. Until you step into the unknown, you don’t know what you’re made of.</p>
                            </div>
                        </div>

                        <div class="blog-item">
                            <div class="blog-img">
                                <img src={img3} alt="" />
                                <span><i> <FontAwesomeIcon icon={faHeart} /></i></span>
                            </div>
                            <div class="blog-text">
                                <span>20 December, 2021</span>
                                <h2>Keep calm and travel on.</h2>
                                <p>The best things happen outside of our comfort zones. Until you step into the unknown, you don’t know what you’re made of.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section class="about" id="about">
                <div class="container">
                    <div class="about-content">
                        <div>
                            <img src={img4} alt="" />
                        </div>
                        <div class="about-text">
                            <div class="title">
                                <h2>Only going places that spark joy.</h2>
                                <p>Life is not meant to be in one place.</p>
                            </div>
                            <p>When I’m exploring the world is when I feel most at home.
                            The best things happen outside of our comfort zones. Will travel for food (and a good sunset).
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    );
};

export default serviceKnow;