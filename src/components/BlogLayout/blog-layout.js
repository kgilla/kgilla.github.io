import React from "react";
import "./blog-layout.css";
import { Link } from "@reach/router";
import BlogSideSection from "../BlogSideSection";
import Footer from "../Footer";

const BlogLayout = (props) => {
  return (
    <div className="blog-section">
      <Link to="/blog" className="link-banner">
        <div className="title-box">
          <div className="title-box-text">
            <h1 className="main-heading"> Hello World To Hired</h1>

            <h2 className="sub-heading">
              A collection of experiences on the road to becoming a full-stack
              developer
            </h2>
          </div>
        </div>
      </Link>
      <div className="blog-main">
        <div className="blog-content">{props.children}</div>
        <BlogSideSection />
      </div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
