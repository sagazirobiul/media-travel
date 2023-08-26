import React from 'react';
import '../../pages/About Us/AboutUs.css'

const Banner = ({title}) => {
    return (
        <div className="d-flex justify-content-center align-items-center banner">
            <h3>{title}</h3>
        </div>
    );
};

export default Banner;