import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Siderbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCommentAlt, faUserPlus, faCog, faFileMedical, faList,faPenAlt, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';

const Sidebar = ({setStatus}) => {

    const { admin } = useContext(UserContext)

    return (
        <div>
            <div className="sideBrand">
                <h2>MEDIA <span className="colorHighLight">TRAVEL</span></h2>
            </div>
            <nav id="sideNavbar">
                <ul>    
                        <li>
                            <NavLink onClick={() => setStatus({title:'Profile', serviceStatus: false, manageStatus: false})} activeClassName="activePage" exact to="/dashboard/profile">
                                <FontAwesomeIcon icon={faUserCircle} className="iconC"/> Profile
                            </NavLink>
                        </li>
                        {
                            admin === true ?
                                <>
                                <li>
                                        <NavLink onClick={() => setStatus({title:'Order list(Flight)', orderStatus:true, serviceStatus: false, manageStatus: false})} activeClassName="activePage" to="/dashboard/orderList">
                                            <FontAwesomeIcon icon={faList} className="iconC"/> Order list
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={() => setStatus({title:'Add Service(Flight)', orderStatus:false, serviceStatus: true, manageStatus: false})} activeClassName="activePage" to="/dashboard/addService">
                                            <FontAwesomeIcon icon={faFileMedical} className="iconC"/> Add Service
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={() => setStatus({title:'Make Admin', orderStatus:false, serviceStatus: false, manageStatus: false})} activeClassName="activePage" to="/dashboard/makeAdmin">
                                            <FontAwesomeIcon icon={faUserPlus} className="iconC"/> Make Admin
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={() => setStatus({title:'Manage Services(Flight)', orderStatus:false, serviceStatus: false, manageStatus: true})} activeClassName="activePage" to="/dashboard/manageService">
                                            <FontAwesomeIcon icon={faCog} className="iconC"/> Manage Services
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={() => setStatus({title:'Write A Blog', orderStatus:false, serviceStatus: false, manageStatus: false})} activeClassName="activePage" to="/dashboard/writeBlog">
                                            <FontAwesomeIcon icon={faPenAlt} className="iconC"/> Write a Blog
                                        </NavLink>
                                    </li>
                                </>:
                                <>
                                    <li>
                                        <NavLink onClick={() => setStatus({title:'Booking List', orderStatus:false, serviceStatus: false, manageStatus: false})} activeClassName="activePage" to="/dashboard/booking">
                                            <FontAwesomeIcon icon={faList} className="iconC"/> Booking List
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink onClick={() => setStatus({title:'Review', orderStatus:false, serviceStatus: false, manageStatus: false})} activeClassName="activePage" to="/dashboard/review">
                                            <FontAwesomeIcon icon={faCommentAlt} className="iconC"/> Review
                                        </NavLink>
                                    </li>
                                </>
                        }
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;