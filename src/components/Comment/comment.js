import React from "react";
import moment from "moment";

import "./comment.css";

const Comment = (props) => {
  return (
    <div className="comment-container">
      <header class="comment-header">
        <h3 className="comment-author">{props.comment.author}</h3>
        <h4 class="comment-date">
          Posted on {moment(props.comment.date).format("LL")}
        </h4>
      </header>

      <p className="comment-content">{props.comment.content}</p>
    </div>
  );
};

export default Comment;
