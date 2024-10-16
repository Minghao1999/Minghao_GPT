import NavBar from "../Components/Common/NavBar.jsx";
import project from "../Components/Projects/Project.jsx";
import {useParams} from "react-router-dom";
import INFO from "../Data/userInfor.jsx";
import Footer from "../Components/Common/Footer.jsx";
import "./styles/readProjects.css"
const ReadProjects = () => {
    const {id} = useParams()
    const project = INFO.projects[id]
    return (
        <div className="page-content">
            <NavBar/>

            <div className="content-wrapper">
                <div className="read-projects-container">
                    <div className="read-projects-wrapper">
                        {project ? (
                            <div className="read-projects-body">
                                <div className="read-projects-title">{project.title}</div>
                                <ul>
                                    <p>{project.technology.split('\n').map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}</p>
                                </ul>
                                <a href={project.link} target="_blank">
                                    View Project on GitHub
                                </a>
                            </div>

                        ) : (
                            <p></p>
                        )
                        }
                    </div>
                </div>
                <div className="page-footer">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default ReadProjects