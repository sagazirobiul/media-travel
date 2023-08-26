import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const CarEdit = () => {
    const { register, handleSubmit } = useForm();
    const [previewSource, setPreviewSource] = useState(false);
    const [car, setCar] = useState({});
    const { id } = useParams();
    const { description, images, carName, price, image_id } = car;
    useEffect(() => {
        axios(`http://localhost:5000/cars/${id}`)
            .then(res => setCar(res.data.result[0]))
    }, [id])


    const onSubmit = data => {
        if(data.carFrom === data.carTo){
            toast.error('From and To should be unique.!');
        } else {
            const loading = toast.loading('updating...Please wait!')
            const formData = new FormData();
            if (previewSource === false) {
                formData.append("images", images)
            }
            else {
                formData.append("images", previewSource)
            }
            formData.append("carName", data.carName)
            formData.append("carFrom", data.carFrom)
            formData.append("price", data.price)
            formData.append("carTo", data.carTo)
            formData.append("description", data.description)
            formData.append("image_id", image_id)
            axios.patch(`http://localhost:5000/cars/${id}`, formData)
                .then(res => {
                    toast.dismiss(loading)
                    if(res){
                        toast.success('Service has been updated successfully!');
                    }
                    else{
                        toast.error('Something went wrong, please try again');
                    }
                })   
        }
         
    }

    const handleImgUpload = (e) => {
        const file = e.target.files[0];
        setPreviewSource(file);
    }
    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div className="px-2">
            <Form onSubmit={handleSubmit(onSubmit)} className="addServiceForm">
                <Row className="justify-content-center px-4">
                    <Form.Group as={Col} md={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>car Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={carName || ""}
                            {...register("carName", { required: true })}
                            placeholder="car Name" />
                    </Form.Group>
                    <Form.Group as={Col} md={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>From</Form.Label>
                        <Form.Select {...register("carFrom", { required: true })}>
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
                            defaultValue={price || ""}
                            {...register("price", { required: true })}
                            placeholder="Price" />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mt-3">
                        <Form.Label style={{ fontWeight: "bold" }}>To</Form.Label>
                        <Form.Select {...register("carTo", { required: true })}>
                            <option>Canada</option>
                            <option>Alaska</option>
                            <option>Bahamas</option>
                            <option>California</option>
                            <option>Texas</option>
                            <option>NewYork</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mt-3">
                        <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                        <Form.Control
                            style={{ height: "10rem" }}
                            type="text"
                            defaultValue={description || ""}
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
                            images && <div id="file_img" style={{ styleUpload }}>
                                <img src={images ? images : ''} style={{ width: "200px" }} className="rounded img-thumbnail" alt="" />
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

export default CarEdit;