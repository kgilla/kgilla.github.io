import React from "react";
import { Link } from "@reach/router";
import "../stylesheets/blog.css";

const Blog = (props) => {
  return (
    <div className="main">
      <div className="title-box">
        <h1 className="main-heading">A Long Strange Journey</h1>
        <h2 className="sub-heading">
          "Because my life is dope and I do dope things" Kanye West
        </h2>
      </div>
      <div className="blog-box">
        {props.isLoading ? (
          <p>Loading...</p>
        ) : (
          props.data.map((post) => (
            <div className="blog-card" key={post._id}>
              <h3>{post.title}</h3>
              <h4>Posted on {post.date}</h4>
              <p>{post.content}</p>
              <Link to={`/blog/${post._id}`}>click me</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
