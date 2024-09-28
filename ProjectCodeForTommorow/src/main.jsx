import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PostsProvider } from './Context/PostsContext';  // Correct import for PostsProvider
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsProvider>  {/* Use PostsProvider to wrap App */}
      <App />
    </PostsProvider>
  </React.StrictMode>
);
