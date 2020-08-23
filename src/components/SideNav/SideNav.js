import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://drive.google.com/uc?export=view&id=1GR__nDM-vaUIsVxx5XwOxTd8K_JPTi62"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Chetan Gour</h2>
            <p className="subtitle">"A Thinker Before a Coder"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};