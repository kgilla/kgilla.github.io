import React, { useState } from "react";
import "../stylesheets/comment-form.css";

const CommentForm = (props) => {
  let [author, setAuthor] = useState("");
  let [content, setContent] = useState("");

  const postData = async () => {
    const URL = `https://api-myblog.herokuapp.com/posts/${props.postId}/comments/create`;
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

  //passes new comment up to blog-post
  const handleSubmit = async (e) => {
    e.preventDefault();
    postData().then((response) => {
      props.handleNewComment(response.comment);
      setAuthor("");
      setContent("");
    });
  };

  return (
    <div className="comment-form-container">
      <form className="form">
        <h1 class="comment-form-heading">Leave A Comment</h1>
        <div className="form-section">
          <label className="label" htmlFor="author">
            Name
          </label>
          <input
            className="text-input"
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
            className="textarea"
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