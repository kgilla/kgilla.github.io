import React from "react";
import { Link } from "@reach/router";
import moment from "moment";
import "../stylesheets/blog-card.css";

function BlogCard(props) {
  return (
    <div className="blog-card">
      <div className="blog-card-image-box"></div>
      <div className="blog-card-main">
        <h3 className="blog-card-title">{props.post.title}</h3>
        <div className="blog-card-details-box">
          <h4 className="blog-detail-date">
            Posted on {moment(props.post.date).format("LL")}
          </h4>
          <h4 className="blog-detail-comment-count">
            {props.comments ? props.comments.length : "0"} Comments
          </h4>
          <h4 className="blog-detail-catagory">Catagory</h4>
        </div>
        <p className="blog-card-content">{props.post.content}</p>
        <Link to={`/blog/${props.post._id}`}>Read</Link>
      </div>
    </div>
  );
}

export default BlogCard;
