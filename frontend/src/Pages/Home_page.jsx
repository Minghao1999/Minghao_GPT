import NavBar from "../Components/Common/NavBar.jsx";
import Footer from "../Components/Common/Footer.jsx"
import INFO from "../Data/userInfor.jsx";

import "./styles/homePage.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";
import AllProjects from "../Components/Projects/AllProjects.jsx";
import Works from "../Components/HomePage/Works.jsx";

const Home_page = () => {
    return (
        <div className="page-content">
            <NavBar active="home"/>

            <div className="content-wrapper">
                <div className="homepage-container">
                    <div className="homepage-first-area">
                        <div className="homepage-first-area-left-side">
                            <div className="title homepage-title">
                                {INFO.home.title}
                            </div>

                            <div className="subtitle homepage-subtitle">
                                {INFO.home.description}
                            </div>
                        </div>

                        <div className="homepage-first-area-right-side">
                            <div className="homepage-image-container">
                                <div className="homepage-image-wrapper">
                                    <img
                                        src="/assets/homepage.jpg"
                                        alt="about"
                                        className="homepage-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="homepage-socials">
                        <a
                            href={INFO.socials.github}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="homepage-social-icon"
                            />
                        </a>
                        <a
                            href={INFO.socials.linkedin}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="homepage-social-icon"
                            />
                        </a>
                        <a
                            href={INFO.socials.instagram}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="homepage-social-icon"
                            />
                        </a>
                        <a
                            href={`mailto: ${INFO.socials.github}`}
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faMailBulk}
                                className="homepage-social-icon"
                            />
                        </a>
                    </div>

                    <div className="homepage-projects">
                        <AllProjects/>
                    </div>

                    <div className="homepage-after-title">
                        <div className="homepage-articles">
                            {INFO.works.map((work, index)=>(
                                <div
                                    className="homepage-article"
                                    key={index.toString()}
                                >
                                    <Works
                                        key={index.toString()}
                                        name={work.name}
                                        date={work.date}
                                        title={work.title}
                                        description={work.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_page