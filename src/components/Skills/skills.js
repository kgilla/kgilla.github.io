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
  Tailwindcss,
  Graphql
} from "@styled-icons/simple-icons";
import "./skills.css";

const Skills = () => {

  const titles = {
    frontend: "Front-end Developer",
    backend: "Back-end Developer",
    skills: "Languages and Frameworks"
  }

  const frontendPara = "Front-end development is fairly comperable to cooking in more ways than one. I truly enjoy the ability to conceptualize an idea, iterate on it in real time, and ultimately see it fully realized into a functional and beautiful interface."

  const backendPara = "Applying creativity towards solving complex problems, structuring and managing data, and helping the server side functions operate more effeciently, are a few of the aspects of back-end development that keep me absorbed in my work."

  const frontendSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Bootstrap",
    "Tailwind",
    "Sass"
  ];

  const backendSkills = [
    "Node",
    "Express",
    "Ruby",
    "Ruby on Rails",
    "MongoDB",
    "SQL",
    "GraphQL"
  ];



  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="front-end-skills">
          <h3 className="skills-heading">{titles.frontend}</h3>
          <p className="skills-paragraph">{frontendPara}</p>
          <h4 className="skills-sub-heading">{titles.skills}</h4>
          <ul className="skills-list">
            {frontendSkills.map(skill => 
            <li className="skills-list-item" key={skill}>{skill}</li>
            )}
          </ul>
        </div>
        <div className="back-end-skills">
          <h3 className="skills-heading">{titles.backend}</h3>
          <p className="skills-paragraph">{backendPara}</p>
          <h4 className="skills-sub-heading">{titles.skills}</h4>
          <ul className="skills-list">
            {backendSkills.map(skill => 
            <li className="skills-list-item" key={skill}>{skill}</li>
            )}
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
        <Tailwindcss className="icon" />
        <Graphql className="icon" />
      </div>
    </div>
  );
};

export default Skills;
