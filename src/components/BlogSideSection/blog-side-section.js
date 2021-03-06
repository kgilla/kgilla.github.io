import React from "react";
import "./blog-side-section.css";
import image from "../../images/me.jpg";

const BlogSideSection = () => {
  return (
    <div className="blog-side-section">
      <div className="side-bio-section">
        <h2 className="sub-heading">About Me</h2>
        <div className="side-blog-image-container">
          <img className="side-bio-image" src={image} alt="cartoon of coder" />
        </div>
        <p className="side-bio-content">
          Hey there, my name is Kenneth Gilmore and I am an aspiring full-stack
          developer. Aside from coding, I enjoy cooking and all things food,
          playing guitar, indoor gardening, cycling, and playing video games.
        </p>
      </div>
    </div>
  );
};

export default BlogSideSection;
