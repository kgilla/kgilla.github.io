import React from "react";
import Project from "./project";
import "../stylesheets/project-index.css";
import {
  getErDone,
  plantarama,
  mastermind,
  talkinTrash,
  fourCast,
} from "../images/screenshots/index";

function ProjectIndex() {
  return (
    <div id="project-section">
      <h1 className="main-heading">My Most Recent Work</h1>
      <div className="project-collection">
        <Project
          title="Get Er Done"
          image={getErDone}
          altImage="Get Er Done Project Homepage"
          liveLink="https://kgilla.github.io/to-do-list/"
          codeLink="https://github.com/kgilla/to-do-list"
        />
        <Project
          title="4-Cast"
          image={fourCast}
          altImage="4-Cast Project Homepage"
          liveLink="https://kgilla.github.io/weather-app/"
          codeLink="https://github.com/kgilla/weather-app"
        />
        <Project
          title="Plantarama"
          image={plantarama}
          altImage="Plantarama Project Homepage"
          liveLink="https://plantarama.herokuapp.com/"
          codeLink="https://github.com/kgilla/plant-app"
        />
        <Project
          title="Talkin' Trash"
          image={talkinTrash}
          altImage="Talkin' Trash Project Homepage"
          liveLink="https://talkin-trash.herokuapp.com/"
          codeLink="https://github.com/kgilla/talkin-trash"
        />
        <Project
          title="Mastermind"
          image={mastermind}
          altImage="Mastermind Project Homepage"
          liveLink="https://mastermind-sinatra.herokuapp.com/"
          codeLink="https://github.com/kgilla/mastermind-webapp"
        />
        {/* <Project image={image} altImage="lion" /> */}
      </div>
    </div>
  );
}
export default ProjectIndex;