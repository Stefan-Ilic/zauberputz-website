import React from 'react';
import Link from 'next/link';
import { services } from '../../constants';
import { useRouter } from 'next/router';

const RelatedServices = () => {
    const router = useRouter();
    return (
        <div className="services-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Unsere Leistungen</span>
                    <h2>Weitere Tätigkeiten</h2>
                    <div className="bar"></div>
                </div>

                <div className="row">
                    {services.filter(service => !router.pathname.includes(service.link)).map((service, i) => (
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
        </div>
    )
}

export default RelatedServices;