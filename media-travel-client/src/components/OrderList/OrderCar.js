import React, { useEffect, useState } from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import axios from 'axios';
import OrderListAnalyse from './OrderListAnalyse';
import TableLoader from '../Shared/TableLoader';

const OrderCar = () => {
    const [carData, setCarData] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(() => {
        axios(`http://localhost:5000/carBooking`)
            .then(res => setCarData(res.data.result))
    }, [isUpdated]);

    const handUpdate = (id, status, obj) => {
        const updatedData = {...obj, status: status}
        setIsUpdated(true)
        axios.patch(`http://localhost:5000/carBooking/${id}`, updatedData)
        .then(res => res.data && setIsUpdated(false))
    }

    const renderCarDataList = (carData, index) => {
        const setBackground = {
            color: '#FFFFFF',
            background: carData?.status === 'Expired' ? 'rgb(255 78 96)' : carData?.status === 'Booked' ? 'rgb(73 146 255)' :'rgb(31 204 123)'
        }
        return (
            <tr key={index}>
                <td>{carData.email}</td>
                <td>{carData.carFrom}</td>
                <td>{carData.carTo}</td>
                <td>{carData.departingDate.substring(0, 10)}</td>
                <td>{carData.returningDate.substring(0, 10)}</td>
                <td>{carData.totalPrice}</td>
                <td>
                    <Dropdown class="statusBtn" id="dropdown-basic-button">
                        <Dropdown.Toggle style={setBackground}>
                            {carData.status}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handUpdate(carData._id, "Expired", carData)} id="expired">Expired</Dropdown.Item>
                            <Dropdown.Item onClick={() => handUpdate(carData._id, "Checked", carData)} id="checked">Checked</Dropdown.Item>
                            <Dropdown.Item onClick={() => handUpdate(carData._id, "Booked", carData)} id="booked">Booked</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
        )
    }
    return (
        <div className="px-2">
            <OrderListAnalyse data={carData}/>
            {
                carData.length === 0 ? <TableLoader/>:
                <div className="manageList">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Pick Up</th>
                                <th>Destination</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Total($)</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carData.map(renderCarDataList)}
                        </tbody>
                    </Table>
                </div>
            }
        </div>
    );
};

export default OrderCar;