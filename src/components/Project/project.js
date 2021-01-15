import React from "react";

const Project = (props) => {
  const { image, imageAlt, title, blurb, liveLink, codeLink } = props;
  return (
    <div className="project-container">
      <figure className="project-image">
        <img src={image} alt={imageAlt} className="project-thumb"></img>
        <figcaption>
          <h2 className="project-title">{title}</h2>
          <p className="project-blurb">{blurb}</p>
          <div className="project-button-container">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Website
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Code
            </a>
          </div>
        </figcaption>
        <div className="project-overlay"></div>
      </figure>
    </div>
  );
};

export default Project;
