import React, { useState } from "react";
import "../stylesheets/blog-side-section.css";
import image from "../images/cartoon-coder.jpg";

const BlogSideSection = () => {
  let [isOpen, setIsOpen] = useState("open");

  const handleClick = () => {
    isOpen === "open" ? setIsOpen("closed") : setIsOpen("open");
  };

  return (
    <div>
      <button className="sidebar-collapse-button" onClick={handleClick}>
        -
      </button>
      {isOpen === "open" ? (
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
      ) : null}
    </div>
  );
};

export default BlogSideSection;
