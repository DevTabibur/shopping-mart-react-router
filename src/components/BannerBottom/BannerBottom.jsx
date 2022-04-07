import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './BannerBottom.css'
import { AiFillCar } from 'react-icons/ai';
import { MdOutlineSupport } from 'react-icons/md';
import { GiReturnArrow } from 'react-icons/gi';
import { SiFsecure } from 'react-icons/si';


const BannerBottom = () => {
    return (
        <div className="container py-5">
            <div className="row">

                <div className="col-md-3">
                    <div className="banner-bottom-info d-flex justify-content-center">
                        <div className="banner-icon w-25 me-3">
                            <AiFillCar className='h3'/>
                        </div>
                        <div className="banner-text">
                            <h4>FREE SHIPPING</h4>
                            <p>Free shipping on all US order or order above $100</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="banner-bottom-info d-flex justify-content-center">
                        <div className="banner-icon w-25 me-3">
                            <MdOutlineSupport className='h3'/>
                        </div>
                        <div className="banner-text">
                            <h4>SUPPORT 24/7</h4>
                            <p>Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="banner-bottom-info d-flex justify-content-center">
                        <div className="banner-icon w-25 me-3">
                            <GiReturnArrow className='h3'/>
                        </div>
                        <div className="banner-text">
                            <h4>30 DAYS RETURN</h4>
                            <p>Simply return it within 30 days for an exchange.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="banner-bottom-info d-flex justify-content-center">
                        <div className="banner-icon w-25 me-3">
                            <SiFsecure className='h3'/>
                        </div>
                        <div className="banner-text">
                            <h4>100% PAYMENT SECURE</h4>
                            <p>We ensure secure payment with PEV</p>
                        </div>
                    </div>
                </div>
                
                

            </div>
        </div>
    );
};

export default BannerBottom;