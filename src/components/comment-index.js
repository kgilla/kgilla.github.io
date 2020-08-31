import React from "react";
import Comment from "./comment";
import "../stylesheets/comment-index.css";

const Comments = (props) => {
  return (
    <div className="comment-index-container">
      <h1 className="comment-index-heading">
        Comments ({props.comments ? props.comments.length : "0"})
      </h1>
      {props.comments.length > 0 ? (
        props.comments.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))
      ) : (
        <div>Nothing here</div>
      )}
    </div>
  );
};

export default Comments;
