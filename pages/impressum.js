import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';
import { address, phoneNumber, emailAddress } from '../constants';

const TermsOfService = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Impressum" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Impressum" 
                BGImage="default-banner" 
            />

            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="privacy-content">
                        <h3>Für den Inhalt verantwortlich</h3>
                        <p>Zauberputz e.U.<br/>{address}</p>
                        <p>Tel.: {phoneNumber}</p>
                        <p>E-Mail: {emailAddress}</p>

                        <h3>Gegenstand des Unternehmens</h3>
                        <p>Hausbetreuung; Durchführung einfacher Gartenarbeiten; Kehr-, Wasch-, Räum- und Winterdienste;</p>

                        <h3>Disclaimer</h3>
                        <p>Wir bieten keine Gewähr für die Aktualität, Richtigkeit und Vollständigkeit der Informationen unserer Homepage. Die von uns zur Verfügung gestellten Informationen stellen in keinem Fall rechtliche Zusicherungen dar. Für die Inhalte und die Richtigkeit verlinkter Seiten übernehmen wir keinerlei Haftung.</p>
                        <p>Die Inhalte unserer Homepage sind urheberrechtlich geschützt. Die Inhalte dürfen weder ganz noch teilweise ohne vorherige schriftliche Genehmigung vervielfältigt und/oder veröffentlicht oder in einem Informationssystem gespeichert werden. Die Darstellung unserer Homepage in fremden Frames ist nur nach ausdrücklicher schriftlicher Zustimmung zulässig.</p>
                    </div>
                </div>
            </div>
			 
			<SubscribeForm />

			<Footer />
		</>
    )
}

export default TermsOfService;