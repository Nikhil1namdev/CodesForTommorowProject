import React from 'react';

const PostCard = ({ post, index, removeCard }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200 h-87">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h2>
      <p className="text-gray-600 mb-4 overflow-hidden">{post.body}</p>
      <button
        onClick={() => removeCard(index)}
        className="bg-red-100 hover:bg-red-300 text-white py-2 px-4 rounded-lg transition duration-300"
      >
        ❌
      </button>
    </div>
  );
};

export default PostCard;
