import React from "react";
import moment from "moment";

import "./comment.css";

const Comment = (props) => {
  return (
    <div className="comment-container">
      <header className="comment-header">
        <h3 className="comment-author">{props.comment.author}</h3>
      </header>
      <main className="comment-main">
        <p className="comment-content">{props.comment.content}</p>
      </main>

      <footer className="comment-footer">
        <h4 className="comment-date">
          Posted on {moment(props.comment.date).format("LL")}
        </h4>
      </footer>
    </div>
  );
};

export default Comment;
