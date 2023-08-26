import React,{useEffect,useState} from 'react';
import { Table, Dropdown, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './OrderList.css'
import TableLoader from './../Shared/TableLoader';
import OrderListAnalyse from './OrderListAnalyse';

const OrderFlight = () => {
    const [flightData,setFlightData] = useState([])
    const [isUpdated, setIsUpdated] = useState(false)
    useEffect(() => {
        axios(`http://localhost:5000/flightBooking`)
          .then(res => setFlightData(res.data.result))
      }, [isUpdated]);


    const handUpdate = (id, status, obj) => {
        const updatedData = {...obj, status: status}
        setIsUpdated(true)
        axios.patch(`http://localhost:5000/flightBooking/${id}`, updatedData)
        .then(res => res.data && setIsUpdated(false))
    }

    const renderFlightDataList = (flightDataList, index) => {
        const setBackground = {
            color: '#FFFFFF',
            background: flightDataList?.status === 'Expired' ? 'rgb(255 78 96)' : flightDataList?.status === 'Booked' ? 'rgb(73 146 255)' :'rgb(31 204 123)'
        }

        return (
            <tr key={index}>
                <td>{flightDataList.email}</td>
                <td>{flightDataList.flightFrom}</td>
                <td>{flightDataList.flightTo}</td>
                <td>{flightDataList.departingDate.substring(0, 10)}</td>
                <td>{flightDataList.returningDate.substring(0, 10)}</td>
                <td>{flightDataList.totalPrice}</td>
                <td>
                    <Dropdown class="statusBtn" id="dropdown-basic-button">
                        <Dropdown.Toggle style={setBackground}>
                            {flightDataList.status}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handUpdate(flightDataList._id, "Expired", flightDataList)} id="expired">Expired</Dropdown.Item>
                            <Dropdown.Item onClick={() => handUpdate(flightDataList._id, "Checked", flightDataList)} id="checked">Checked</Dropdown.Item>
                            <Dropdown.Item onClick={() => handUpdate(flightDataList._id, "Booked", flightDataList)} id="booked">Booked</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
        )
    }
    return (
        <div className="px-2">
                <OrderListAnalyse data={flightData}/>
                {
                    flightData.length === 0 ? <TableLoader/>:
                    <div className="manageList">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Check In</th>
                                    <th>Check Out</th>
                                    <th>Total($)</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {flightData.map(renderFlightDataList)}
                            </tbody>
                        </Table>
                    </div>
                }

        </div>
    );
};

export default OrderFlight;