import React from "react";
import { Link } from "@reach/router";
import moment from "moment";
import "../stylesheets/blog-card.css";

function BlogCard(props) {
  return (
    <div className="blog-card">
      <div className="blog-card-image-box"></div>
      <div className="blog-card-main">
        <header className="blog-card-header">
          <h3 className="blog-card-title">{props.post.title}</h3>
          <div className="blog-card-details-box">
            <h4 className="blog-detail-date">
              Posted on {moment(props.post.date).format("LL")}
            </h4>
            <h4 className="blog-detail-comment-count">
              {props.comments ? props.comments.length : "0"} Comments
            </h4>
          </div>
        </header>
        <main>
          <p className="blog-card-content">{props.post.content}</p>
        </main>
        <footer className="blog-card-footer">
          <Link to={`/blog/${props.post._id}`} className="link">
            Read More
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default BlogCard;
