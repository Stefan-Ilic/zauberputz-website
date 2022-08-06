import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServiceSidebar from '../../components/ServicesDetails/ServiceSidebar';
import ServiceFaq from '../../components/ServicesDetails/ServiceFaq';
import RelatedServices from '../../components/ServicesDetails/RelatedServices';
import { winterdienstFaq } from '../../constants';

const ServicesDetails = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Winterdienst" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Winterdienst" 
                BGImage="default-banner" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-image">
                                <img src="/images/services-details/winterdienst-details.svg" alt="image" />
                            </div>

                            <div className="services-details-desc">
                                <h3>Sorgenfreiheit durch sichere Gehwege</h3>
                                <p>
                                    Mit unserem Winterdienst Service sind Ihre Gehwege, Treppen und sonstigen Flächen frei und begehbar!
                                </p>

                                <h3>Probleme lösen, bevor sie entstehen</h3>
                                <p>Mit unserem Winterdienst gehen Sie (rechts)sicher in die kalten Wintermonate. Folgende Leistungen sind mitunter inkludiert:</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div>
                                                <img src="/images/services-details/snow.svg" alt="image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                <li><i className="flaticon-check"></i> Räumung der in der Anlage enthaltenen Flächen von Schnee</li>
                                                <li><i className="flaticon-check"></i> Deren Streuung mit Split und Salz</li>
                                                <li><i className="flaticon-check"></i> Entfernung des Streusplittes am Ende der Saison (inkl. Zwischenkehrungen)</li>
                                                <li><i className="flaticon-check"></i> Tauwetterkontrollen</li>
                                                <li><i className="flaticon-check"></i> Übernahme der Rechte und Pflichten durch Rechtsgeschäft gemäß StVO (§ 93) und ABGB (§ 1319a)</li>
                                                <li><i className="flaticon-check"></i> Und vieles mehr nach Absprache!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>Häufig gestellte Fragen</h3>
                                    <p>Gerne beantworten wir Ihre Fragen zum Thema Winterdienst</p>
                                </div>

                                <ServiceFaq faqs={winterdienstFaq} />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </div>
			
            <RelatedServices />
            
			<Footer />
		</>
    )
}

export default ServicesDetails;