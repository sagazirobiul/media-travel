import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightOption from '../FlightOption/FlightOption';
import SpinnerC from '../Shared/SpinnerC';
import { useContext } from 'react';
import { UserContext } from '../../App';
import NoDataPage from '../Shared/NoDataPage/NoDataPage';
import ReactPaginate from "react-paginate";
import { useLocation } from 'react-router-dom';

const RentCar = () => {
    const [rentCar, setRentCar] = useState([]);
    const [searchData, setSearchData] = useState(false)
    const { sendData, setSendData } = useContext(UserContext)
    const [pageCount, setPageCount] = useState(0);
    const { pathname } = useLocation();

    useState(() => {
        setSendData({})
    }, [pathname])

    useEffect(() => {
        axios(`http://localhost:5000/cars/search?carFrom=${sendData?.carFrom}&carTo=${sendData?.carTo}`)
        .then(res => {
            setSearchData(false)
            if(res.data.message === 404){
                setSearchData(true)
            } else {
                setRentCar(res.data.result)
            }
        })
    }, [sendData, setSendData])

    const handleReloadData = () => {
        setSendData({})
    }

    const handlePageClick = async (data) => {
        setPageCount(data.selected)
    
      };

    return (
        <div className="container">
            <div className="row mb-5">
                {
                    searchData ? 
                    <div>
                        <NoDataPage handleReloadData={handleReloadData}/>
                    </div>
                    :
                    rentCar.length === 0 ?
                    <div className="d-flex justify-content-center mt-5 pt-5">
                        <SpinnerC />
                    </div>
                    :
                    rentCar?.slice(pageCount*6,pageCount*6+6).map(data => <FlightOption data={data} key={data._id} />)
                }
            </div>
            {
                !searchData &&
                rentCar.length > 0 &&
            <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(rentCar.length/6)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            }
        </div>
    );
};

export default RentCar;