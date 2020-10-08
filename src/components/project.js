import React from "react";

const Project = (props) => {
  return (
    <div className="project-container">
      <figure className="project-image">
        <img
          src={props.image}
          alt={props.imageAlt}
          className="project-thumb"
        ></img>
        <figcaption>
          <h2 className="project-title">{props.title}</h2>
          <a href={props.liveLink} target="_blank" className="project-link">
            View Website
          </a>
          <a href={props.codeLink} target="_blank" className="project-link">
            View Code
          </a>
        </figcaption>
        <div className="project-overlay"></div>
      </figure>
    </div>
  );
};

export default Project;
