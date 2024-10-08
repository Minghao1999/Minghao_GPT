import React from 'react';
import '../UI/Landing.css'

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-content">
            <h1>Welcome to Minghao GPT!</h1>
            <p>You can ask everything you want to know about Minghao.</p>
            </div>

            <div className="card-container">
                <div className="card">Minghao's Resume</div>
                <div className="card">Card 2</div>
                <div className="card">Card 3</div>
                <div className="card">Card 4</div>
            </div>
        </div>
    );
};

export default Landing;
