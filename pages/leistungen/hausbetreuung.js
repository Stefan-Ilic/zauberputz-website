import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServiceSidebar from '../../components/ServicesDetails/ServiceSidebar';
import ServiceFaq from '../../components/ServicesDetails/ServiceFaq';
import RelatedServices from '../../components/ServicesDetails/RelatedServices';
import { hausbetreuungFaq } from '../../constants';

const ServicesDetails = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Hausbetreuung" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Hausbetreuung" 
                BGImage="default-banner" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-image">
                                <img src="/images/services-details/hausbetreuung-details.svg" alt="image" />
                            </div>

                            <div className="services-details-desc">
                                <h3>Sorgenfreiheit durch ein sauberes Stiegenhaus</h3>
                                <p>
                                    Mit unserer Hausbetreuung (auch Stiegenhausreinigung genannt) ist Ihre Wohnimmobilie jederzeit frei von Schmutz und sonstigen Unreinheiten.
                                    Mit variablen Leistungszeiträumen und speziell geschultem Personal stehen wir an Ihrer Seite!
                                </p>

                                <h3>Probleme lösen, bevor sie entstehen</h3>
                                <p>Unser Hausreinigungsangebot ist äußerst vielschichtig und variabel. Sie selbst bestimmen die Häufigkeit und Art der Reinigungsaktion. Unter anderem bieten wir folgende Dienste an:</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div>
                                                <img src="/images/services-details/broom.svg" alt="image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                <li><i className="flaticon-check"></i> Kehren/Nassreinigung des Stiegenhauses und der Handläufe</li>
                                                <li><i className="flaticon-check"></i> Reinigung aller öffentlichen Räume und Türen inkl. Mistplatz</li>
                                                <li><i className="flaticon-check"></i> Kehren des Gehsteigs</li>
                                                <li><i className="flaticon-check"></i> Reinigung der Fenster im Stiegenhaus</li>
                                                <li><i className="flaticon-check"></i> Entrümpelungen jederzeit nach Bedarf</li>
                                                <li><i className="flaticon-check"></i> Fußmatten-Mietservice</li>
                                                <li><i className="flaticon-check"></i> Laubkehrungen nach Bedarf</li>
                                                <li><i className="flaticon-check"></i> Zumindest 2 Grundreinigungen im Jahr</li>
                                                <li><i className="flaticon-check"></i> Und vieles mehr nach Absprache!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>Häufig gestellte Fragen</h3>
                                    <p>Gerne beantworten wir Ihre Fragen zum Thema Hausbetreuung</p>
                                </div>

                                <ServiceFaq faqs={hausbetreuungFaq} />
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