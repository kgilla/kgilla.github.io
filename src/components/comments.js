import React from "react";
import "../stylesheets/comments.css";

const Comments = (props) => {
  return (
    <div className="comments-container">
      <h1>Comments</h1>
      {props.comments.length > 0 ? (
        props.comments.map((comment) => (
          <div key={comment._id}>
            <h3>{comment.author}</h3>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <div>Nothing here</div>
      )}
    </div>
  );
};

export default Comments;
