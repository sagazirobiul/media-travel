import React from 'react';
import './OrderList.css'
import { useState, useEffect } from 'react';

const OrderListAnalyse = ({data}) => {
    const [totalUser, setTotalUser] = useState(0)
    const [totalBooked, setTotalBooked] = useState(0)
    const [totalChecked, setTotalChecked] = useState(0)
    const [totalExpired, setTotalExpired] = useState(0)
    
    useEffect(() => {
        let user = []
        let booked = 0;
        let checked = 0;
        let expired = 0;
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const index = user.indexOf(element.email);
            if(index === -1) {
                user.push(element.email)
            }
            if(element.status === 'Booked'){
                booked++;
            } else if(element.status === 'Checked') {
                checked++;
            } else if(element.status === 'Expired'){
                expired++;
            }
        }
        setTotalUser(user.length)
        setTotalBooked(booked)
        setTotalChecked(checked)
        setTotalExpired(expired)
    }, [data])


    return (
        <div className="w-100 d-flex justify-content-around mt-2">
            <div className="orderData">
                <h5>Total Data</h5>
                <h4>{data.length || '00'}</h4>
            </div>
            <div className="orderUser">
                <h5>Total User</h5>
                <h4>{totalUser || '00'}</h4>
            </div>
            <div className="orderBooked">
                <h5>Total Booked</h5>
                <h4>{totalBooked || '00'}</h4>
            </div>
            <div className="orderChecked">
                <h5>Total Checked</h5>
                <h4>{totalChecked || '00'}</h4>
            </div>
            <div className="orderExpired">
                <h5>Total EXpired</h5>
                <h4>{totalExpired || '00'}</h4>
            </div>
        </div>
    );
};

export default OrderListAnalyse;