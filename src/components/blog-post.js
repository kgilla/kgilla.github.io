import React, { useState, useEffect } from "react";
import moment from "moment";
import BlogLayout from "./blog-layout";
import CommentForm from "./comment-form";
import Comments from "./comments";
import "../stylesheets/blog-post.css";

const BlogPost = (props) => {
  let [post, setPost] = useState({});
  let [author, setAuthor] = useState({});
  let [comments, setComments] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const URL = `http://localhost:5000/api/posts/${props.postId}`;
      const response = await fetch(URL);
      const data = await response.json();
      setPost(data.post);
      setAuthor(data.author);
      setComments(data.post.comments);
      setIsLoading(false);
    };
    fetchData();
  }, [props.postId]);

  const handleNewComment = (comment) => {
    setComments((comments) => [...comments, comment]);
  };

  return (
    <BlogLayout>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="blog-post-container">
            <article className="blog-post">
              <header className="blog-post-header">
                <h1 className="blog-post-title">{post.title}</h1>
                <h2 className="blog-post-author">By {author.fullname}</h2>
                <div className="blog-post-details-box">
                  <h4 className="blog-detail-date">
                    Posted on {moment(post.date).format("LL")}
                  </h4>
                  <h4 className="blog-detail-comment-count">
                    {comments ? comments.length : "0"} Comments
                  </h4>
                  <h4 className="blog-detail-catagory">Catagory</h4>
                </div>
              </header>
              <main className="blog-post-content-container">
                <p className="blog-post-content">{post.content}</p>
              </main>
              <footer></footer>
            </article>
            <div className="comments-section">
              <Comments comments={comments} />
              <CommentForm
                postId={props.postId}
                handleNewComment={handleNewComment}
              />
            </div>
          </div>
        )}
      </div>
    </BlogLayout>
  );
};

export default BlogPost;
