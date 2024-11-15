import './About.css';
import AboutMePitcure from '../../../assets/AboutPic.jpeg';


export default function About() {
    return (
        <div className="about" >
            <div className="about-content">
                <div className="about-description">
                    <div><h2>About me</h2></div>
                    <p>Hi, I’m Alexandr Chichizola,
                    web developer based on Barcelona.
                    My goal in life is to help the 
                    development of the best user-information 
                    relationship through of coding, data and
                    UX/UI Interactive Interfaces.</p>
                </div>
                <img className="about-pic" src={AboutMePitcure} alt="alexandr pic" />
            </div>
        </div>
    );
}