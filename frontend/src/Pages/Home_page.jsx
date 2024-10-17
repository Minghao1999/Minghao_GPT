import NavBar from "../Components/Common/NavBar.jsx";
import Footer from "../Components/Common/Footer.jsx"
import INFO from "../Data/userInfor.jsx";

import "./styles/homePage.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";
import AllProjects from "../Components/Projects/AllProjects.jsx";
import Works from "../Components/HomePage/Works.jsx";
import Educations from "../Components/HomePage/Educations.jsx";
import homepageImage from '../../assets/homepage.jpg'
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
                                        src={homepageImage}
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
                        <h1>Tech Stack</h1>
                        {
                            INFO.stack.logo.map((item, index)=>(
                                <img key={index} src={item} alt={`logo-${index}`} className="homepage-projects-logo"/>
                            ))
                        }
                    </div>

                    <div className="homepage-projects">
                        <h1>Projects</h1>
                        <AllProjects/>
                    </div>

                    <div className="homepage-after-title">
                        <div className="homepage-articles">
                            <div className="homepage-title2">Work Experiences</div>
                            {INFO.works.map((work, index) => (
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

                    <div className="homepage-after-title">
                        <div className="homepage-articles">
                            <div className="homepage-title2">Education</div>
                            <Educations/>
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