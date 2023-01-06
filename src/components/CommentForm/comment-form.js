import React, { useState } from "react";
import { BASE_URL } from "../../const";
import "./comment-form.css";

const CommentForm = (props) => {
  let [author, setAuthor] = useState("");
  let [authorError, setAuthorError] = useState("");
  let [content, setContent] = useState("");
  let [contentError, setContentError] = useState("");
  let [success, setSuccess] = useState("");

  const postData = async (comment) => {
    const URL = `${BASE_URL}/comments/create`;
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    const data = await response.json();
    response.status === 200 ? sendNewComment(data.comment) : handleError(data);
  };

  const handleError = (data) => {
    console.log(data);
  };

  const sendNewComment = (comment) => {
    props.handleComment(comment);
    setSuccess("Comment created successfully!");
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  const clearForm = () => {
    setAuthor("");
    setContent("");
  };

  const clearError = (name) => {
    name === "author" ? setAuthorError("") : setContentError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    clearError(name);
    name === "author" ? setAuthor(value) : setContent(value);
  };

  const validate = (comment) => {
    let validated = true;
    if (comment.author.length < 1) {
      setAuthorError("Please enter a name");
      validated = false;
    }
    if (comment.content.length < 1) {
      setContentError("Please enter a comment");
      validated = false;
    }
    return validated;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comment = { author, content, postID: props.postID };
    let validated = validate(comment);
    if (validated) {
      postData(comment);
      clearForm();
    }
  };

  return (
    <div className="comment-form-container">
      <form className="form" id="comment-form" onSubmit={handleSubmit}>
        <h1 className="comment-form-heading">Leave A Comment</h1>
        {success ? <p className="success">{success}</p> : null}
        <div className="form-section">
          <label className="label" htmlFor="author">
            Name
          </label>
          <input
            className={authorError ? "form-input-error" : "form-input"}
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
          />
          {authorError ? <p className="error">{authorError}</p> : null}
        </div>
        <div className="form-section">
          <label className="label" htmlFor="content">
            Comment
          </label>
          <textarea
            className={contentError ? "form-input-error" : "form-input"}
            name="content"
            value={content}
            onChange={handleChange}
          />
          {contentError ? <p className="error">{contentError}</p> : null}
        </div>
        <button className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
