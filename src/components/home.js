import React from "react";
import Skills from "./skills";
import Footer from "./footer";
import ProjectIndex from "./project-index";
import "../stylesheets/home.css";
import image from "../images/cartoon-coder.jpg";

function Home() {
  return (
    <div>
      <div className="main-hero">
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
          <a className="link-button" href="#project-section">
            My Work
          </a>
        </h2>
      </div>
      <div className="colored-box">
        <div className="colored-box-text-box">
          <h2 className="white-sub-heading">
            Hey there, I'm Kenneth. Nice to meet you!
          </h2>
          <p className="white-paragraph">
            Pivoting from a longtime career as chef, I hope to apply my love of
            creativity, dedication towards my work, and passion to continue
            learning to your projects. I'm quietly confident, naturally curious,
            and perpetually working on my coding chops, one problem at a time.
          </p>
        </div>
      </div>
      <Skills />
      <ProjectIndex />
      <Footer />
    </div>
  );
}

export default Home;
