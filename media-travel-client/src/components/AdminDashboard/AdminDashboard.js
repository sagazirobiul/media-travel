import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../Profile/Profile';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import FlightAddForm from './FlightAddForm/FlightAddForm';
import HotelAddForm from './HotelAddForm/HotelAddForm';
import CarAddForm from './CarAddForm/CarAddForm';
import CruiseAddForm from './CruiseAddForm/CruiseAddForm';
import FlightManage from './ManageDashboard/FlightManage/FlightManage';
import FlightEdit from './ManageDashboard/FlightEdit/FlightEdit';
import HotelManage from './ManageDashboard/HotelManage/HotelManage';
import HotelEdit from './ManageDashboard/HotelEdit/HotelEdit';
import CarEdit from './ManageDashboard/CarEdit/CarEdit';
import CarManage from './ManageDashboard/CarManage/CarManage';
import CruiseManage from './ManageDashboard/CruiseManage/CruiseManage';
import CruiseEdit from './ManageDashboard/CruiseEdit/CruiseEdit';
import WriteBlog from './WriteBlog/WriteBlog';
import OrderFlight from '../OrderList/OrderFlight';
import OrderCar from '../OrderList/OrderCar';
import OrderHotel from '../OrderList/OrderHotel';
import OrderCruises from '../OrderList/OrderCruises';

const AdminDashboard = () => {
    return (
        <Switch>
            <Route exact path="/dashboard/profile" component={Profile}/>
            <Route exact path="/dashboard/orderList" component={OrderFlight}/>
            <Route exact path="/dashboard/addService" component={FlightAddForm}/>
            <Route path="/dashboard/addService/flight" component={FlightAddForm}/>
            <Route path="/dashboard/addService/hotel" component={HotelAddForm}/>
            <Route path="/dashboard/addService/car" component={CarAddForm}/>
            <Route path="/dashboard/addService/cruise" component={CruiseAddForm}/>
            <Route path="/dashboard/makeAdmin"><MakeAdmin/></Route>
            <Route exact path="/dashboard/manageService" component={FlightManage}/>
            <Route path="/dashboard/manageService/flight" component={FlightManage}/>
            <Route path="/dashboard/manageService/hotel" component={HotelManage}/>
            <Route path="/dashboard/manageService/car" component={CarManage}/>
            <Route path="/dashboard/manageService/cruise" component={CruiseManage}/>
            <Route path="/dashboard/manageService/flightEdit/:id" component={FlightEdit}/>
            <Route path="/dashboard/manageService/hotelEdit/:id" component={HotelEdit}/>
            <Route path="/dashboard/manageService/carEdit/:id" component={CarEdit}/>
            <Route path="/dashboard/manageService/cruiseEdit/:id" component={CruiseEdit}/>
            <Route exact path="/dashboard/writeBlog" component={WriteBlog}/>
            <Route path="/dashboard/manageService/hotelEdit/:id" component={HotelEdit} />
            <Route path="/dashboard/manageService/carEdit/:id" component={CarEdit} />
            <Route path="/dashboard/manageService/cruiseEdit/:id" component={CruiseEdit} />
            <Route path="/dashboard/orderList/flight" component={OrderFlight} />
            <Route path="/dashboard/orderList/car" component={OrderCar} />
            <Route path="/dashboard/orderList/hotel" component={OrderHotel} />
            <Route path="/dashboard/orderList/cruise" component={OrderCruises} />
        </Switch>
    );
};

export default AdminDashboard;