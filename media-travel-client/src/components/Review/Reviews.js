import React, { useEffect, useState } from 'react';
import { Col, Spinner } from 'react-bootstrap';
import Review from './Review';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core'
import axios from 'axios'

const Reviews = () => {
    SwiperCore.use([Pagination, Autoplay]);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios('http://localhost:5000/review')
        .then(res => setReviews(res.data.result))
    }, [])

    return (
        <section id="testimonial">
            <h3 className="text-center secHeader">TESTIMONIALS</h3>
            <div className="text-center mb-4">
                <h4 className="text-center">WHAT OUR CUSTOMERS SAY’S </h4>
            </div>
            <Col md={11} className="mx-auto">
                <Swiper 
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 3,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    >
                    
                    {
                        reviews.length === 0 ? 
                            <div className="text-center">
                                <Spinner animation="border" variant="success" />
                            </div>: 
                            reviews.map(review => {
                                return(
                                    <SwiperSlide>
                                        <Review review={review} key={review._key}/>
                                    </SwiperSlide>
                                )
                        })
                    }
                </Swiper>
            </Col>
        </section>
    );
};

export default Reviews;