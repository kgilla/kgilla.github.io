import React from "react";
import Project from "../Project";
import "./project-index.css";
import {
  getErDone,
  plantarama,
  mastermind,
  talkinTrash,
  fourCast,
  flyAway,
  battleboats,
  seddit,
  shmurdle,
} from "../../images/screenshots/index";

function ProjectIndex() {
  return (
    <div id="project-section">
      <h1 className="main-heading">My Most Recent Work</h1>
      <div className="project-collection">
        <Project
          title="Shmurdle"
          blurb="Wordle clone made using vanilla Javascript and CSS."
          image={shmurdle}
          altImage="Shmurdle Project Homepage"
          liveLink="https://kgilla.github.io/wordle-clone/"
          codeLink="https://github.com/kgilla/wordle-clone"
        />
        <Project
          title="S/eddit"
          blurb="Robust, full-featured Reddit clone built using MERN stack (MongoDB, Express, React, Node.JS).
          "
          image={seddit}
          altImage="S/eddit Project Homepage"
          liveLink="https://kgilla.github.io/reddit-clone/"
          codeLink="https://github.com/kgilla/reddit-clone"
        />
        <Project
          title="BattleBoats"
          blurb="Battleship game made using React with emphasis on Javascript ES6 Classes and testing with Jest.
          "
          image={battleboats}
          altImage="BattleBoats screenshot of game"
          liveLink="https://kgilla.github.io/battleboats/"
          codeLink="https://github.com/kgilla/battleboats"
        />
        <Project
          title="Get Er Done"
          blurb="Feature-rich to-do-list web app made using strictly vanilla Javascript.
          "
          image={getErDone}
          altImage="Get Er Done Project Homepage"
          liveLink="https://kgilla.github.io/to-do-list/"
          codeLink="https://github.com/kgilla/to-do-list"
        />
        <Project
          title="4-Cast"
          blurb="Responsive weather web application utilizing Open Weather’s API.
          "
          image={fourCast}
          altImage="4-Cast Project Homepage"
          liveLink="https://kgilla.github.io/weather-app/"
          codeLink="https://github.com/kgilla/weather-app"
        />
        <Project
          title="Plantarama"
          blurb="Server-rendered design focused web app built using Express and PUG, styled with Bootstrap.
          "
          image={plantarama}
          altImage="Plantarama Project Homepage"
          liveLink="https://plantarama.herokuapp.com/"
          codeLink="https://github.com/kgilla/plant-app"
        />
        <Project
          title="Talkin' Trash"
          blurb="Authentication-focused web application built using Express and PUG, styled with Bootstrap.
          "
          image={talkinTrash}
          altImage="Talkin' Trash Project Homepage"
          liveLink="https://talkin-trash.herokuapp.com/"
          codeLink="https://github.com/kgilla/talkin-trash"
        />
        <Project
          title="Fly Away"
          blurb="Multi-step form web application built using Ruby On Rails and ERB, styled with Bootstrap.
          "
          image={flyAway}
          altImage="Fly Away project homepage"
          liveLink="https://fly-book.herokuapp.com/"
          codeLink="https://github.com/kgilla/flight-booker"
        />
        <Project
          title="Mastermind"
          blurb="Mastermind game copy built using Ruby, Sinatra, and ERB.
          "
          image={mastermind}
          altImage="Mastermind Project Homepage"
          liveLink="https://mastermind-sinatra.herokuapp.com/"
          codeLink="https://github.com/kgilla/mastermind-webapp"
        />
      </div>
    </div>
  );
}
export default ProjectIndex;
