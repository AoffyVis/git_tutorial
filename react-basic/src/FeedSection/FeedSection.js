import React, { useState } from 'react';

import './FeedSection.css';
import Navbar from '../Navbar/Navbar';
import Input from '../Input/Input';
import Post from '../Post/Post';

let id = 1;

function FeedSection() {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts([{ id, title: newPost }, ...posts]);
    id += 1;
  }

  function removePost(id) {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <>
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          removePost={removePost}
        />
      ))}
    </>
  );
}

export default FeedSection;
