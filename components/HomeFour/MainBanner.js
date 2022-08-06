import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="main-banner-item item-three">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <h1>Digital Agency with Excellence Service</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                        <div className="banner-btn">
                                            <Link href="/contact-1">
                                                <a className="default-btn">
                                                    Get Services
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="main-banner-image">
                                        <img src="/images/banner/banner-image-3.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-banner-shape">
                <div className="shape-9">
                    <img src="/images/banner/banner-shape-6.png" alt="image" />
                </div>
                <div className="shape-10">
                    <img src="/images/banner/banner-shape-7.png" alt="image" />
                </div>
                <div className="shape-11">
                    <img src="/images/banner/banner-shape-8.png" alt="image" />
                </div>
                <div className="shape-12">
                    <img src="/images/banner/banner-shape-9.png" alt="image" />
                </div>
                <div className="shape-13">
                    <img src="/images/banner/banner-shape-10.png" alt="image" />
                </div>
                <div className="shape-14">
                    <img src="/images/banner/banner-shape-11.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;