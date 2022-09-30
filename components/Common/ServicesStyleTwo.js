import React from 'react';
import Link from 'next/link';
import { services } from '../../constants';

const ServicesStyleTwo = () => {
    return (
        <div className="services-area bg-fafafa pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Wir übernehmen es für Sie</span>
                    <h2>Unsere Dienstleistungen</h2>
                    <div className="bar"></div>
                </div>
                <div className="row justify-content-center">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="single-services-item">
                                <div className="image">
                                    <Link href={service.link}>
                                        <a>
                                            <img src={service.smallImage} alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href={service.link}>
                                            <a>{service.name}</a>
                                        </Link>
                                    </h3>
                                    <span>{service.slogan}</span>
                                </div>
                            </div>
                        </div>
                    ))}
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

export default ServicesStyleTwo;