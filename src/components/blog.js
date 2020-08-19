import React from "react";

function Blog(props) {
  return (
    <div>
      {props.isLoading ? (
        <p>Loading...</p>
      ) : (
        props.data.map((post) => <li key={post._id}>{post.title}</li>)
      )}
    </div>
  );
}

export default Blog;
