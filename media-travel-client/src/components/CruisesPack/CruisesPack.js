import React, { useState, useEffect, useContext } from 'react';
import './CruisesPack.css'
import '../FlightOption/FlightOption.css'
import { Container, Row, Form, Col } from 'react-bootstrap';
import CruisesForm from './CruisesForm';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlightOption from '../FlightOption/FlightOption';
import PagesTestimonial from '../PagesTestimonial/PagesTestimonial';
import PageSearch from '../PageSearch/PageSearch';
import axios from 'axios';
import SpinnerC from '../Shared/SpinnerC';
import { UserContext } from '../../App';
import NoDataPage from '../Shared/NoDataPage/NoDataPage';
import ReactPaginate from "react-paginate";
import { useLocation } from 'react-router-dom';


const CruisesPack = () => {
    const [cruiseData, setCruiseData] = useState([])
    const [searchData, setSearchData] = useState(false)
    const { sendData, setSendData } = useContext(UserContext)
    const [pageCount, setPageCount] = useState(0);
    const { pathname } = useLocation();

    useState(() => {
        setSendData({})
    }, [pathname])

    useEffect(() => {
        axios(`http://localhost:5000/cruises/search?sailFrom=${sendData?.sailFrom}&sailTo=${sendData?.sailTo}`)
            .then(res => {
                setSearchData(false)
                if (res.data.message === 404) {
                    setSearchData(true)
                } else {
                    setCruiseData(res.data.result)
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
        <Container>
            <PageSearch />
            <CruisesForm />
            <Row className="mt-3">
                <Col md={3}>
                    <div className="sideFormItem d-flex">
                        <h6 className="me-2">Passenger: </h6>
                        <Form.Select>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9+</option>
                        </Form.Select>
                    </div>
                    <div>
                        <div className="sideBarItem d-flex justify-content-between">
                            <h5>Start Rating</h5>
                            <FontAwesomeIcon icon={faChevronCircleRight} />
                        </div>
                        <div className="sideBarItem d-flex justify-content-between">
                            <h5>Price Range</h5>
                            <FontAwesomeIcon icon={faChevronCircleRight} />
                        </div>
                        <div className="sideBarItem d-flex justify-content-between">
                            <h5>Departure Ports</h5>
                            <FontAwesomeIcon icon={faChevronCircleRight} />
                        </div>
                        <div className="sideBarItem d-flex justify-content-between">
                            <h5>Trip Duration</h5>
                            <FontAwesomeIcon icon={faChevronCircleRight} />
                        </div>
                        <div className="sideBarItem d-flex justify-content-between">
                            <h5>Ships</h5>
                            <FontAwesomeIcon icon={faChevronCircleRight} />
                        </div>
                    </div>
                    <PagesTestimonial />
                </Col>
                <Col md={9}>
                    <Row className="mb-5">
                        {
                            searchData ?
                                <div>
                                    <NoDataPage handleReloadData={handleReloadData} />
                                </div>
                                :
                                cruiseData.length === 0 ?
                                    <div className="d-flex justify-content-center mt-5 pt-5">
                                        <SpinnerC />
                                    </div>
                                    :
                                    cruiseData?.slice(pageCount*6,pageCount*6+6).map(data => <FlightOption data={data} />)
                        }
                    </Row>
                    {
                    !searchData &&
                    cruiseData.length > 0 &&
                        <ReactPaginate
                            previousLabel={"previous"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            pageCount={Math.ceil(cruiseData.length/6)}
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
                </Col>
            </Row>
        </Container>
    );
};

export default CruisesPack;