import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const OrderListType = ({setStatus})=>{

    return(
        <Dropdown className="serviceTypeBtn">
          
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Type
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item 
                                        onClick={() =>{
                                        setStatus({title:"Order Lists(Flight)", orderStatus: true})}}
                                        as={Link}
                                        to="/dashboard/orderList/flight"
                                    >Flight</Dropdown.Item>
                                    <Dropdown.Item 
                                        onClick={() =>{
                                        setStatus({title: "Order Lists(Hotel)", orderStatus: true})}}
                                        as={Link}
                                        to="/dashboard/orderList/hotel"
                                    >Hotel</Dropdown.Item>
                                    <Dropdown.Item 
                                        onClick={() =>{
                                        setStatus({title: "Order Lists(Car)", orderStatus: true})}}
                                        as={Link}
                                        to="/dashboard/orderList/car"
                                    >Car</Dropdown.Item>
                                    <Dropdown.Item 
                                        onClick={() =>{
                                        setStatus({title: "Order Lists(Cruise)", orderStatus: true})}}
                                        as={Link}
                                        to="/dashboard/orderList/cruise"
                                    >Cruise</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
    )
}

export default OrderListType;