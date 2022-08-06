import React from 'react';
import Link from 'next/link';

const OurProjects = () => {
    return (
        <div className="portfolio-area bg-fff5ee pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Portfolio Showcase</span>
                    <h2>Our Impressive Portfolio</h2>
                    <div className="bar"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-1.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Creative Web Design</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-2.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Web Development</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-3.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Web Application</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-4.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Dashboard App</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-5.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>App Development</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-6.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Digital Agency</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-7.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Website Development</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-8.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Logo & Branding</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-portfolio">
                            <div className="portfolio-image">
                                <img src="/images/portfolio/portfolio-9.jpg" alt="image" />
                            </div>

                            <div className="portfolio-content">
                                <Link href="/portfolio-details">
                                    <a><i className='bx bx-plus'></i></a>
                                </Link>
                                <h3>
                                    <Link href="/portfolio-details">
                                        <a>Mobile App Development</a>
                                    </Link>
                                </h3>
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

export default OurProjects;