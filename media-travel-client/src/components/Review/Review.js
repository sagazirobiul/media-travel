import React from 'react';
import userImg from '../../resources/img/user.svg';
import './Review.css';
import Fade from 'react-reveal/Fade';

const Review = ({review}) => {
    const {name, address, description, img} = review;
    return (
        <Fade bottom duration={1000} distance='40px'>
            <div className="customerReview">
                { img ? <img src={img} alt=""/>:
                <img src={`${userImg}`} alt=""/>}
                <h5 className="testimonialName">{name}</h5>
                <h6 className="testimonialAddress">{address}</h6>
                <p><i>{description}</i></p>
            </div>
        </Fade>
    );
};

export default Review;