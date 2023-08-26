import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from './../../../pages/LogIn/contexts/AuthContext';
import { UserContext } from './../../../App';
import { useContext } from 'react';
import swal  from 'sweetalert';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const { currentUser } = useAuth();
    const { user } = useContext(UserContext)
    const email = user.email || currentUser.email;


    const onSubmit = data => {
        if(email === "test@admin.com"){
            swal("Permission restricted!", "As a test admin, You haven't permission to add a new admin.", "info");
            reset()
        } else {
            const loading = toast.loading('Please wait...');
            const formData = new FormData();
            formData.append("email", data.email,)
            axios.post("http://localhost:50000/admin", formData)
            .then(res => {
                toast.dismiss(loading)
                if(res){
                    toast.success('One Admin added successfully!')
                    reset()
                } else{
                    toast.error('Something went wrong please try again!')
                }
            })
        }
    };

    return (
        <div className="px-2">
            <Form onSubmit={handleSubmit(onSubmit)} className="makeAdmin">
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("email", { required: true })}
                                placeholder="email"
                            />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                    </Col>
                    <Col>
                        <button type="submit" className="mainBtn adminBtn">Submit</button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
};

export default MakeAdmin;