import './Header.css'
import NavBar from './navBar/NavBar';
import Arrow from '../../assets/Arrow.png';
import AnimationVideo from '../../assets/ani-isa.mp4';

export default function Header(){
    return(
        <header>
           <NavBar></NavBar>
            <section>
                <div className="video-container">
                    <video autoPlay loop muted>
                        <source src={AnimationVideo} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
                <div className="header-banner">
                    <div className="presentation-description">
                        <p className="presentation">Hi, I'm Alexandr</p>
                        <p className="description">Web and UX developer</p>
                    </div>
                    <a className="arrow-link" href="#ancla-1"><img className="arrow" src={Arrow} alt="arrow to slide" /></a>
                </div>
            </section>
        </header>
    )
}