import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = () => {
    return (
        <div className="bg d-flex align-items-center pakageSec">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-8 col-md-8">
                        <h1 className="text1 ">Caucasus Vacation Packages</h1>
                        <p className="text-white packDes">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
                        <h5 className="text2">From: Khazbegi (Goergia) <strong>$159.00</strong><span>person</span></h5>
                    </div>
                    <div className="col-lg-2 col-md-4 packageStar">
                        <Link to="/my-offer">
                            <p className="packageButton"><span>Get Offer</span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Package;