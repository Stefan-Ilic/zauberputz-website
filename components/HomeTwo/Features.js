import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="features-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="features-inner-content">
                            <span>Features</span>
                            <h3>Digital Marketing</h3>
                            <div className="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>

                            <ul className="features-list">
                                <li>
                                    <span><i className="flaticon-checked"></i> SEO Marketing</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i> Social Marketing</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i> Email Marketing</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i> Facebook Marketing</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i> Youtube Marketing</span>
                                </li>
                                <li>
                                    <span><i className="flaticon-checked"></i> Page Ranking</span>
                                </li>
                            </ul>

                            <div className="features-btn">
                                <Link href="/features-2">
                                    <a className="default-btn">Learn More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="features-image">
                            <img src="/images/features/features-1.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;