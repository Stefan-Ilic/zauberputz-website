import React from 'react';
import Link from 'next/link';
import { phoneNumber, emailAddress, address, googleMapsLink, services } from '../../constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src="/images/logo.svg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <p>Ihr Spezialist für Gebäudedienstleistungen wie Hausbetreuung, Grünflächenbetreuung und Winterdienst. Kompetent, unkompliziert und kosteneffizient</p>

                                {/* <ul className="social">
                                    <li>
                                        <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                            <i className='bx bxl-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" className="twitter" target="_blank">
                                            <i className='bx bxl-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" className="pinterest" target="_blank">
                                            <i className='bx bxl-pinterest-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" className="linkedin" target="_blank">
                                            <i className='bx bxl-instagram-alt'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" className="linkedin" target="_blank">
                                            <i className='bx bxl-linkedin'></i>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Links</h3>
        
                                <ul className="quick-links">
                                    <li>
                                        <Link href="/blog-2">
                                            <a>Blog</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/kontakt">
                                            <a>Kontakt</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/jobs">
                                            <a>Offene Stellen</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Dienstleistungen</h3>
        
                                <ul className="quick-links">
                                    {services.map((service, i) => (
                                        <li key={i}>
                                            <Link href={service.link}>
                                                <a>{service.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Information</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="flaticon-call"></i>
                                        <span>Telefon</span>
                                        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-email-1"></i>
                                        <span>Email</span>
                                        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-pin"></i>
                                        <span>Adresse</span>
                                        <a href={googleMapsLink} target="_blank">{address}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="copyright-area-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>
                                    Copyright &copy; Zauberputz e.U. {currentYear}. Website made with ❤️ by <a href="https://magic-it-services.at">magic-it-services.at</a>
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/kontakt">
                                            <a>Kontakt</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/impressum">
                                            <a>Impressum</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;