import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pt-100 pb-70">
            <div className="container">
                <div className="section-title text-width">
                    <span>Care Features</span>
                    <h2>Create Awesome Service With Our Tools</h2>
                    <div className="bar"></div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="features-image-warp">
                            <img src="/images/features/features-2.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="pl-30">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-features-box">
                                        <div className="icon">
                                            <i className='bx bxl-facebook'></i>
                                        </div>
                                        <h3>
                                            <Link href="/services-details">
                                                <a>Marketing Analysis</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-features-box">
                                        <div className="icon">
                                            <i className="flaticon-speed"></i>
                                        </div>
                                        <h3>
                                            <Link href="/services-details">
                                                <a>Website Optimization</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-features-box">
                                        <div className="icon">
                                            <i className="flaticon-email"></i>
                                        </div>
                                        <h3>
                                            <Link href="/services-details">
                                                <a>Email Marketing</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-features-box">
                                        <div className="icon">
                                            <i className="flaticon-network"></i>
                                        </div>
                                        <h3>
                                            <Link href="/services-details">
                                                <a>Social Media Marketing</a>
                                            </Link>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;