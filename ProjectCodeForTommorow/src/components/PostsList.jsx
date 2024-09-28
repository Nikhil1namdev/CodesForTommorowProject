import React, { useContext } from 'react';
import PostsContext from '../Context/PostsContext';  // Import the context
import PostCard from './PostCard';

const PostsList = () => {
  const { posts, currentPage, setPosts } = useContext(PostsContext);  // Directly use useContext
  const postsPerPage = 6;

  const removeCard = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="posts-container">
      {currentPosts.map((post, index) => (
        <PostCard key={post.id} post={post} index={index} removeCard={removeCard} />
      ))}
    </div>
  );
};

export default PostsList;
