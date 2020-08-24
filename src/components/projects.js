import React from "react";
import Project from "./project";
import "../stylesheets/projects.css";
import image from "../images/lion.jpg";

function Projects() {
  return (
    <div id="project-section">
      <h1 className="main-heading">My Most Recent Work</h1>
      <div className="project-collection">
        <Project image={image} altImage="lion" />
        <Project image={image} altImage="lion" />
        <Project image={image} altImage="lion" />
        <Project image={image} altImage="lion" />
        <Project image={image} altImage="lion" />
        <Project image={image} altImage="lion" />
      </div>
    </div>
  );
}
export default Projects;
