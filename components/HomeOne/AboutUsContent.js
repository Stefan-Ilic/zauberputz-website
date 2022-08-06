import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <div className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image">
                            <img src="/images/family.svg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content p-0">
                            <span>Über uns</span>
                            <h3>Wir nehmen Hausverwaltern, Eigentümern und Mietern die Sorgen</h3>
                            <div className="bar"></div>
                            <p><strong>Als Familienunternehmen achten wir auf eine gute Balance zwischen Professionalität und Unkompliziertheit</strong></p>
                            <p>Da unsere Wurzeln in einem kleinen Familienbetrieb liegen ist unsere Philosophie ganz einfach: Jeder Kunde wird Teil unserer Familie und deshalb kümmern wir uns um Ihr Objekt so als wäre es unseres. Da Kundenzufriedenheit unser größtes Anliegen ist, wird jedes Angebot unsererseits perfekt auf Sie abgestimmt, damit jeder Wunsch, sei er noch so klein, abgedeckt ist. Diese Hingabe und die Zeit, die wir uns für jeden einzelnen Kunden nehmen, machen uns zu dem, was wir sind.</p>

                            {/* <div className="about-btn">
                                <Link href="/about-1">
                                    <a className="default-btn">Learn More</a>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default AboutUsContent;