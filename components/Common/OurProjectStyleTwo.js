import React from 'react';
import Link from 'next/link';

const OurProjectStyleTwo = () => {
    return (
        <div className="portfolio-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Portfolio Showcase</span>
                    <h2>Our Impressive Portfolio</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/portfolio-details">
                                    <a>
                                        <img src="/images/portfolio/portfolio-1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Creative Work</a>
                                    </Link>
                                </h3>
                                <span>Web Design</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/portfolio-details">
                                    <a>
                                        <img src="/images/portfolio/portfolio-2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Ecommerce Work</a>
                                    </Link>
                                </h3>
                                <span>Creative Agency</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/portfolio-details">
                                    <a>
                                        <img src="/images/portfolio/portfolio-3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>App Development</a>
                                    </Link>
                                </h3>
                                <span>IOS Android</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/portfolio-details">
                                    <a>
                                        <img src="/images/portfolio/portfolio-4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Dashboard App</a>
                                    </Link>
                                </h3>
                                <span>Web Development</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/portfolio-details">
                                    <a>
                                        <img src="/images/portfolio/portfolio-5.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Web Application</a>
                                    </Link>
                                </h3>
                                <span>Marketing</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio-item">
                            <div className="portfolio-image">
                                <Link href="/portfolio-details">
                                    <a>
                                        <img src="/images/portfolio/portfolio-6.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="portfolio-content">
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Logo & Branding</a>
                                    </Link>
                                </h3>
                                <span>Agency</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="default-shape">
                <div className="shape1">
                    <img src="/images/default-shape/default-shape1.png" alt="image" />
                </div>
                <div className="shape2">
                    <img src="/images/default-shape/default-shape2.png" alt="image" />
                </div>
                <div className="shape3">
                    <img src="/images/default-shape/default-shape3.png" alt="image" />
                </div>
                <div className="shape4">
                    <img src="/images/default-shape/default-shape4.png" alt="image" />
                </div>
            </div>
        </div>
    )
}

export default OurProjectStyleTwo;