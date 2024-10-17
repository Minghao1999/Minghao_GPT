import NavBar from "../Components/Common/NavBar.jsx";
import "./styles/mapPage.css"
import Footer from "../Components/Common/Footer.jsx";

const Map_page = () => {
    return (
        <div className="page-content">
            <NavBar/>

            <div className="content-wrapper">
                <div className="projects-container">
                    <div className="title project-title">
                        This is my location.
                    </div>
                    <div style={{width: "100%", height: "500px"}}>
                        <iframe
                            className="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d-121.3121!3d37.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus"
                        ></iframe>
                    </div>
                </div>
                <div className="page-footer">
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Map_page;
