import React from 'react';
import PagesTestimonial from '../../components/PagesTestimonial/PagesTestimonial';
import "./BlogStyle.css";
import followers from '../../resources/img/follower.jpg';

const BlogCategories = () => {
    return (
        <div className="text-secondary bg-light text-center">
            <nav class="navbar navbar-light bg-light my-3">
                <form className="form-inline m-auto">
                    <div className="">
                        <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2  " type="submit">Search</button>
                    </div>
                </form>
            </nav>
            <div className=" ">
                <div class="m-auto m-b-30">
                    <div class="category-title m-t-5 m-b-20 p-b-8">
                        Categories:
                    </div>
                    <div class="category-links">
                        <a href="#"> Media Travel</a>
                        <a href="#"> Biman Flight </a>
                        <a href="#"> Cruise</a>
                        <a href="#"> Hotel </a>
                        <a href="#"> Car</a>
                    </div>
                </div>
                <PagesTestimonial />
                <div className="bg-light text-secondary my-5 px-3">
                    <h5>Followers:</h5>
                   <img src={followers} alt="Followers" width="100%"></img>
                </div>
            </div>
        </div>
    );
};

export default BlogCategories;