import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const ServiceFaq = ({faqs}) => {
    return (
        <div className="faq-accordion mt-3">
            <Accordion allowZeroExpanded preExpanded={[0]}>
                {faqs.map((faq, i) => (
                    <AccordionItem uuid={i} key={i}>
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
    )
}

export default ServiceFaq;