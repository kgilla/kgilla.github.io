import React from "react";
import "../stylesheets/skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="main-heading">What I Bring To The Table</h1>
      <div className="skills-container">
        <div className="front-end-skills">
          <h3 className="skills-heading">Front End</h3>
          <p className="skills-paragraph">
            The ability to conceptualize an idea, iterate on it in real time,
            and ultimately see it fully realized into a functional and beautiful
            interface.
          </p>
          <h4 className="skills-sub-heading">Languages & Frameworks</h4>
          <ul className="skills-list">
            <li className="skills-list-item">HTML</li>
            <li className="skills-list-item">CSS</li>
            <li className="skills-list-item">Javascript</li>
            <li className="skills-list-item">React</li>
            <li className="skills-list-item">Bootstrap</li>
            <li className="skills-list-item">Sass</li>
          </ul>
          <h4 className="skills-sub-heading">Currently Learning</h4>
          <ul className="skills-list">
            <li className="skills-list-item">Angular</li>
          </ul>
        </div>
        <div className="back-end-skills">
          <h3 className="skills-heading">Back End</h3>
          <p className="skills-paragraph">
            Solving problems of all sizes, managing and maintaining data, and
            helping the server side functions operate smoothly and more
            effeciently, are just a few of the penis{" "}
          </p>
          <h4 className="skills-sub-heading">Languages & Frameworks</h4>
          <ul className="skills-list">
            <li className="skills-list-item">Node.Js</li>
            <li className="skills-list-item">Express</li>
            <li className="skills-list-item">Ruby</li>
            <li className="skills-list-item">Ruby On Rails</li>
            <li className="skills-list-item">MongoDB</li>
            <li className="skills-list-item">SQL</li>
          </ul>
          <h4 className="skills-sub-heading">Currently Learning</h4>
          <ul className="skills-list">
            <li className="skills-list-item">Django</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
