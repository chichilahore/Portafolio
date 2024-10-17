import './Projects.css';
import FreepositoryDesktop from "../../../assets/freepositoryDesktop.png";
import FreepositoryMobile from "../../../assets/freepositoryMobile.png";
import FrontifyDesktop from "../../../assets/FrontifyDesktop.png";
import FrontifyMobile from "../../../assets/FrontifyMobile.png";
import HabbitoDesktop from "../../../assets/HabbitoDesktop.png";
import HabbitoMobile from "../../../assets/HabbitoMobile.png";
import IsaEnesDesktop from "../../../assets/IsaEnesDesktop.png";
import IsaEnesMobile from "../../../assets/IsaEnesMobile.png";
import NasiriDesktop from "../../../assets/NasiriDesktop.png";
import NasiriMobile from "../../../assets/NasiriMobile.png";
import RickandMortyDesktop from "../../../assets/RickandMortyDesktop.png";
import RickandMortyMobile from "../../../assets/RickandMortyMobile.png";
import SoundwaveDesktop from "../../../assets/SoundwaveDesktop.png";
import SoundwaveMobile from "../../../assets/SoundwaveMobile.png";
import DuckUMobile from "../../../assets/DuckUMobile.png";
import DuckUMobile2 from "../../../assets/DuckUMobile2.png";
import PlayDesktop from "../../../assets/PlayDesktop.png";
import PlayDesktop2 from "../../../assets/PlayDesktop2.png"

export default function Projects() {
    return (
        <div className="projects">
            <a name="ancla-2"><h2>Projects</h2></a>
            <div className="projects-content">
                <article className="card-1">
                    <a href="https://isaenespage.vercel.app/">
                        <h3>Isa Enes</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={IsaEnesDesktop} alt="Isa Enes Desktop" />
                            <img className="img-mobile" src={IsaEnesMobile} alt="Isa Enes Mobile" />
                        </div>
                    </a>
                </article>
                <article className="card-2">
                    <a href="https://nasiri.vercel.app/">
                        <h3>Nasiri Music</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={NasiriDesktop} alt="Nasiri Music Desktop" />
                            <img className="img-mobile" src={NasiriMobile} alt="Nasiri Music Mobile" />
                        </div>
                    </a>
                </article>
                <article className="card-3">
                    <a href="https://p11-project7-final-group3.vercel.app/">
                        <h3>Rabbito</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={HabbitoMobile} alt="Rabbito Desktop" />
                            <img className="img-mobile" src={HabbitoDesktop} alt="Rabbito Mobile" />
                        </div>
                    </a>
                </article>
                <article className="card-4">
                    <a href="https://freepositoryf5.vercel.app/" className="card-description">
                        <h3>Freepository</h3>
                        <div className="image-container">

                            <img className="img-desktop" src={FreepositoryDesktop} alt="Freepository Desktop" />
                            <img className="img-mobile" src={FreepositoryMobile} alt="Freepository Mobile" />
                        </div>
                    </a>
                </article>
                <article className="card-5">
                    <a href="https://frontify-red.vercel.app/" className="card-description">
                        <h3>Frontity</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={FrontifyDesktop} alt="Frontify Desktop" />
                            <img className="img-mobile" src={FrontifyMobile} alt="Frontify Mobile" />
                        </div>
                    </a>
                </article>
                <article className="card-6">
                    <a href="https://sound-wave-bay.vercel.app/" className="card-description">
                        <h3>Soundwave</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={SoundwaveDesktop} alt="Soundwave Desktop" />
                            <img className="img-mobile" src={SoundwaveMobile} alt="Soundwave Mobile" />
                        </div>
                    </a>
                </article>
                <article className="card-7">
                    <a href="https://rickandmorti-87ww.vercel.app/" className="card-description">
                        <h3>Rick and Morty Hackaton Trial</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={RickandMortyDesktop} alt="Rick and Morty Desktop" />
                            <img className="img-mobile" src={RickandMortyMobile} alt="Rick and Morty Mobile" />
                        </div>
                    </a>
                </article>
                <article className="card-8">
                    <a href="https://duckumobile.vercel.app/" className="card-description">
                        <h3>Duck U (App E-commerce)</h3>
                        <div className="image-container">
                            <img className="img-mobile" src={DuckUMobile} alt="Duck U Mobile" />
                            <img className="img-mobile" src={DuckUMobile2} alt="Duck U Mobile 2" />
                        </div>
                    </a>
                </article>
                <article className="card-9">
                    <a href="https://playwiththedom.vercel.app/" className="card-description">
                        <h3>Play with the DOM</h3>
                        <div className="image-container">
                            <img className="img-desktop" src={PlayDesktop} alt="Play with the DOM Desktop" />
                            <img className="img-desktop" src={PlayDesktop2} alt="Play with the DOM Mobile" />
                        </div>
                    </a>
                </article>
            </div>
        </div>
    )
}

