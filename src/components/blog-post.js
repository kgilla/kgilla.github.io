import React, { useState, useEffect } from "react";
import BlogLayout from "./blog-layout";

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
      setComments(data.comments);
      setIsLoading(false);
    };
    fetchData();
  }, [props.postId]);

  return (
    <BlogLayout>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <article>
            <header>
              <h1>{post.title}</h1>
              <h2>By {author.fullname}</h2>
              <div className="blog-card-details-box">
                <h4 className="blog-detail-date">Posted on {post.date}</h4>
                <h4 className="blog-detail-comment-count">0 Comments</h4>
                <h4 className="blog-detail-catagory">Catagory</h4>
              </div>
            </header>
            <main>
              <p>{post.content}</p>
            </main>
            <footer>
              {comments ? (
                comments.map((comment) => <div>comment</div>)
              ) : (
                <div>Nothing here</div>
              )}
            </footer>
          </article>
        )}
      </div>
    </BlogLayout>
  );
};

export default BlogPost;
