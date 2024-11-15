import LinkedinIcon from '../../../assets/linkedinicon.png';
import InstaIcon from '../../../assets/instaicon.png';
import MailIcon from '../../../assets/mailicon.png';

export default function Contact() {
    return (
        <div className='contact-links'>
            <a href="https://www.linkedin.com/in/alexandr-chichizola/">
                <img src={LinkedinIcon} alt="linkedin-icon" />
            </a>
            <a href="https://www.instagram.com/chichi.la.hore/">
                <img src={InstaIcon} alt="insta-icon" />
            </a>
            <a href="mailto:alexandrchichiloza@gmail.com" name="ancla-3">
                <img src={MailIcon} alt="mail-icon" />
            </a>
        </div>
    )

}