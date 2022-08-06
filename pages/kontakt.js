import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import { useRouter } from 'next/router'

const Contact = () => {
    const router = useRouter();
    const email = router.query.email;
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="Kontakt" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Kontakt" 
                BGImage="default-banner" 
            />

            <ContactForm initialEmail={email} />

            <ContactInfo />

			<Footer />
		</>
    )
}

export default Contact;