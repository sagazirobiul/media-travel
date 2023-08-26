import React, { useContext } from 'react';
import { UserContext } from '../../App';


const FlightSummery = () => {
    const { sendData } = useContext(UserContext);
    
    return (
        <div>
            <h3 className="line">FLIGHTS SUMMARY / 1 Stop(AMS)</h3>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>Flying from:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.flightFrom}</span>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>To:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.flightTo}</span>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>Departing:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.departingDate}</span>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>Returning:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.returningDate}</span>
                </div>
            </div>
            <h3 className="line my-2">CHARGES</h3>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>Cabin:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.flightType}</span>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>Fees</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>Included</span>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>TOTAL</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>$ {sendData?.totalPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default FlightSummery;