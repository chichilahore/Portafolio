import './Footer.css';
import Contact from './contact/Contact';

export default function Footer() {
    return (
        <footer>
            <a name="ancla-3"><h2>Contact</h2></a>
            <div>
                <span>Let's get in touch! Send me a message to WhatsApp</span>
                <input type='text' className='input-contact' placeholder='Write here'/>
                <button type='submit'>Enviar</button>
            </div>
            <div className="contact-icons">
                <Contact></Contact>
            </div>
        </footer>
    )
}