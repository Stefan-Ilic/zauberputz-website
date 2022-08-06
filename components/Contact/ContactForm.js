import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/router';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state


const ContactForm = ({initialEmail = ''}) => {
    const INITIAL_STATE = {
        name: "",
        email: initialEmail ? initialEmail : "",
        number: "",
        subject: "",
        text: ""
    };

    const [contact, setContact] = useState(INITIAL_STATE);
    const [state, handleSubmit] = useForm("mbjbryoo");
    const router = useRouter();

    if (state.succeeded) {
        router.push('/');
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    return (
        <div className="contact-area pb-100 pt-100 ">
            <div className="container">
                <div className="section-title">
                    <span>In Kontakt treten</span>
                    <h2>Erhalten Sie Ihr personalisiertes Angebot</h2>
                    <div className="bar"></div>
                </div>

                <div className="contact-form">
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name" 
                                        className="form-control" 
                                        value={contact.name}
                                        onChange={handleChange}
                                    />
                                    {/* <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.name && 'Name is required.'}
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="email" 
                                        placeholder="E-Mail Adresse" 
                                        className="form-control" 
                                        value={contact.email}
                                        onChange={handleChange}
                                    />
                                    {/* <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.email && 'Email is required.'}
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="number" 
                                        placeholder="Telefonnummer" 
                                        className="form-control" 
                                        value={contact.number}
                                        onChange={handleChange}
                                    />
                                    {/* <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.number && 'Number is required.'}
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Betreff" 
                                        className="form-control" 
                                        value={contact.subject}
                                        onChange={handleChange}
                                    />
                                    {/* <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.subject && 'Subject is required.'}
                                    </div> */}
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea 
                                        name="text" 
                                        cols="30" 
                                        rows="5" 
                                        placeholder="Ihre Nachricht" 
                                        className="form-control" 
                                        value={contact.text}
                                        onChange={handleChange}
                                    />
                                    {/* <div className='invalid-feedback' style={{display: 'block'}}>
                                        {errors.text && 'Text body is required.'}
                                    </div> */}
                                </div>
                            </div>
        
                            <div className="col-lg-12 col-sm-12 text-center">
                                <button type="submit" className="default-btn">Abschicken</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;