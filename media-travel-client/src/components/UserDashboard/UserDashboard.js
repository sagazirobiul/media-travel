import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BookingList from '../BookingList/BookingList/BookingList';
import Profile from '../Profile/Profile';
import AddReview from './AddReview/AddReview';
import ReviewForm from './AddReview/ReviewForm';


const UserDashboard = () => {
    return (
        <Switch>
            <Route exact path="/dashboard/profile"><Profile/></Route>
            <Route exact path="/dashboard/booking" component={BookingList}/>
            <Route path="/dashboard/review" component={AddReview}/>
            <Route path="/dashboard/review/:id" component={ReviewForm}/>
        </Switch>
    );
};

export default UserDashboard;