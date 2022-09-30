import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import { emailAddress } from '../../constants';
import Head from 'next/head';

const PortfolioDetails = () => {
    return (
        <>
            <Head>
                <title>Gartenhelferin/Gartenhelfer gesucht! Hausbetreuung Wien</title>
                <meta name="description" content="Gartenhelfer/in gesucht! Hausbetreuung Wien - Zauberputz. Ihr Spezialist für Hausbetreuung, Grünflächenbetreuung und Winterdienst in Wien und Umgebung." />
            </Head>

			<Navbar />

			<PageBanner 
                pageTitle="Portfolio Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Details" 
                BGImage="default-banner" 
            />

            <div className="portfolio-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-details-image">
                                <img src="/images/jobs/gardener-large.svg" alt="portfolio" />
                            </div>

                            <div className="portfolio-details-desc">
                                <h3>Gartenhelfer/in</h3>
                                <p>Wir, ein kleines Familienunternehmen mit flacher Hierarchie und kurzen Entscheidungswegen, suchen zur Unterstützung unseres Grünflächenteams ab sofort einen motivierten Gartenhelfer oder eine matovierte Gartenhelferin.</p>

                                <h4>Aufgaben</h4>
                                <div className="features-text">
                                    <h4><i className="flaticon-check"></i> Rasen mähen</h4>
                                </div>
                                <div className="features-text">
                                    <h4><i className="flaticon-check"></i> Fahrzeug zu den Objekten fahren (Führerschein B)</h4>
                                </div>
                                <div className="features-text">
                                    <h4><i className="flaticon-check"></i> Unkraut jäten</h4>
                                </div>
                                <div className="features-text">
                                    <h4><i className="flaticon-check"></i> Bewässerung</h4>
                                </div>
                                <div className="features-text">
                                    <h4><i className="flaticon-check"></i> Düngen</h4>
                                </div>
                                <div className="features-text">
                                    <h4><i className="flaticon-check"></i> Laubbeseitigung</h4>
                                </div>

                                <p>Aus gesetzlichen Gründen sind wir verpflichtet darauf hinzuweisen, dass das kollektivvertragliche Mindestgehalt für diese Stelle aktuell €1.749,32 Brutto/Monat (bei Vollzeitbeschäftigung) beträgt. Eine marktkonforme Überzahlung je nach Qualifikationen ist selbstverständlich möglich.</p>                            </div>
                                <p style={{marginTop: '30px'}}>Bei Interesse senden Sie ihre Bewerbungsunterlagen (Bewerbungsschreiben, Lebenslauf) per E-Mail an: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="portfolio-details-information ml-10">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bxs-map'></i>
                                        </div>
                                        <span>Einsatzort</span>
                                        Wien und Umgebung, Österreich
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-purchase-tag'></i>
                                        </div>
                                        <span>Qualifikationen</span>
                                        Führerschein B, sonst kein Vorwissen erforderlich
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-calendar'></i>
                                        </div>
                                        <span>Start</span>
                                        Ab Sofort
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-envelope'></i>
                                        </div>
                                        <span>E-Mail</span>
                                        <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default PortfolioDetails;