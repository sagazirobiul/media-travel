import React, { useContext } from 'react';
import { UserContext } from '../../App';


const CruisesSummary = () => {
    const { sendData } = useContext(UserContext);

    return (
        <div>
            <h3 className="line">CRUISES SUMMARY</h3>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>Sail from:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.sailFrom}</span>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>To:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.sailTo}</span>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>Check In:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.checkIn}</span>
                </div>
            </div>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>Check Out:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.checkOut}</span>
                </div>
            </div>
            <h3 className="line mt-3">CHARGES</h3>
            <div className="row mt-3">
                <label className="col-md-6" style={{ paddingTop: "12px" }}>Cabin:</label>
                <div className="col-md-6 mt-1">
                    <span className="text-danger" style={{fontSize: "20px", fontWeight:700 }}>{sendData?.cabin}</span>
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

export default CruisesSummary;