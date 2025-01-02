import './Header.css'
import NavBar from './navBar/NavBar';
import Arrow from '../../assets/Arrow.png';
import AnimationVideo from '../../assets/ani-isa.mp4';

import { useState, useEffect } from 'react';

const names = ['Alexandr', 'Chichi', 'Шурик'];

function useRotatingNames(interval) {
    const [currentNameIndex, setCurrentNameIndex] = useState(0);

    useEffect(() => {
        const nameInterval = setInterval(() => {
            setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, interval);

        return () => clearInterval(nameInterval);
    }, [interval]);
    return names[currentNameIndex];
}

export default function Header(){
    const rotatingName = useRotatingNames(5000);

    return(
        <>
            <NavBar></NavBar>
            <header>
                <section>
                    <div className="video-container">
                        <video autoPlay loop muted playsInline controls={false}>
                            <source src={AnimationVideo} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <div className="header-banner">
                        <div className="presentation-description">
                            <p className="presentation">Hi, I'm <span>{rotatingName}</span></p>
                            <p className="description">Web and UX developer</p>
                        </div>
                        <a className="arrow-link" href="#ancla-1"><img className="arrow" src={Arrow} alt="arrow to slide" /></a>
                    </div>
                </section>
            </header>
        </>
    )
}