import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Messages_page from "./Pages/Messages_page.jsx";
import Home_page from "./Pages/Home_page.jsx";
import About_page from "./Pages/About_page.jsx";
import Projects_page from "./Pages/Projects_page.jsx";

import "./app.css"
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home_page />} />
                    <Route path="/message" element={<Messages_page />} />
                    <Route path="/about" element={<About_page />} />
                    <Route path="/projects" element={<Projects_page />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
