import React from 'react';
import { useHistory } from 'react-router';
import './Cruises.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Fade from 'react-reveal/Fade';

const CruisesCart = (props) => {
    const {img, title, subTitle, description, reviews , id} = props.item;

    const history = useHistory();

    const handleBtn = () =>{
        history.push(`/pages/popularCruises/${id}`);
    }
    
    return (
        <Fade bottom duration={1000} distance='40px'>
            <div className="cart hCruisesReviewCart">
                <img src={img} className="img-fluid w-100" alt="" />
                <div className="d-flex align-items-center hCruisesTitle">
                    <h3>{title}</h3>
                    <span className="tour">{subTitle}</span>
                </div>
                <p className="hCruisesDes">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="review">
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <span>{reviews}</span>
                    </div>
                    <button onClick={handleBtn} className="cartBtn">SEE MORE</button>
                </div>
            </div>
        </Fade>
    );
}

export default CruisesCart;