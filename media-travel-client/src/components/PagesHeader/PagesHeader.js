import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '300px'
  };
const center = {
    lat: -3.745,
    lng: -38.523
  };


const PagesHeader = () => {
    return (
        <section>
        <NavBar/>
        <LoadScript
                googleMapsApiKey="AIzaSyBhO4gpgSmI0VXnEMfyYLK9A2lqc8N7CIA"
                >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                </GoogleMap>
            </LoadScript>
 
    </section>
    );
};

export default PagesHeader;