import React, { useState } from "react";
import Comment from "../Comment";
import CommentForm from "../CommentForm";
import "./comment-index.css";

const Comments = (props) => {
  let [comments, setComments] = useState(props.comments);

  const handleNewComment = (newComment) => {
    if (comments.length < 1) {
      setComments([newComment]);
    } else {
      setComments((comments) => [...comments, newComment]);
    }
  };

  return (
    <div className="comment-index-container">
      <h1 className="comment-index-heading">
        Comments ({comments ? comments.length : "0"})
      </h1>
      {comments.length > 0 ? (
        <div id="comment-index">
          {comments.map((comment) => (
            <Comment comment={comment} key={comment._id} />
          ))}
        </div>
      ) : (
        <div>No comments yet</div>
      )}
      <CommentForm postID={props.postID} handleComment={handleNewComment} />
    </div>
  );
};

export default Comments;
