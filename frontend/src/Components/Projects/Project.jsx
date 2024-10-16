import {Link} from "react-router-dom";
import "./styles/project.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
    const {id, logo, title, description, linkText, link} = props
    const isChatGPTLogo = logo === "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg";


    return (
        <div className="project">
            <Link to={`/read-projects/${id}`}>
                <div className="project-container">
                    <div className={`project-logo ${isChatGPTLogo ? 'chatgpt-logo' : ''}`}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="project-title">{title}</div>
                    <div className="project-description">{description}</div>
                    <div className="project-link">
                        <div className="project-link-icon">
                            <FontAwesomeIcon icon={faLink}/>
                        </div>
                        <div className="project-link-text">{linkText}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Project