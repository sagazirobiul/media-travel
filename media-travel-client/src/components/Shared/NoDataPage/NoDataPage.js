import React from 'react';
import './NoDataPage.css'
import noData from '../../../resources/img/noData.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

const NoDataPage = ({handleReloadData}) => {
    return (
        <div className="noDataPage">
            <h2 className="noDataHeader">404 data not found</h2>
            <div className="tex-center my-3">
                <img src={noData} alt="" />
            </div>
            <span className="seeAllData">See all data again<button className="reloadDataBtn" onClick={handleReloadData}><FontAwesomeIcon icon={faRedoAlt}/></button></span>
        </div>
    );
};

export default NoDataPage;

