import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner">
            <div className="main-banner-item">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <h1>We Move The  Digital Industrial Forward</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <div className="banner-btn">
                                            <Link href="/contact-1">
                                                <a className="default-btn">
                                                    Get Started
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="main-banner-image">
                                        <img src="/images/banner/banner-image-1.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-banner-shape">
                <div className="shape-1">
                    <img src="/images/banner/banner-shape-1.png" alt="image" />
                </div>
                <div className="shape-2">
                    <img src="/images/banner/banner-shape-2.png" alt="image" />
                </div>
                <div className="shape-3">
                    <img src="/images/banner/banner-shape-3.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;