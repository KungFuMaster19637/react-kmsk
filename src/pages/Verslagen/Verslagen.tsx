// BlogSection.js
import React, { useState } from "react";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const handleBlogSubmit = (newPost: any) => {
    // setBlogPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div>
      {/* {isLoggedIn && (
        <>
          <h2>Submit a Blog Post</h2>
        </>
      )} */}

      <h3>Recent Blog Posts</h3>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>
            <h4>{post}</h4>
            <p>{post}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSection;
