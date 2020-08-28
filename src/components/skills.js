import React from "react";
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
  Sass,
  NodeDotJs,
  Rubygems,
  Rubyonrails,
  Mongodb,
} from "@styled-icons/simple-icons";
import "../stylesheets/skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="front-end-skills">
          <h3 className="skills-heading">Front-end Developer</h3>
          <p className="skills-paragraph">
            Front-end development is fairly comperable to cooking in more ways
            than one. I truly enjoy the ability to conceptualize an idea,
            iterate on it in real time, and ultimately see it fully realized
            into a functional and beautiful interface.
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
          <h3 className="skills-heading">Back-end Developer</h3>
          <p className="skills-paragraph">
            Applying creativity towards solving complex problems, structuring
            and managing data, and helping the server side functions operate
            more effeciently, are a few of the aspects of back-end development
            that keep me absorbed in my work.
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
      <div className="icon-collection">
        <Html5 className="icon" />
        <Css3 className="icon" />
        <Javascript className="icon" />
        <ReactLogo className="icon" />
        <Sass className="icon" />
        <NodeDotJs className="icon" />
        <Rubygems className="icon" />
        <Rubyonrails className="icon" />
        <Mongodb className="icon" />
      </div>
    </div>
  );
};

export default Skills;
