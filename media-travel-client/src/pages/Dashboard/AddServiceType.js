import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const AddServiceType = ({setStatus})=>{

    return(
        <Dropdown className="serviceTypeBtn">
            
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Type
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item 
                                        onClick={() =>{
                                        setStatus({title:"ADD service (Flight)", serviceStatus: true})}}
                                        as={Link}
                                        to="/dashboard/addService/flight"
                                    >Flight</Dropdown.Item>
                                    <Dropdown.Item 
                                        onClick={() =>{
                                        setStatus({title: "ADD service (hotel)", serviceStatus: true})}}
                                        as={Link}
                                        to="/dashboard/addService/hotel"
                                    >Hotel</Dropdown.Item>
                                    <Dropdown.Item 
                                        onClick={() =>{
                                        setStatus({title: "ADD service (Car)", serviceStatus: true})}}
                                        as={Link}
                                        to="/dashboard/addService/car"
                                    >Car</Dropdown.Item>
                                    <Dropdown.Item 
                                        onClick={() =>{
                                        setStatus({title: "ADD service (Cruise)", serviceStatus: true})}}
                                        as={Link}
                                        to="/dashboard/addService/cruise"
                                    >Cruise</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
    )
}

export default AddServiceType;