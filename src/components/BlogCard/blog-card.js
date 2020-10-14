import React from "react";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import "./blog-card.css";

function BlogCard(props) {
  return (
    <Link to={`/blog/${props.post._id}`}>

    <div className="blog-card">
      <div className="blog-card-image-box">
        <img
          className="blog-card-image"
          src={props.post.blurbImage}
          alt={props.post.blurbImageAlt}
        ></img>
      </div>

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
    </div>
    </Link>

  );
}

export default BlogCard;
