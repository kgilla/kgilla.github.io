import React from "react";
import "../stylesheets/blog-side-section.css";
import image from "../images/cartoon-coder.jpg";

const BlogSideSection = () => {
  return (
    <div className="blog-side-section">
      <div className="side-bio-section">
        <h2 className="sub-heading">About Me</h2>
        <img
          className="side-bio-image"
          src={image}
          alt="cartoon of coder"
        ></img>
        <p className="side-bio-content">
          Hey there my name is Kenneth and I am an aspiring front-end developer.
          Aside from coding, I enjoy cooking and all things food, playing
          guitar, indoor gardening, cycling, and playing video games.
        </p>
      </div>
    </div>
  );
};

export default BlogSideSection;
