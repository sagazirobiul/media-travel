import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopOver from '../../components/Shared/PopOver/PopOver';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserDashboard from '../../components/UserDashboard/UserDashboard';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
import AddServiceType from './AddServiceType';
import OrderListType from './OrderListType';
import ManageServiceType from './ManageServiceType';
import axios from 'axios';
import { useAuth } from '../../pages/LogIn/contexts/AuthContext';
import { UserContext } from '../../App';


const Dashboard= () => {
    const { currentUser } = useAuth()
    const { user , admin, setAdmin } = useContext(UserContext)
    const [sideToggle, setSideToggle] = useState(false)
    const [status, setStatus] = useState({
        title: 'Media Travel',
        serviceStatus: false,
        manageStatus: false,
        orderStatus:false
    })

    useEffect(() => {
        axios(`http://localhost:5000/admin/${currentUser?.email || user?.email}`)
        .then(res => {
            if(res.data.result[0]){
                setAdmin(true)
            } else {
                setAdmin(false)
            }
        })
    }, [currentUser?.email, setAdmin, user.eamil, user?.email])



    return (
        <div id="dashboard">
            <div id="sidebar" className={ sideToggle ? "active" : "" }>
                <div className="responsiveSidebar">
                    <div className="sidebarContent">
                        <span onClick={() => setSideToggle(true)} className="sideCloseBtn"><FontAwesomeIcon icon={faTimes} /></span>
                        <Sidebar setStatus={setStatus}/>
                        <div className="backBtnBox">
                            <Link to="/">
                                <button className="backBtn"> <FontAwesomeIcon icon={faSignOutAlt}/> back to home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pageContent">
                <div className="dashBoardHeader">
                    <div className="d-flex align-items-center">
                        <div id="nav-icon"
                        className={sideToggle ? "menu-btn" : "menu-btn open"}
                        onClick={() => setSideToggle(!sideToggle)}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <h3>{status.title}</h3>
                        {
                            status.orderStatus === true &&
                            <OrderListType setStatus={setStatus}/>
                        } 
                        {
                            status.serviceStatus === true &&
                            <AddServiceType setStatus={setStatus}/>
                        } 
                        {
                            status.manageStatus === true &&
                            <ManageServiceType setStatus={setStatus}/>
                        }
                    </div>
                    <PopOver/>
                </div>
                {
                    admin === true? <AdminDashboard/> : <UserDashboard/>
                }
                
            </div>
        </div>
    );
};

export default Dashboard;