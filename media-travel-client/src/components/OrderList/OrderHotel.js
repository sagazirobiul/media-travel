import React, { useEffect, useState } from 'react';
import { Table, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import OrderListAnalyse from './OrderListAnalyse';
import TableLoader from '../Shared/TableLoader';

const OrderHotel = () => {
    const [hotelData, setHotelData] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)
    
    useEffect(() => {
        axios(`http://localhost:5000/hotelBooking`)
            .then(res => setHotelData(res.data.result))
    }, [isUpdated]);

    const handUpdate = (id, status, obj) => {
        const updatedData = {...obj, status: status}
        setIsUpdated(true)
        axios.patch(`http://localhost:5000/hotelBooking/${id}`, updatedData)
        .then(res => res.data && setIsUpdated(false))
    }

    const renderHotelDataList = (hotelData, index) => {
        const setBackground = {
            color: '#FFFFFF',
            background: hotelData?.status === 'Expired' ? 'rgb(255 78 96)' : hotelData?.status === 'Booked' ? 'rgb(73 146 255)' :'rgb(31 204 123)'
        }
        return (
            <tr key={index}>
                <td>{hotelData.email}</td>
                <td>{hotelData.hotelName}</td>
                <td>{hotelData.checkIn.substring(0, 10)}</td>
                <td>{hotelData.checkOut.substring(0, 10)}</td>
                <td className="text-center">{hotelData.totalPrice}</td>
                <td>
                    <Dropdown class="statusBtn" id="dropdown-basic-button">
                        <Dropdown.Toggle style={setBackground}>
                            {hotelData.status}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handUpdate(hotelData._id, "Expired", hotelData)} id="expired">Expired</Dropdown.Item>
                            <Dropdown.Item onClick={() => handUpdate(hotelData._id, "Checked", hotelData)} id="checked">Checked</Dropdown.Item>
                            <Dropdown.Item onClick={() => handUpdate(hotelData._id, "Booked", hotelData)} id="booked">Booked</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
        )
    }
    return (
        <div className="px-2">
            <OrderListAnalyse data={hotelData}/>
                {
                    hotelData.length === 0 ? <TableLoader/>:
                    <div className="manageList">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>HotelName</th>
                                    <th>Check In</th>
                                    <th>Check Out</th>
                                    <th>Total($)</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hotelData.map(renderHotelDataList)}
                            </tbody>
                        </Table>
                    </div>
                }
        </div>
    );
};

export default OrderHotel;