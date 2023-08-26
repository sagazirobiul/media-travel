import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import FlightDetailSidebar from './FlightDetailSidebar';
import FlightMainDetail from './FlightMainDetail';

const FlightDetail = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="container">
       <hr class="new"/>
       <div className="row">
           <div className="col-md-3">
               <FlightDetailSidebar />
           </div>
           <div className="col-md-9">
               <FlightMainDetail />
           </div>
       </div>
   </div>
    );
};

export default FlightDetail;