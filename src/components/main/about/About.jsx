import './About.css';
import AboutMePitcure from '../../../assets/capturafoto.png';


export default function About() {
    return (
        <div className="about" >
            <a name="ancla-1" ><h2>About me</h2></a>
            <div className="about-content">
                <div className="about-description">Hi, I’m Alexandr Chichizola, web developer based on Barcelona. I like to transform ideas and create spaces through the digital world.</div>
                <img className="about-pic" src={AboutMePitcure} alt="alexandr pic" />
            </div>
        </div>
    );
}