import React, { useState, useEffect } from 'react';
import './Cruises.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core'
import data from '../../data/cruisesData';
import CruisesCart from './CruisesCart';

const Cruises = () => {
    const [cruises, setCruises] = useState([]);

    useEffect(() => {
        setCruises(data)
    }, [])

    SwiperCore.use([Pagination, Autoplay]);

    return (
        <section id="cruises" className="infoSec">
            <div className="container my-5">
                <div className="row mb-2">
                    <h1 className="text-center secHeader">POPULAR CRUISES</h1>
                    <p className="w-75 text-center mx-auto secParagrap">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
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
                            cruises.map(item => 
                            <SwiperSlide>
                                <CruisesCart item={item}></CruisesCart>
                            </SwiperSlide>)
                        }
                        ...
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Cruises;