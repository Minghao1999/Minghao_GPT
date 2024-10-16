import INFO from "../../Data/userInfor.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import "./styles/socials.css"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
    return (
        <div className="socials">
            <div className="social">
                <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="social-icon"
                        />
                    </div>
                    <div className="social-text">Follow on GitHub</div>
                </a>
            </div>

            <div className="social">
                <a href={INFO.socials.linkedin} target="_blank">
                    <div className="social-icon">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="social-icon"
                        />
                    </div>
                    <div className="social-text">Follow on LinkedIn</div>
                </a>
            </div>

            <div className="social">
                <a href={INFO.socials.instagram} target="_blank">
                    <div className="social-icon">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="social-icon"
                        />
                    </div>
                    <div className="social-text">Follow on Instagram</div>
                </a>
            </div>

            <div className="email">
                <div className="email-wrapper">
                    <a href={`mailto: ${INFO.socials.email}`} target="_blank">
                        <div className="social-icon">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="social-icon"
                            />
                        </div>
                        <div className="social-text">{INFO.socials.email}</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Socials