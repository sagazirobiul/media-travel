import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import TableLoader from './../../../Shared/TableLoader';

const CarManage = () => {
    const [carData, setCarData] = useState([])
    useEffect(() => {
        axios('http://localhost:5000/cars')
            .then(res => setCarData(res.data.result))
    }, [])

    const handleDelete = (id, image_id) => {
        const loading = toast.loading('deleting...Please wait!')
        axios.delete(`http://localhost:5000/cars/${id}`, { data: { image_id: image_id } })
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
                carData.length === 0 ? <TableLoader/>:
                    <div className="manageList">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>Car Name</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Price</th>
                                    <th>Service Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carData?.map(({ carName, carFrom, carTo, _id, price, image_id }) => {
                                        return (
                                            <tr>
                                                <td>{carName}</td>
                                                <td>{carFrom}</td>
                                                <td>{carTo}</td>
                                                <td>${price}</td>
                                                <td>
                                                    <Link className="mainBtn text-decoration-none text-white" to={`/dashboard/manageService/carEdit/${_id}`}> <FontAwesomeIcon icon={faEdit} /> Edit</Link>
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

export default CarManage;