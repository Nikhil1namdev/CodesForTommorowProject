import React, { useContext } from 'react';
import PostsContext from '../Context/PostsContext'; 

const Pagination = () => {
  const { currentPage, setCurrentPage, posts } = useContext(PostsContext);  
  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };    

  return (
    <div className="pagination">
      
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
     
    </div>
  );
};

export default Pagination;
