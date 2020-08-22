import React from "react";
import { Link } from "@reach/router";
import Projects from "./projects";
import Skills from "./skills";
import "../stylesheets/home.css";
import image from "../images/cartoon-coder.jpg";

function Home() {
  return (
    <div>
      <div className="main">
        <h1 className="main-heading">Front End Developer, Handsome, Sexy</h1>
        <h2 className="sub-heading">
          I Design and code beautifly simple things and love what I do.
        </h2>
        <div className="image-box">
          <img
            src={image}
            alt="Man typing on computer with a hot coffee and cat beside him"
          />
        </div>
        <h2 className="sub-heading">
          Just show me your work already!{" "}
          <Link className="link-button" to="/projects">
            My Work
          </Link>
        </h2>
      </div>
      <div className="colored-box">
        <h2 className="sub-heading">
          Hey there, I'm Kenneth. Nice to meet you!
        </h2>
        <p className="white-paragraph">
          Pivoting from a longtime career as chef, I hope to apply my love of
          creativity, dedication towards my work, and passion to continue
          learning to your projects. I'm quietly confident, naturally curious,
          and perpetually working on my coding chops, one problem at a time.
        </p>
      </div>
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
