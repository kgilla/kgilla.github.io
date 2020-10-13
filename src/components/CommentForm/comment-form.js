import React, { useState } from "react";
import "./comment-form.css";

const CommentForm = (props) => {
  let [author, setAuthor] = useState("");
  let [content, setContent] = useState("");

  const postData = async () => {
    const URL = `https://api-myblog.herokuapp.com/comments/create`;
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author, content, postID: props.postID }),
    });
    const data = await response.json();
    sendNewComment(data.comment);
  };

  const sendNewComment = (comment) => {
    props.handleComment(comment);
  };

  const clearForms = () => {
    setAuthor("");
    setContent("");
  }

  const handleChange = (e) => {
    e.target.name === "author" ? setAuthor(e.target.value) 
    : setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData()
    clearForms()
  };

  return (
    <div className="comment-form-container">
      <form className="form" id="comment-form">
        <h1 className="comment-form-heading">Leave A Comment</h1>
        <div className="form-section">
          <label className="label" htmlFor="author">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label className="label" htmlFor="content">
            Comment
          </label>
          <textarea
            className="form-input"
            name="content"
            value={content}
            onChange={handleChange}
          />
        </div>
        <button className="form-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
