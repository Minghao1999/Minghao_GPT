import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Messages_page from "./Pages/Messages_page.jsx";
import Home_page from "./Pages/Home_page.jsx";
import About_page from "./Pages/About_page.jsx";
import Projects_page from "./Pages/Projects_page.jsx";

import "./app.css"
import ReadProjects from "./Pages/ReadProjects.jsx";
import Map_page from "./Pages/Map_page.jsx";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home_page />} />
                    <Route path="/message" element={<Messages_page />} />
                    <Route path="/about" element={<About_page />} />
                    <Route path="/projects" element={<Projects_page />} />
                    <Route path="/map" element={<Map_page />} />
                    <Route path="/read-projects/:id" element={<ReadProjects/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
