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
          <button className="project-link">View Website</button>
          <button className="project-link">View Code</button>
        </figcaption>
        <div className="project-overlay"></div>
      </figure>
    </div>
  );
};

export default Project;
