import React from "react";
import BlogSideSection from "./blog-side-section";
import "../stylesheets/blog-layout.css";

const BlogLayout = (props) => {
  return (
    <div className="blog-section">
      <div className="title-box">
        <h1 className="main-heading">Hello World To Hired</h1>
        <h2 className="sub-heading">
          A collection of experiences on the road to becoming a front-end
          developer
        </h2>
      </div>
      <div className="blog-main">
        <div className="blog-content">{props.children}</div>
        {/* <BlogSideSection /> */}
      </div>
    </div>
  );
};

export default BlogLayout;
