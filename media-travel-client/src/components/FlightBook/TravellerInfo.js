import React, { useContext, useMemo } from 'react';
import './TravellerInfo.css';
import { UserContext } from '../../App';
import { useAuth } from '../../pages/LogIn/contexts/AuthContext';
import { 
    useStripe, 
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
  } from '@stripe/react-stripe-js';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import axios from 'axios';

const useOptions = () => {
    const options = useMemo(() => ({
        style: {
            base: {
                fontSize: "1.2rem",
                lineHeight: "2",
                color: "#495057",
                letterSpacing: "0.025em",
                "::placeholder": {
                    color: "#aab7c4"
                }
            },
            invalid: {
                color: "#9e2146"
            }
        }
    }), []);
    return options;
  };


const TravellerInfo = () => {
    const options = useOptions();
    const { user, sendData } = useContext(UserContext);
    const { currentUser } = useAuth();
    const stripe = useStripe();
    const elements = useElements();

    const handleBooking = async() => {
        if (!stripe || !elements) {
            return;
          }
          const loading = toast.loading('Please wait...!');
      
          const { error, paymentMethod } = await stripe.createPaymentMethod({
              type: "card",
              card: elements.getElement(CardNumberElement)
          });
      
          if (error) {
              toast.dismiss(loading);
              return swal("Failed!", error.message, "error", { dangerMode: true });
          } 
          else {
              const orderData = {
                ...sendData,
                email: user.email? user.email : currentUser.email,
                paymentId : paymentMethod.id,
                status : 'Booked',
                paymentTime: new Date().toDateString()
              }
              axios.post(`http://localhost:5000/${sendData.flightName ? "flightBooking" : sendData.carName ? "carBooking" : sendData.cruiseName ? "cruiseBooking" : "hotelBooking"}`, orderData)
              .then(res => {
                  if(res){
                      swal("Congratulation!", "Your order has been placed successfully. Please check your email to get ticket.!!", "success");
                  }else{
                      swal("Failed!", "Something went wrong! please try again", "error");
                  }
                  toast.dismiss(loading);
              })
              .then(() =>  axios.post(`http://localhost:5000/${sendData.flightName ? "create-flight-pdf" : sendData.carName ? "create-car-pdf" : sendData.cruiseName ? "create-cruise-pdf" : "create-hotel-pdf"}`, orderData))
                .then(() => axios.post('http://localhost:5000/send_mail',{email: orderData.email}))
                .catch(err => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! please try again", "error")
              })
          }
    }
    
    return (
        <div className="my-3">
            <h3 className="line">Traveller Information</h3>
            <div class="row mt-2">
                <label class="col-md-5" style={{ paddingTop: "10px" }}>Name</label>
                <div class="col-md-7">
                    <input value={user.name || currentUser.displayName || 'User'} type="text" class="form-control"  />
                </div>
            </div>
            <div class="row mt-2">
                <label class="col-md-5" style={{ paddingTop: "10px" }}>Email</label>
                <div class="col-md-7">
                    <input value={user.email || currentUser.email} type="email" class="form-control"  />
                </div>
            </div>
            <h3 className="line mt-5">CREDIT CARD INFORMATION</h3>
            
            
                <div>
                    <Form.Label style={{ fontWeight: "bold" }}>Card Number</Form.Label>
                    <CardNumberElement className="form-control" options={options} />
                </div>
                <div className="mt-3">
                    <Form.Label style={{ fontWeight: "bold" }}>Expiration Date</Form.Label>
                    <CardExpiryElement className="form-control" options={options} />
                </div>
                <div className="mt-3">
                    <Form.Label style={{ fontWeight: "bold" }}>CVC</Form.Label>
                    <CardCvcElement className="form-control" options={options} />
                </div>
                <button onClick={handleBooking} className="hSearchBtn">BOOKING NOW</button>
        </div>
    );
};

export default TravellerInfo;