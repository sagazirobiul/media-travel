import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../../AdminDashboard/AdminDashboard.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

const WriteBlog = () => {

    const { register, handleSubmit, reset } = useForm();
    const [previewSource, setPreviewSource] = useState(null);
    const [showImg, setShowImg] = useState('')

    const onSubmit = data => {
        const loading = toast.loading('Uploading...Please wait!');
        const formData = new FormData();
        formData.append("images", previewSource)
        formData.append("title", data.title)
        formData.append("date", data.date)
        formData.append("writer", data.writer)
        formData.append("description", data.description)
        formData.append("image_id", "")
        axios.post("http://localhost:5000/blog", formData)
                .then(res => {
                    toast.dismiss(loading);
                    swal("Success!", "Blog added successfully", "success");
                    if(res){reset()}
                })
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
                        <Form.Label style={{ fontWeight: "bold" }}>Blog Title</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("title", { required: true })}
                            placeholder="Add a Title " />
                    </Form.Group>
                    <Form.Group as={Col} md={6}>
                        <Form.Label style={{ fontWeight: "bold" }}>Publish Date</Form.Label>
                        <Form.Control
                            type="date"
                            {...register("date", { required: true })}
                            placeholder="publishing date" />
                    </Form.Group>
                    <Form.Group as={Col} md={6} className="mt-3">
                        <Form.Label style={{ fontWeight: "bold" }}>Written By</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("writer", { required: true })}
                            placeholder="Blogger name" />
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
                    </Col>
                    <Form.Group as={Col} md={6} className="my-1 me-auto">
                        <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
                        <Form.Control
                            style={{ height: "10rem" }}
                            type="text"
                            as="textarea"
                            {...register("description", { required: true })}
                            placeholder="Description" />
                    </Form.Group>
                    <Col md={6}>
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

export default WriteBlog;