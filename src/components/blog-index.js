import React from "react";
import BlogCard from "./blog-card";
import BlogLayout from "./blog-layout";

const BlogIndex = (props) => {
  return (
    <BlogLayout>
      {props.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Blog Posts</h2>
          {props.data.map((post) => (
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
