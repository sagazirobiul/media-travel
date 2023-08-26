import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import './App.css';
import Pages from './pages/Pages/Pages';
import AboutUs from './pages/About Us/AboutUs';
import BlogPage from './pages/BlogPage/BlogPage';
import Gallery from './pages/Gallery/Gallery';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from "../src/pages/LogIn/LoginModal"
import { Toaster } from 'react-hot-toast';
import ProcessPayment from './components/ProcessPayment/ProcessPayment';
import BookingCar from './components/BookingCar/BookingCar';
import FlightBooking from './components/FlightBook/FlightBooking';
import PrivateRoute from './pages/LogIn/PrivateRoute';
import BookingHotels from './components/Hotel/BookingHotels';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { AuthProvider } from './pages/LogIn/contexts/AuthContext';
import serviceKnow from './pages/serviceKnow/serviceKnow';
import CruisesBooking from './components/CruisesDetails/CruisesBooking';
import MyOffer from './pages/MyOffer/MyOffer';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState('')
  const [sendData, setSendData] = useState({});
  const [admin, setAdmin] = useState(false);

  return (
    <section id="mainSec">
      <UserContext.Provider value={{ user, setUser, sendData, setSendData, admin, setAdmin}}>
        <Toaster />
        <Router>
          <Switch>
            <AuthProvider>
              <Route exact path="/" component={Home} />
              <Route path="/serviceKnow" component={serviceKnow} />
              <Route path="/pages" component={Pages} />
              <Route path="/contact" component={ContactUs} />
              <Route path="/about-us" component={AboutUs} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/blog" component={BlogPage} />
              <Route path="/payment" component={ProcessPayment} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/payment" component={ProcessPayment} />
              <Route path="/login" component={Login} />
              <PrivateRoute path="/car-booking" component={BookingCar} />
              <PrivateRoute path="/flight-booking" component={FlightBooking} />
              <PrivateRoute path="/hotel-booking" component={BookingHotels} />
              <PrivateRoute path="/cruises-booking" component={CruisesBooking} />
              <PrivateRoute path="/my-offer" component={MyOffer} />
              
            </AuthProvider>
          </Switch>
        </Router>
      </UserContext.Provider>

      <MessengerCustomerChat themeColor="#01BFA6" pageId="101709945002009" appId="494047382006433"/>
    </section>
  );
};

export default App;