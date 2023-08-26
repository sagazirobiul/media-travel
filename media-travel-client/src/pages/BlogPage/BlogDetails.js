import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import BlogCategories from './BlogCategories';
import Comments from './Comments/Comments';
import './BlogStyle.css'
import { useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';


const BlogDetails = () => {
    const [blogData, setBlogData] = useState({})
    const { id } = useParams()
    const { images, writer, date, title, description } = blogData || {};

    useEffect(() => {
        axios(`http://localhost:5000/blog/${id}`)
            .then(res => setBlogData(res.data.result[0]))
    }, [id]);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);



    return (
        <div className="row w-100 px-3 py-2">
            <div className="col-md-3 col-sm-12 px-2">
                <BlogCategories></BlogCategories>
            </div>
            <div className="text-center col-md-9 col-sm-12 px-2">
                <img className="blogDetailsImg" src={images} alt="" />
                <h3 className="blogDetailsHeader">{title}</h3>
                <div className="blogDetailsDes">
                    <div className="row p-2">
                        <p className="mb-0">
                            <span className="fw-bold">Posted-by: </span>
                            <span className="brnColor fw-bold">{writer}</span>
                            <span className="d-block mt-1"><span className="fw-bold">Publish Date:</span> <span className="brnColor fw-bold">{date}</span></span>
                        </p>
                        <p className="my-2">{description}</p>
                        <p className="my-1 text-center fw-bold fs-5">...</p>
                    </div>
                </div>
                <Comments />
            </div>
        </div>
    );
};

export default BlogDetails;