import React from 'react';
import { Route, Switch } from 'react-router';
import Flight from '../../components/Flights/Flight';
import Footer from '../../components/Footer/Footer';
import PagesHeader from '../../components/PagesHeader/PagesHeader';
import CruisesPack from '../../components/CruisesPack/CruisesPack';
import ShowCars from '../../components/ShowCars/ShowCars';
import Hotel from '../../components/Hotel/Hotel';
import FlightDetail from '../../components/FlightDetail/FlightDetail';
import FlightBooking from '../../components/FlightBook/FlightBooking';
import CruisesDetails from '../../components/CruisesDetails/CruisesDetails';
import CarBookDetails from '../../components/CarBookDetails/CarBookDetails';
import PrivateRoute from "../LogIn/PrivateRoute";
import { AuthProvider } from '../LogIn/contexts/AuthContext'
import HotelDetails from '../../components/Hotel/HotelDetails'
import PopularCruises from '../../components/PopularCruises/PopularCruises';
import BookingCar from '../../components/BookingCar/BookingCar';


const Pages = () => {
    return (
        <div>
            <PagesHeader />
            <Switch>
                <AuthProvider>
                    <Route path="/pages/flight">
                        <Flight />
                    </Route>
                    <Route path="/pages/flight-details/:id">
                        <FlightDetail />
                    </Route>
                    <Route path="/pages/cars">
                        <ShowCars />
                    </Route>
                    <Route path="/pages/car-details/:id">
                        <CarBookDetails />
                    </Route>
                    <Route path="/pages/hotels">
                        <Hotel />
                    </Route>
                    <Route path="/pages/hotel-details/:id">
                        <HotelDetails />
                    </Route>
                    <Route path="/pages/cruises">
                        <CruisesPack />
                    </Route>
                    <Route path="/pages/cruises-details/:id">
                        <CruisesDetails />
                    </Route>
                    <Route path="/pages/popularCruises/:id">
                        <PopularCruises />
                    </Route>
                </AuthProvider>
            </Switch>
            <Footer />
        </div>
    );
};

export default Pages;