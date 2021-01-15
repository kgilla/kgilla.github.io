import React from "react";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import "./blog-card.css";

function BlogCard(props) {
  return (
    <div className="blog-card">
      <div
        className="blog-card-image"
        style={{ backgroundImage: `url(${props.post.blurbImage})` }}
      ></div>

      <div className="blog-card-main">
        <header className="blog-card-header">
          <h2 className="blog-card-title">{props.post.title}</h2>
          <h4 className="blog-detail-date">
            {moment(props.post.date).format("LL")}
          </h4>
        </header>

        <main className="blog-card-content">
          {ReactHtmlParser(props.post.blurb)}
        </main>
      </div>
      <Link className="blog-card-link" to={`/blog/${props.post._id}`} />
    </div>
  );
}

export default BlogCard;
