import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import cruisesDetails from '../../data/cruisesData.json';



const PopularCruises = () => {
    const { id } = useParams();

    const cruisesData = cruisesDetails.find(cruises => cruises.id == id);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-8 offset-md-2">
                    <img src={cruisesData.img} className="w-75 my-3" alt="cruises-image" />
                    <div className="d-flex align-items-center">
                        <h2>{cruisesData.title}</h2>
                        <span>{cruisesData.subTitle}</span>
                    </div>

                    <div className="review mb-2">
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <FontAwesomeIcon className="review-icon" icon={faStar} />
                        <span>{cruisesData.reviews}</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda soluta quaerat modi nobis inventore? Illo vel fugit obcaecati enim ad.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam quam accusamus tempora ipsum dicta maiores nobis necessitatibus atque. Officiis rerum aliquid architecto sit expedita, rem repellat quae voluptates corrupti?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellat, sunt cum odit dolore fugit enim sed fugiat alias consectetur commodi, nemo temporibus aspernatur perferendis animi ipsum quia facere molestiae id? At nesciunt animi ratione perferendis in sint sequi modi?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias mollitia repellat itaque nisi omnis cupiditate.</p>
                </div>
            </div>
        </div>
    );
};

export default PopularCruises;