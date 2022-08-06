import React from 'react';
import Navbar from '../components/_App/Navbar';
import Footer from '../components/_App/Footer';
import { address, phoneNumber, emailAddress } from '../constants';

const TermsOfService = () => {
    return (
        <>
			<Navbar />

            <div className="ptb-100">
                <div className="container">
                    <h1>Vielen Dank für Ihre Anfrage!</h1>
                    <p>Wir melden uns so schnell wie möglich bei Ihnen</p>
                </div>
            </div>
			 

			<Footer />
		</>
    )
}

export default TermsOfService;