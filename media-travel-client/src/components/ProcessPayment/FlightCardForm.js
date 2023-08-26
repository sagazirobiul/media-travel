import React, { useState, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../App';
import axios from 'axios';
import { useAuth } from '../../pages/LogIn/contexts/AuthContext';

const FlightCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const { flightData } = useContext(UserContext);
    const { currentUser } = useAuth();
    
    const handlePayment = (paymentId) =>{
        const paymentDetails = {...currentUser, ...flightData}; 
        const serviceDetails = {
            email: paymentDetails.email,
            from: paymentDetails.from,
            to: paymentDetails.to,
            price: paymentDetails.price,
            departing: paymentDetails.departing,
            returning: paymentDetails.returning,
            flightType: paymentDetails.flightType,
            cardId: paymentId,
            paymentTime: new Date()
        } 
        axios.post(`http://localhost:5000/flightBooking`, serviceDetails)
        .then(res => console.log(res))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null)
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" className="btn btn-info m-2" style={{ textTransform: 'uppercase' }} disabled={!stripe}>Pay</button>
            </form>

            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
            }
        </div>
    );
};

export default FlightCardForm;