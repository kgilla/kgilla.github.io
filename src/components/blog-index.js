import React, { useState, useEffect } from "react";
import BlogCard from "./blog-card";
import BlogLayout from "./blog-layout";

const BlogIndex = (props) => {
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const URL = "http://localhost:5000/api/posts/";
      const response = await fetch(URL);
      const data = await response.json();
      setData(data.posts);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <BlogLayout>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Blog Posts</h2>
          {data.map((post) => (
            <BlogCard
              post={post}
              author={post.author}
              comments={post.comments}
              key={post._id}
            />
          ))}
        </div>
      )}
    </BlogLayout>
  );
};

export default BlogIndex;
