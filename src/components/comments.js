import React from "react";
import "../stylesheets/comments.css";

const Comments = (props) => {
  return (
    <div className="comments-container">
      <h1 className="sub-heading">Comments</h1>
      {props.comments.length > 0 ? (
        props.comments.map((comment) => (
          <div className="comment-container" key={comment._id}>
            <h3 className="comment-author">{comment.author}</h3>
            <h4>{comment.date}</h4>
            <p className="comment-content">{comment.content}</p>
          </div>
        ))
      ) : (
        <div>Nothing here</div>
      )}
    </div>
  );
};

export default Comments;
