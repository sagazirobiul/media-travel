import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './BookingList.css';
import BookingListCard from './BookingListCard';
import { useAuth } from '../../../pages/LogIn/contexts/AuthContext';
import ListLoader from './../../Shared/ListLoader';



const BookingList = () => {
    const { currentUser } = useAuth()
    const [allData, setAllData] = useState([]);

    const fetchData = () => {
        const carUrl = 'http://localhost:5000/carBooking'
        const cruiseUrl = 'http://localhost:5000/cruiseBooking'
        const flightUrl = 'http://localhost:5000/flightBooking'
        const hotelUrl = 'http://localhost:5000/hotelBooking'

        const getCarUrl = axios.get(carUrl)
        const getCruiseUrl = axios.get(cruiseUrl)
        const getFlightUrl = axios.get(flightUrl)
        const getHotelUrl = axios.get(hotelUrl)

        axios.all([getCarUrl, getCruiseUrl, getFlightUrl, getHotelUrl]).then(
            axios.spread((...allData) => {
                console.log(...allData);
                const allDataCar = allData[0]
                const allDataCruise = allData[1]
                const allDataFlight = allData[2]
                const allDataHotel = allData[3]

                setAllData([...allDataCar.data.result, ...allDataCruise.data.result, ...allDataFlight.data.result, ...allDataHotel.data.result])
            })
        )
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div classNameName="container mt-5 mb-3">
            <div className="row">
                {
                    allData.length === 0? <ListLoader/>:
                    allData.map(info =>info?.email===currentUser.email && <BookingListCard info={info}></BookingListCard>)
                }
            </div>
        </div>
    );
};

export default BookingList;