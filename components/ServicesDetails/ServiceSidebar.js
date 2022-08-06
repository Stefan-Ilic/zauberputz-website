import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { services, phoneNumber, emailAddress, address } from '../../constants';

const ServiceSidebar = () => {
    const router = useRouter();
    return (
        <div className="services-details-information ml-10">
            <ul className="services-list">
                {services.map((service, i) => (
                    <li key={i}>
                        <Link href={service.link}>
                            <a className={router.pathname.includes(service.link) ? "active" : ""}>{service.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="download-file">
                <h3>Broschüren</h3>

                <ul>
                    <li><a href="/services-details" target="_blank">Alle Leistungen auf einen Blick <i className='bx bxs-file-pdf'></i></a></li>
                </ul>
            </div>

            <div className="services-contact-info">
                <h3>Kontakt</h3>
                
                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-pin'></i>
                        </div>
                        <span>Telefon:</span>
                        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-map'></i>
                        </div>
                        <span>Adresse:</span>
                        {address}
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-envelope'></i>
                        </div>
                        <span>E-Mail:</span>
                        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceSidebar;