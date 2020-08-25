import React, { useState } from "react";
import "../stylesheets/comment-form.css";

const CommentForm = (props) => {
  let [author, setAuthor] = useState("");
  let [content, setContent] = useState("");

  const postData = async () => {
    const URL = `http://localhost:5000/api/posts/${props.postId}/comments/create`;
    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author: author, content: content }),
    });
    return response.json();
  };

  const handleChange = (e) => {
    if (e.target.name === "author") {
      setAuthor(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <div className="comment-form-container">
      <form className="comment-form">
        <div className="form-section">
          <label className="comment-label" htmlFor="author">
            Name
          </label>
          <input
            className="comment-input"
            type="text"
            name="author"
            onChange={handleChange}
          />
        </div>
        <div className="form-section">
          <label className="comment-label" htmlFor="content">
            Comment
          </label>
          <textarea
            className="comment-textarea"
            name="content"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
