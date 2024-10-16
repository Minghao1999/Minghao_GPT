import "./styles/footer.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-links">
                <ul className="footer-nav-link-list">
                    <li className="footer-nav-link-item">
                        <Link to="">Terms</Link>
                    </li>
                    <li className="footer-nav-link-item">
                        <Link to="">Privacy</Link>
                    </li>
                    <li className="footer-nav-link-item">
                        <Link to="">Security</Link>
                    </li>
                    <li className="footer-nav-link-item">
                        <Link to="">Status</Link>
                    </li>
                    <li className="footer-nav-link-item">
                        <Link to="">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="footer-credits">
                <div className="footer-credits-text">
                        © 2024 Minghao GPT. All Rights Reserved
                    </div>
                </div>

            </div>

    )
}

export default Footer