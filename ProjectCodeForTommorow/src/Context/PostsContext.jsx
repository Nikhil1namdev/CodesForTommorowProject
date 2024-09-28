import { createContext, useState, useEffect } from 'react';

// Create a context 
const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);  

  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
        setLoading(false);  
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setLoading(false);
      }
    };

    // it will take 5 second for the loading
    setTimeout(() => {
      fetchPosts();
    }, 5000);  

  }, []);

  
  const value = {
    posts,
    currentPage,
    setCurrentPage,
    loading,  
    setPosts,
  };

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export default PostsContext; 
