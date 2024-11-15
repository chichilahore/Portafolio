import './Footer.css';
import Contact from './contact/Contact';

export default function Footer() {
    return (
        <footer>
            <div id="ancla-3"><h2>Contact</h2></div>
            <div className='contact-form'>
                <span>Let's get in touch! Send me a message to WhatsApp</span>
                <div className='input-button'>
                    <input type='text' className='input-contact' placeholder='Write here'/>
                    <button type='submit'>Enviar</button>
                </div>
            </div>
            <div className="contact-icons">
                <Contact></Contact>
            </div>
        </footer>
    )
}