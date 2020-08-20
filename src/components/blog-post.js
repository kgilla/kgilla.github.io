import React, { useState, useEffect } from "react";

const BlogPost = (props) => {
  let [post, setPost] = useState({});
  let [author, setAuthor] = useState({});
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const URL = `http://localhost:5000/api/posts/${props.postId}`;
      const response = await fetch(URL);
      const data = await response.json();
      setPost(data.post);
      setAuthor(data.author);
      setIsLoading(false);
    };
    fetchData();
  }, [props.postId]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <h2>{author.fullname}</h2>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
