import React from 'react';
import { emailAddress, address, phoneNumber, googleMapsLink } from '../../constants';


const ContactInfo = () => {
    return (
        <div className="contact-info-area pb-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-email-1"></i>
                            </div>

                            <h3>E-Mail</h3>
                            <p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-pin"></i>
                            </div>

                            <h3>Adresse</h3>
                            <p><a href={googleMapsLink} target="_blank">{address}</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <i className="flaticon-call"></i>
                            </div>

                            <h3>Telefonnummer</h3>
                            <p><a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;