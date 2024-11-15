import './Footer.css';
import Contact from './contact/Contact';
import React, { useState } from 'react';

export default function Footer() {
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendClick = () => {
        const phoneNumber = '+34647143745'; // Replace with the actual phone number
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
    return (
        <footer>
            <div id="ancla-3"><h2>Contact</h2></div>
            <div className='contact-form'>
                <span>Let's get in touch! Send me a message to WhatsApp</span>
                <div className='input-button'>
                    <input type='text' className='input-contact' placeholder='Write here' value={message} onChange={handleInputChange} />
                    <button type='submit' onClick={handleSendClick}>Send</button>
                </div>
            </div>
            <div className="contact-icons">
                <Contact></Contact>
            </div>
        </footer>
    )
}