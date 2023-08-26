import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import userImg from '../../../resources/img/user.svg';
import './AddReview.css';
import '../../Review/Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import ReviewForm from './ReviewForm';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import { useAuth } from '../../../pages/LogIn/contexts/AuthContext';


const AddReview = () => {
    const { user } = useContext(UserContext);
    const {currentUser} = useAuth()
    const [review, setReview] = useState({});
    const [isUpdated, setIsUpdated] = useState(false)
    const {_id, name, address, description} = review || {};

    useEffect(() => {
        axios(`http://localhost:5000/review/${currentUser?.email || user?.email}`)
        .then(res => {
            setReview(res.data.result[0])
        })
    }, [user?.email, currentUser?.email, isUpdated])

    const handleDelete = (id) => {
        setIsUpdated(false)
        swal({
            title: "Are you sure?",
            text: "Are you sure! you want to delete the review?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then( wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('deleting...Please wait!')
                axios.delete(`http://localhost:5000/review/${id}`)
                .then(res => {
                    toast.dismiss(loading)
                    if(res){
                        setIsUpdated(true);
                        toast.success('Your review has been deleted successfully!');
                    }
                    else{
                        toast.error('Something went wrong, please try again');
                    }
                })
                .catch(err => {
                    toast.dismiss(loading)
                    swal({
                        title: "Failed!",
                        text: 'Something went wrong, please try again',
                        icon: "error",
                      });
                })
            } 
          });
    }
    return (
        <div>
            { description ?
            <div className="userReviewBox">
                <div className="customerReview col-md-6 mx-auto">
                    { user.photoURL ? <img src={user.photoURL} alt=""/>:
                    <img src={`${userImg}`} alt=""/>}
                    <h5 className="testimonialName">{name}</h5>
                    <h6 className="testimonialAddress">{address}</h6>
                    <p><i>{description}</i></p>
                </div>
                <Button as={Link} to={`/dashboard/review/${_id}`} variant="outline-success"> <FontAwesomeIcon icon={faEdit}/> Edit</Button>
                <Button variant="outline-danger" onClick={() => handleDelete(_id)}> <FontAwesomeIcon icon={faTrashAlt}/> Delete</Button>
            </div>
            :
            <ReviewForm setIsUpdated={setIsUpdated}/> 
            }
        </div>
    );
};

export default AddReview;