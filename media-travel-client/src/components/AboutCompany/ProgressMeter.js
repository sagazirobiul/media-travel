import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './AboutCompany.css'

const ProgressMeter = () => {
    return (
        <>
        <h6 className="progressHeader">Flights</h6>
        <ProgressBar animated now="95" label='95%' />
        <h6 className="progressHeader">Hotels</h6>
        <ProgressBar animated now="87" label='87%' />
        <h6 className="progressHeader">Cars</h6>
        <ProgressBar animated now="45" label='45%' />
        <h6 className="progressHeader">Cruises</h6>
        <ProgressBar animated now="60" label='51%' />   
        </>
    );
};

export default ProgressMeter;