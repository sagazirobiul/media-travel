import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Form, Row, Col, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../AdminDashboard.css';
import axios from "axios";
import swal from 'sweetalert';
import toast from 'react-hot-toast';

const HotelAddForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [previewSource, setPreviewSource] = useState(null);
    const [showImg, setShowImg] = useState('')

    const onSubmit = data => {
        const loading = toast.loading('Uploading...');
        const formData = new FormData();
        formData.append("images", previewSource) 
        formData.append("hotelName", data.hotelName)
        formData.append("cityName", data.cityName)
        formData.append("price", data.price)
        formData.append("roomType", data.roomType)
        formData.append("description", data.description)
        axios.post("http://localhost:5000/hotels", formData)
        .then(res => {
            if(res){
                swal("Success!", "Congratulation your data inserted successfully", "success");
                toast.dismiss(loading);
                reset()
                setShowImg('')
            }else {
                swal( "Oops" ,  "Something went wrong! Please try again later :)" ,  "error" )
                toast.dismiss(loading);
            }
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
                        <Form.Label style={{ fontWeight: "bold" }}>Hotel Name</Form.Label>
                        <Form.Control
                            type="text"
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
                            as="textarea"
                            {...register("description", { required: true })}
                            placeholder="Description" />
                    </Form.Group>
                    <Col md={6} className="mt-3">
                        <Form.Label style={{ fontWeight: "bold", display: "block"}}>Add Image</Form.Label>
                        <Button
                            as={"label"}
                            htmlFor="upload"
                            className="d-block p-2 uploadBtn">
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

export default HotelAddForm;