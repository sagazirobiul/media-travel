import React from 'react';
import './BrandLogo.css'
import Zoom from 'react-reveal/Zoom';

// For look good serial logo
import brand1 from '../../resources/img/brand1.svg'
import brand2 from '../../resources/img/brand5.svg'
import brand3 from '../../resources/img/brand2.svg'
import brand4 from '../../resources/img/brand3.svg'
import brand5 from '../../resources/img/brand4.svg'

const BrandLogo = () => {
    return (
        <div class="brands">
        <div class="container">
          <div class="row mx-auto">
            <div class="col-md text-center">
              <Zoom bottom distance='30px'>
                <img alt="" src={brand1}/>
              </Zoom>
            </div>
            <div class="col-md text-center">
              <Zoom bottom distance='30px'>
                <img alt="" src={brand2}/>
              </Zoom>
            </div>
            <div class="col-md text-center">
              <Zoom bottom distance='30px'>
                <img alt="" src={brand3}/>
              </Zoom>
            </div>
            <div class="col-md text-center">
              <Zoom bottom distance='30px'>
                <img alt="" src={brand4}/>
              </Zoom>
            </div>
            <div class="col-md text-center">
              <Zoom bottom distance='30px'>
                <img alt="" src={brand5}/>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BrandLogo;