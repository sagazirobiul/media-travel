import React,{useEffect,useState} from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import axios from 'axios';
import TableLoader from '../Shared/TableLoader';
import OrderListAnalyse from './OrderListAnalyse';

const OrderCruises = () => {
    const [cruiseData,setCruiseData] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)

    useEffect(() => {
        axios(`http://localhost:5000/cruiseBooking`)
          .then(res => setCruiseData(res.data.result))
      }, [isUpdated]);

      const handUpdate = (id, status, obj) => {
        const updatedData = {...obj, status: status}
        setIsUpdated(true)
        axios.patch(`http://localhost:5000/cruiseBooking/${id}`, updatedData)
        .then(res => res.data && setIsUpdated(false))
    }

    const renderFlightDataList = (cruiseData, index) => {
        const setBackground = {
            color: '#FFFFFF',
            background: cruiseData?.status === 'Expired' ? 'rgb(255 78 96)' : cruiseData?.status === 'Booked' ? 'rgb(73 146 255)' :'rgb(31 204 123)'
        }
        return (
            <tr key={index}>
                <td>{cruiseData.email}</td>
                <td>{cruiseData.sailFrom}</td>
                <td>{cruiseData.sailTo}</td>
                <td>{cruiseData.checkIn.substring(0, 10)}</td>
                <td>{cruiseData.checkOut.substring(0, 10)}</td>
                <td>{cruiseData.totalPrice}</td>
                <td>
                    <Dropdown class="statusBtn" id="dropdown-basic-button">
                        <Dropdown.Toggle style={setBackground}>
                            {cruiseData.status}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handUpdate(cruiseData._id, "Expired", cruiseData)} id="expired">Expired</Dropdown.Item>
                            <Dropdown.Item onClick={() => handUpdate(cruiseData._id, "Checked", cruiseData)} id="checked">Checked</Dropdown.Item>
                            <Dropdown.Item onClick={() => handUpdate(cruiseData._id, "Booked", cruiseData)} id="booked">Booked</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
        )
    }
    return (
        <div className="px-2">
            <OrderListAnalyse data={cruiseData}/>
            {
                cruiseData.length === 0 ? <TableLoader/>:
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
                        {cruiseData.map(renderFlightDataList)}
                    </tbody>
                </Table>
            </div>
            }
        </div>
    );
};

export default OrderCruises;