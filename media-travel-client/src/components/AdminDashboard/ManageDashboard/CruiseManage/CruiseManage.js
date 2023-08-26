import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './CruiseManage.css';
import TableLoader from './../../../Shared/TableLoader';

const CruiseManage = () => {
    const [cruiseData, setCruiseData] = useState([])
    useEffect(() => {
        axios('http://localhost:5000/cruises')
            .then(res => setCruiseData(res.data.result))
    }, [])

    const handleDelete= (id,image_id)=>{
        const loading = toast.loading('deleting...Please wait!')
        axios.delete(`http://localhost:5000/cruises/${id}`, {data:{image_id: image_id}})
        .then(res => {
            toast.dismiss(loading)
            if(res){
                toast.success('Service has been deleted successfully!');
            }
            else{
                toast.error('Something went wrong, please try again');
            }
        })
    }

    return (
        <div className="px-2">
            {
                cruiseData.length === 0 ? <TableLoader/>:
                <div className="manageList">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Cruise Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Price</th>
                                <th>Service Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cruiseData?.map(({ cruiseName, sailFrom, sailTo, _id, price, image_id}) => {
                                    return (
                                        <tr>
                                            <td>{cruiseName}</td>
                                            <td>{sailFrom}</td>
                                            <td>{sailTo}</td>
                                            <td>${price}</td>
                                            <td>
                                                <Link className="mainBtn text-decoration-none text-white px-4 m-1" to={`/dashboard/manageService/cruiseEdit/${_id}`}> <FontAwesomeIcon icon={faEdit} /> Edit</Link>
                                                <button className="dltBtn text-decoration-none text-white px-4 m-1" onClick={()=>handleDelete(_id, image_id)}> <FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
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

export default CruiseManage;