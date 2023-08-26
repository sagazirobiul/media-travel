import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

const HotelEdit = () => {
    const { register, handleSubmit, reset } = useForm();
    const [previewSource, setPreviewSource] = useState(false);
    const [hotel, setHotel] = useState({});
    const { id } = useParams();
    const { service, description, images, hotelName, roomType, price, image_id } = hotel;
    useEffect(() => {
        axios(`http://localhost:5000/hotels/${id}`)
            .then(res => setHotel(res.data.result[0]))
    }, [id])


    const onSubmit = data => {
        const loading = toast.loading('updating...Please wait!')
        const formData = new FormData();
        if (previewSource === false) {
            formData.append("images", images)
        }
        else {
            formData.append("images", previewSource)
        }
        formData.append("hotelName", data.hotelName)
        formData.append("cityName", data.cityName)
        formData.append("price", data.price)
        formData.append("roomType", data.roomType)
        formData.append("description", data.description)
        formData.append("image_id", image_id)
        axios.patch(`http://localhost:5000/hotels/${id}`, formData)
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
                        <Form.Label style={{ fontWeight: "bold" }}>Hotel Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={hotelName || ""}
                            {...register("hotelName", { required: true })}
                            placeholder="Hotel Name" />
                    </Form.Group>
                    <Form.Group as={Col} md={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>City Name</Form.Label>
                        <Form.Select defaultValue="NewYork" {...register("cityName", { required: true })}>
                                <option>Las vegas</option>
                                <option>Paris</option>
                                <option>California</option>
                                <option>London</option>
                                <option>NewYork</option>
                                <option>Texas</option>
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
                        <Form.Label style={{ fontWeight: "bold" }}>Room Type</Form.Label>
                        <Form.Select {...register("roomType", { required: true })}>
                            <option>Presidential</option>
                            <option>luxury</option>
                            <option>Normal</option>
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

export default HotelEdit;