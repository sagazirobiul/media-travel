import React, { useState } from "react";
import './Gallery.css';
import { galleryData } from "../../data/galleryData";
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from "../../components/Shared/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Shared/Banner";

const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);

    }
   
    return (
        <>
            <NavBar />
            <Banner title="Gallery"/>
            <div className="container my-5 pb-5">
                <div className={model ? "model open" : "model"}>
                    <img src={tempimgSrc} alt="" />
                    <FontAwesomeIcon icon={faWindowClose} onClick={() => setModel(false)} />
                </div>

                <div className="gallery">
                    {galleryData.map((item, index) => {
                        return (
                            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>

                                <img src={item.imgSrc} style={{ width: '100%' }} alt="" />
                                <div class="middle">
                                    <div class="text">John Doe</div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Gallery;