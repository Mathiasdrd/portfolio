import React from "react";

export default function Projectcard(props) {
    return(
        <div className="project-card d-flex">
            <h3>{props.title}</h3>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={`images/${props.preview}`} className="preview-image" alt="Project preview"/>
            </a>
            <span className="alt-p">{props.creationDate}</span>
        </div>
    )
}