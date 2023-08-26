import React, { useState, useContext} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../App';
import axios from 'axios';
import { useAuth } from '../../pages/LogIn/contexts/AuthContext';

const CruisesCardForm = () =>{
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const { cruisesData } = useContext(UserContext);
    const { currentUser } = useAuth();

    const handleSubmit = async (event) => {
        const handlePayment = (paymentId) =>{
            const paymentDetails = {...currentUser, ...cruisesData}; 
            const serviceDetails = {
                email: paymentDetails.email,
                designation: paymentDetails.designation,
                ports: paymentDetails.ports,                
                ships: paymentDetails.ships,
                cabin: paymentDetails.cabin,
                checkIn: paymentDetails.checkIn,
                checkOut: paymentDetails.checkOut,
                price: paymentDetails.price,
                cardId: paymentId,
                paymentTime: new Date()
            }
            axios.post(`http://localhost:5000/cruisesBooking`, serviceDetails)
            .then(res => console.log(res))
            
        }
    

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

    return(
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
}

export default CruisesCardForm;