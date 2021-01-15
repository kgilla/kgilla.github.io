import React from "react";
import Skills from "../Skills";
import ProjectIndex from "../ProjectIndex";
import "./home.css";
import image from "../../images/cartoon-coder.jpg";

function Home() {
  return (
    <div>
      <div className="main-hero">
        <h1 className="main-heading">Full Stack Developer, UI/UX Designer</h1>
        <h2 className="sub-heading">
          I create and code{" "}
          <span className="sub-heading-marker">beautifully simple things</span>
          and love what I do.
        </h2>
        <div className="image-box">
          <img
            src={image}
            alt="Man typing on computer with a hot coffee and cat beside him"
          />
        </div>
      </div>
      <div className="colored-box">
        <div className="colored-box-text-box">
          <h2 className="white-sub-heading">
            Hey there, I'm Kenneth. Thanks for stopping by!
          </h2>
          <p className="white-paragraph">
            I am a self-taught developer pivoting from a previous career as a
            chef. My aim is to apply my passion for creativity, keen attention
            to detail, and hunger to learn more to help create new and exciting
            projects.
          </p>
        </div>
      </div>
      <Skills />
      <ProjectIndex />
    </div>
  );
}

export default Home;
