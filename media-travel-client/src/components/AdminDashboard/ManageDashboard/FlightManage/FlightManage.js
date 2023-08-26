import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './FlightManage.css';
import axios from 'axios';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import TableLoader from './../../../Shared/TableLoader';

const FlightManage = () => {
    const [flightData, setFlightData] = useState([])
    useEffect(() => {
        axios('http://localhost:5000/flights')
            .then(res => setFlightData(res.data.result))
    }, [])

    const handleDelete = (id, image_id) => {
        const loading = toast.loading('deleting...Please wait!')
        axios.delete(`http://localhost:5000/flights/${id}`, { data: { image_id: image_id } })
            .then(res => {
                toast.dismiss(loading)
                if (res) {
                    toast.success('Service has been deleted successfully!');
                }
                else {
                    toast.error('Something went wrong, please try again');
                }
            })
    }
    return (
        <div className="px-2">
            {
            flightData.length === 0 ? <TableLoader/>:
                <div className="manageList">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Flight Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Price</th>
                                <th>Service Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                flightData?.map(({ flightName, flightFrom, flightTo, _id, price, image_id }) => {
                                    return (
                                        <tr>
                                            <td>{flightName}</td>
                                            <td>{flightFrom}</td>
                                            <td>{flightTo}</td>
                                            <td>${price}</td>
                                            <td>
                                                <Link className="mainBtn text-decoration-none text-white" to={`/dashboard/manageService/flightEdit/${_id}`}> <FontAwesomeIcon icon={faEdit} /> Edit</Link>
                                                <button className="dltBtn text-decoration-none text-white px-4 m-1" onClick={() => handleDelete(_id, image_id)}> <FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            }
        </div>
    );
};

export default FlightManage;