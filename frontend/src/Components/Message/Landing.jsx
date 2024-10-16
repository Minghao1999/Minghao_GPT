import React from 'react';
import './styles/Landing.css'

const Landing = ({onCardClick}) => {
    return (
        <div className="landing-container">
            <div className="landing-content">
            <h1>Welcome to Minghao GPT!</h1>
            <p>You can ask everything you want to know about Minghao.</p>
            </div>

            <div className="card-container">
                <div className="card" onClick={()=>onCardClick('Tell me about Minghao\'s education.')}>Education</div>
                <div className="card" onClick={()=>onCardClick('Tell me about Minghao\'s work experience.')}>Work Experience</div>
                <div className="card" onClick={()=>onCardClick('Tell me about Minghao\'s professional skills.')}>Professional skills</div>
                <div className="card" onClick={()=>onCardClick('Tell me about Minghao\'s career planning.')}>Career Planning</div>
            </div>
        </div>
    );
};

export default Landing;
