import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const ManageServiceType = ({setStatus}) => {
    return (
        <Dropdown className="serviceTypeBtn">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item 
                onClick={() =>{
                setStatus({title:"manage service (Flight)", manageStatus: true})}}
                as={Link}
                to="/dashboard/manageService/flight"
            >Flight</Dropdown.Item>
            <Dropdown.Item 
                onClick={() =>{
                setStatus({title: "manage service (hotel)", manageStatus: true})}}
                as={Link}
                to="/dashboard/manageService/hotel"
            >Hotel</Dropdown.Item>
            <Dropdown.Item 
                onClick={() =>{
                setStatus({title: "manage service (Car)", manageStatus: true})}}
                as={Link}
                to="/dashboard/manageService/car"
            >Car</Dropdown.Item>
            <Dropdown.Item 
                onClick={() =>{
                setStatus({title: "manage service (Cruise)", manageStatus: true})}}
                as={Link}
                to="/dashboard/manageService/cruise"
            >Cruise</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
};

export default ManageServiceType;