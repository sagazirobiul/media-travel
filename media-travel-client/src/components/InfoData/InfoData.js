import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./InfoData.css";
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom';

const InfoData = ({ data }) => {
    const { icon, name, description } = data;
    return (
        <div className="col-md-3 col-sm-6">
            <Zoom bottom distance='30px' className='homeInfoCard'>
                <div className="info">
                    <img className="imageInfo text-center" src={icon} alt="" />
                    <h4 className="text-center">{name}</h4>
                    <p className="text-center">{description}</p>
                    <NavLink to="/serviceKnow"><small><p className="text-center">Read More <FontAwesomeIcon icon={faArrowRight} /></p></small></NavLink>
                </div>
            </Zoom>
        </div>
    );
};

export default InfoData;