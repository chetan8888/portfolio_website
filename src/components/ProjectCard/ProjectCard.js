import React from 'react'

import './project-card.css';

export const ProjectCard = ({ project }) => {
    let link
    if (project.link === undefined) {
        link = ""
    }
    else {
        link = <p><b>Link:</b> <a href={project.link}>{project.link}</a> </p>
    }
    return (
        <div className="project-card">
            <p><b>Name:</b> {project.name}</p>
            <p><b>Description:</b> {project.description}</p>
            {link}
        </div>
    )
}