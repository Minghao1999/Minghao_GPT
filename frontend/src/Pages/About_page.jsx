import NavBar from "../Components/Common/NavBar.jsx";
import "./styles/about.css"

import INFO from "../Data/userInfor.jsx"
import Socials from "../Components/About/Socials.jsx";
import Footer from "../Components/Common/Footer.jsx";
import {useEffect} from "react";

const About_page = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return (
        <div className="page-content">
            <NavBar active="about"/>

            <div className="content-wrapper">
                <div className="about-container">
                    <div className="about-main">
                        <div className="about-right-side">
                            <div className="title about-title">
                                {INFO.about.title}
                            </div>

                            <div className="subtitle about-subtitle">
                                {INFO.about.description}
                            </div>
                        </div>

                        <div className="about-left-side">
                            <div className="about-image-container">
                                <div className="about-image-wrapper">
                                    <img
                                        src="./assets/icon.png"
                                        alt="about"
                                        className="about-image"
                                    />
                                </div>
                            </div>
                            <div className="about-socials">
                                <Socials/>
                            </div>
                        </div>
                    </div>
                    <div className="about-socials-mobile">
                        <Socials/>
                    </div>
                </div>
                <div className="page-footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default About_page