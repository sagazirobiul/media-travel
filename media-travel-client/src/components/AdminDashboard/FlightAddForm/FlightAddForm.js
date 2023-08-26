import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Form, Row, Col, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../AdminDashboard.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const FlightAddForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [previewSource, setPreviewSource] = useState(null);
    const [showImg, setShowImg] = useState('')

    const onSubmit = data => {
        if(data.flightFrom === data.flightTo){
            toast.error('Flying From and Flying to should be unique.!');
        } else {
            const loading = toast.loading('Uploading...');
            const formData = new FormData();
            formData.append("images", previewSource) 
            formData.append("flightName", data.flightName)
            formData.append("flightFrom", data.flightFrom)
            formData.append("price", data.price)
            formData.append("flightTo", data.flightTo)
            formData.append("description", data.description)
            formData.append("image_id", "")
            axios.post("http://localhost:5000/flights", formData)
            .then(res => {
                if(res){
                    swal("Success!", "Congratulation your data inserted successfully", "success");
                    toast.dismiss(loading);
                    reset()
                    setShowImg('')
                } else {
                    swal( "Oops" ,  "Something went wrong! Please try again later :)" ,  "error" )
                    toast.dismiss(loading);
                }
            })
        }
    }

    const handleImgUpload = (e) => {
        const file = e.target.files[0];
        setPreviewSource(file);
        preveiwFile(file)
    }

    const preveiwFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setShowImg(reader.result)
        }
    }

return (
    <div className="px-2">
        <Form onSubmit={handleSubmit(onSubmit)} className="addServiceForm">
            <Row className="justify-content-center px-4">
                <Form.Group as={Col} md={6}>
                    <Form.Label style={{ fontWeight: "bold" }}>Flight Name</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("flightName", { required: true })}
                        placeholder="Flight Name" />
                </Form.Group>
                <Form.Group as={Col} md={6}>
                    <Form.Label style={{ fontWeight: "bold" }}>Flying From</Form.Label>
                    <Form.Select {...register("flightFrom", { required: true })}>
                        <option>Canada</option>
                        <option>Alaska</option>
                        <option>Bahamas</option>
                        <option>California</option>
                        <option>Texas</option>
                        <option>NewYork</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-3">
                    <Form.Label style={{ fontWeight: "bold" }}>Price</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("price", { required: true })}
                        placeholder="Price" />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-3">
                    <Form.Label style={{ fontWeight: "bold" }}>Flying To</Form.Label>
                    <Form.Select {...register("flightTo", { required: true })}>
                        <option>NewYork</option>
                        <option>Canada</option>
                        <option>Alaska</option>
                        <option>Bahamas</option>
                        <option>California</option>
                        <option>Texas</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-3">
                    <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                    <Form.Control
                        style={{ height: "10rem" }}
                        type="text"
                        as="textarea"
                        {...register("description", { required: true })}
                        placeholder="Description" />
                </Form.Group>
                <Col md={6} className="mt-3">
                    <Form.Label style={{ fontWeight: "bold", display: "block" }}>Add Image</Form.Label>
                    <Button
                        as={"label"}
                        htmlFor="upload"
                        className="d-block p-2 mb-2 uploadBtn">
                        <FontAwesomeIcon icon={faCloudUploadAlt} className="mr-2" />Upload Image
                    </Button>
                    <Form.Control
                        hidden="hidden"
                        id="upload"
                        type="file"
                        onChange={handleImgUpload}
                    />
                    {
                        showImg && 
                        <div>
                            <img src={showImg} alt="" height="130px"/>
                            <span className="imageClose" onClick={() => setShowImg('')}>
                            <FontAwesomeIcon icon={faTimes} /> close</span>
                        </div>
                    }
                </Col>
            </Row>
            <div className="text-center mt-3">
                <Button type="submit" className="mainBtn">Submit</Button>
            </div>
        </Form>
    </div>
);
};

export default FlightAddForm;