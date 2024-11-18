import './Projects.css';
import FreepositoryDesktop from "../../../assets/freepositoryDesktop.png";
import FrontifyDesktop from "../../../assets/frontifyDesktop.png";
import HabbitoMobile from "../../../assets/habbitoMobile.png";
import IsaEnesDesktop from "../../../assets/isaEnesDesktop.png";
import NasiriDesktop from "../../../assets/nasiriDesktop.png";
import SoundwaveDesktop from "../../../assets/soundwaveDesktop.png";


export default function Projects() {
    return (
        <div className="projects">
            <div id="ancla-2"><h2>Projects</h2></div>
            <div className="projects-content">
                <article className="card">
                    <a href="https://isaenesart.vercel.app/">
                        <h3>Isa Enes</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={IsaEnesDesktop} alt="Isa Enes Desktop" />
                        </div>
                    </a>
                </article>
                <article className="card">
                    <a href="https://nasiri.vercel.app/">
                        <h3>Nasiri Music</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={NasiriDesktop} alt="Nasiri Music Desktop" />
                        </div>
                    </a>
                </article>
                <article className="card">
                    <a href="https://p11-project7-final-group3.vercel.app/">
                        <h3>Rabbito</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={HabbitoMobile} alt="Rabbito Desktop" />
                        </div>
                    </a>
                </article>
                <article className="card">
                    <a href="https://freepositoryf5.vercel.app/" className="card-description">
                        <h3>Freepository</h3>
                        <div className="image-container">

                            <img className="img-desktop" src={FreepositoryDesktop} alt="Freepository Desktop" />
                        </div>
                    </a>
                </article>
                <article className="card">
                    <a href="https://frontify-red.vercel.app/" className="card-description">
                        <h3>Frontity</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={FrontifyDesktop} alt="Frontify Desktop" />
                        </div>
                    </a>
                </article>
                <article className="card">
                    <a href="https://sound-wave-bay.vercel.app/" className="card-description">
                        <h3>Soundwave</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={SoundwaveDesktop} alt="Soundwave Desktop" />
                        </div>
                    </a>
                </article>
                {/* <article className="card-7">
                    <a href="https://rickandmorti-87ww.vercel.app/" className="card-description">
                        <h3>Rick and Morty Hackaton Trial</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={RickandMortyDesktop} alt="Rick and Morty Desktop" />
                            <img className="img-mobile" src={RickandMortyMobile} alt="Rick and Morty Mobile" />
                        </div>
                    </a>
                </article> */}
{/*                 <article className="card">
                    <a href="https://duckumobile.vercel.app/" className="card-description">
                        <h3>Duck U (App E-commerce)</h3>
                        <div className="image-container same">
                            <img className="img-mobile" src={DuckUMobile} alt="Duck U Mobile" />
                        </div>
                    </a>image-container
                </article> */}
                {/* <article className="card-9">
                    <a href="https://playwiththedom.vercel.app/" className="card-description">
                        <h3>Play with the DOM</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={PlayDesktop} alt="Play with the DOM Desktop" />
                            <img className="img-desktop" src={PlayDesktop2} alt="Play with the DOM Mobile" />
                        </div>
                    </a>
                </article> */}
            </div>
        </div>
    )
}

