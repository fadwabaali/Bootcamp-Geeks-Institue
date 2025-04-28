import React from 'react';
import posts from '../post.json'; 

function PostList() {
  return (
    <div className="container mt-4">
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-3 border rounded shadow-sm">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
