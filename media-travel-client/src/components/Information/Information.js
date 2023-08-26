import React from 'react';
import { informationData } from '../../data/serviceData';
import InfoData from '../InfoData/InfoData';
import './Information.css'

const Information = () => {
    return (
        <div id="info" className="container infoSec mt-5">
            <div className="">
                <h1 className="text-center secHeader">WHY WE ARE THE BEST</h1>
                <p className="text-center secParagrap">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod<br />
                    tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="d-flex justify-content-center align-item-center">
                <div className="row pt-5">
                    {
                        informationData.map((data) => <InfoData data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Information;