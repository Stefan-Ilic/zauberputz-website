import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import ServiceSidebar from '../../components/ServicesDetails/ServiceSidebar';
import ServiceFaq from '../../components/ServicesDetails/ServiceFaq';
import RelatedServices from '../../components/ServicesDetails/RelatedServices';
import { gartenFaq } from '../../constants';
import Head from 'next/head';

const ServicesDetails = () => {
    return (
        <>
            <Head>
                <title>Gartenbetreuung Wien - Hausbetreuung/Gartenbetreuung/Winterdienst</title>
                <meta name="description" content="Gartenbetreuung Wien - Zauberputz. Ihr Spezialist für Rasen mähen, Jäten, Bewässerung, Laubkehrung, Heckenschnitt, Unkrautentfernung in Wien und Umgebung" />
            </Head>
			<Navbar />

			<PageBanner 
                pageTitle="Gartenebtreuung" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Gartenebtreuung" 
                BGImage="default-banner" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-image">
                                <img src="/images/services-details/garten-details.svg" alt="image" />
                            </div>

                            <div className="services-details-desc">
                                <h3>Der Traum vom Sommer</h3>
                                <p>
                                    Ein schöner Garten, Sträucher, Hecken und Bäume erfordern viel Pflege. Weil Ihre Zufriedenheit unser größtes Anliegen ist, betreuen wir Ihre Grünflächen als wären sie unsere Eigenen.
                                </p>

                                <h3>Probleme lösen, bevor sie entstehen</h3>
                                <p>Mit unserer Grünflächenbetreuung decken wir ein großes Spektrum an Gartendienstleistungen ab. Folgende Leistungen bieten wir mitunter an:</p>

                                <div className="services-details-features">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div>
                                                <img src="/images/services-details/watering-plants.svg" alt="image" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <ul className="features-list">
                                                <li><i className="flaticon-check"></i> Rasen mähen</li>
                                                <li><i className="flaticon-check"></i> Mulchen</li>
                                                <li><i className="flaticon-check"></i> Bewässerung</li>
                                                <li><i className="flaticon-check"></i> Laubkehrung</li>
                                                <li><i className="flaticon-check"></i> Unkrautentfernung</li>
                                                <li><i className="flaticon-check"></i> Heckenschnitt</li>
                                                <li><i className="flaticon-check"></i> Frühjahresputz</li>
                                                <li><i className="flaticon-check"></i> Bodendeckerpflege</li>
                                                <li><i className="flaticon-check"></i> Und vieles mehr nach Absprache!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-result">
                                    <h3>Häufig gestellte Fragen</h3>
                                    <p>Gerne beantworten wir Ihre Fragen zum Thema Gartenbetreuung</p>
                                </div>

                                <ServiceFaq faqs={gartenFaq} />
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