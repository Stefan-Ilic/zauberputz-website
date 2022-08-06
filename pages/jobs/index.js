import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import Link from 'next/link';

const PortfolioTwo = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Offene Stellen" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Offene Stellen" 
                BGImage="default-banner" 
            />

            <div className="portfolio-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <div className="portfolio-image">
                                    <Link href="/jobs/gartenhelferin">
                                        <a>
                                            <img src="/images/jobs/gardener.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="portfolio-content">
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Gartenhelfer/in</a>
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
        
			<Footer />
		</>
    )
}

export default PortfolioTwo;