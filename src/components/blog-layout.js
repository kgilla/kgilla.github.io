import React from "react";
import "../stylesheets/blog-layout.css";
import image from "../images/cartoon-coder.jpg";

const BlogLayout = (props) => {
  return (
    <div className="blog-section">
      <div className="blog-main">
        <div className="blog-side-section">
          <div className="side-bio-section">
            <h2 className="side-bio-heading">About Me</h2>
            <img
              className="side-bio-image"
              src={image}
              alt="cartoon of coder"
            ></img>
            <p className="side-bio-content">
              Hey there my name is Kenneth and I am an aspiring front-end
              developer. Aside from coding, I enjoy cooking and all things food,
              playing guitar, indoor gardening, cycling, and playing video
              games.
            </p>
          </div>
          <div className="side-links-section">Links</div>
          <div className="side-categories-section"> categories</div>
        </div>
        <div className="blog-content">
          <div className="title-box">
            <h1 className="main-heading">Hello World To Hired</h1>
            <h2 className="sub-heading">
              A collection of experiences on the road to becoming a front-end
              developer
            </h2>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
