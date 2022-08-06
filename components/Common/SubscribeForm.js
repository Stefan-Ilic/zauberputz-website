import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router'

const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();
    return (
        <div className="subscribe-area ptb-100">
            <div className="container">
                <div className="subscribe-content">
                    <span>Jetzt durchstarten!</span>
                    <h2>Erhalten Sie Ihr personalisiertes Angebot</h2>

                    <form onSubmit={(e) => {e.preventDefault(); router.push({ pathname: '/kontakt', query: { email: email } }); }} className="newsletter-form">
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="input-newsletter" placeholder="E-Mail Adresse" name="EMAIL" required />

                        <button type="submit">Anfragen</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubscribeForm;