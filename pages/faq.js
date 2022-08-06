import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import SubscribeForm from '../components/Common/SubscribeForm';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import { hausbetreuungFaq, winterdienstFaq, gartenFaq } from '../constants';

const Faq = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="FAQ" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
                BGImage="default-banner" 
            />

            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>FAQ</span>
                        <h2>Häufig gestellte Fragen</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="faq-accordion">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            {(hausbetreuungFaq.concat(winterdienstFaq).concat(gartenFaq).slice(0, -1)).map((faq, i) => (
                                    <AccordionItem key={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                                <span>{faq.q}</span>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p>{faq.a}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}

                        </Accordion>
                    </div> 
                </div>
            </div>

			<SubscribeForm />

			<Footer />
		</>
    )
}

export default Faq;