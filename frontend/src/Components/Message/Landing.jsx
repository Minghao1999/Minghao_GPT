import React from 'react';
import './styles/Landing.css'

const Landing = ({onCardClick}) => {
    return (
        <div className="landing-container">
            <div className="landing-content">
            <h1>Welcome to Minghao GPT!</h1>
            <p>You can ask everything you want to know about Minghao.</p>
                <div className="issue">
                    <p>Minghao GPT is working in my local environment</p>
                    <p>Cause the browser is using HTTPS but the server is using HTTP which is the insecure HTTP protocol.</p>
                    <p>So, due to the browser's security mechanism, it blocks this request.</p>
                    <p>I'm trying to configure Flask to support HTTPS.</p>
                </div>
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
