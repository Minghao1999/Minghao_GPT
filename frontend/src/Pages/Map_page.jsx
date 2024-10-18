import NavBar from "../Components/Common/NavBar.jsx";
import "./styles/mapPage.css"
import Footer from "../Components/Common/Footer.jsx";
import {useEffect, useState} from "react";

const Map_page = () => {
    const [timeZones, setTimeZones] = useState({
        est: "",
        cst: "",
        pst: ""
    })

    useEffect(() => {
        const updateTimes = () =>{
            const now = new Date()
            const options = {year:'numeric', month:'long', day:'numeric', hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false}
            const pst = now.toLocaleTimeString("en-US", {...options, timeZone: "America/Los_Angeles"})
            const cst = now.toLocaleTimeString("en-US", {...options, timeZone: "America/Chicago"})
            const est = now.toLocaleTimeString("en-US", {...options, timeZone: "America/New_York"})
            setTimeZones({pst, cst, est})
        }
        updateTimes()
        const interval = setInterval(updateTimes, 1000)

        return() => clearInterval(interval)
    }, []);

    return (
        <div className="page-content">
            <NavBar active="map"/>

            <div className="content-wrapper">
                <div className="projects-container">
                    <div className="map-main">
                        <div className="map-title">
                            This is my location.
                        </div>
                        <div className="map-section">
                            <div className="map-container">
                                <iframe
                                    className="map"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d-121.3121!3d37.9806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                        <div className="info-section">
                            <div className="time-container">
                                <h4>US Time Zones</h4>
                                <ul className="time-list">
                                    <li><strong>Pacific Time (PST):</strong> {timeZones.pst}</li>
                                    <li><strong>Central Time (CST):</strong> {timeZones.cst}</li>
                                    <li><strong>Eastern Time (EST):</strong> {timeZones.est}</li>
                                </ul>
                            </div>
                            <div className="flight-times-container">
                                <h3>Flight Times to Major US Cities</h3>
                                <ul className="flight-times-list">
                                    <li><i className="fas fa-microchip"></i> <strong>San Jose (SJC):</strong> ~1 hour
                                    </li>
                                    <li><i className="fas fa-film"></i> <strong>Los Angeles (LAX):</strong> ~1 hour 10
                                        minutes
                                    </li>
                                    <li><i className="fas fa-plane"></i> <strong>San Francisco (SFO):</strong> ~50
                                        minutes
                                    </li>
                                    <li><i className="fas fa-city"></i> <strong>New York City (JFK):</strong> ~5 hours
                                        20 minutes
                                    </li>
                                    <li><i className="fas fa-building"></i> <strong>Chicago (ORD):</strong> ~4 hours
                                    </li>
                                    <li><i className="fas fa-rocket"></i> <strong>Houston (IAH):</strong> ~4 hours 10
                                        minutes
                                    </li>
                                    <li><i className="fas fa-umbrella-beach"></i> <strong>Miami (MIA):</strong> ~5 hours
                                        30 minutes
                                    </li>
                                    <li><i className="fas fa-guitar"></i> <strong>Austin (AUS):</strong> ~4 hours</li>
                                </ul>
                            </div>
                        </div>
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
