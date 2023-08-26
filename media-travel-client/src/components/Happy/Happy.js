import React from 'react';
import './Happy.css'
import peopleImg from '../../resources/img/joy.svg'
import ProgressMeter from '../AboutCompany/ProgressMeter';
import Fade from 'react-reveal/Fade';

const Happy = () => {
    return (
        <div className='happy'>
            <div className="col-md-11 mx-auto happy-container">
                <div className="row mb-5 align-items-center">
                    <div className="col-md-6">
                        <Fade left duration={3000}>
                            <img className="img-fluid" src={peopleImg} alt="" />
                        </Fade>
                    </div>
                    <div className="col-md-6 px-4">
                        <Fade right duration={3000}>
                            <h1 className="secHeader">HAPPY CUSTOMERS</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos odio quam ad ex debitis sequi recusandae hic, soluta dignissimos fugiat maiores deleniti quis sunt, aut voluptate quisquam repudiandae aspernatur ipsum.</p>
                            <ProgressMeter/>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Happy;