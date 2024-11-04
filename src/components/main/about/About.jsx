import './About.css';
import AboutMePitcure from '../../../assets/capturafoto.png';


export default function About() {
    return (
        <div className="about" >
            <div id="ancla-1" ><h2>About me</h2></div>
            <div className="about-content">
                <div className="about-description">
                    Hi, I’m Alexandr Chichizola,
                    web developer based on Barcelona.
                    My goal in life is to help the 
                    development of the best user-information 
                    relationship through of coding, data and
                    UX/UI Interactive Interfaces.</div>
                <img className="about-pic" src={AboutMePitcure} alt="alexandr pic" />
            </div>
        </div>
    );
}