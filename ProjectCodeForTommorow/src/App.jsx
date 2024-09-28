import './App.css';
import { useContext } from 'react';
import PostsContext from './Context/PostsContext';  
import PostsList from './components/PostsList';
import Pagination from './components/Pagination';

function App() {
  
  const { loading } = useContext(PostsContext);  

  return (
    <div className="min-h-screen bg-gray-200 font-sans text-center ">
   <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">ALL POSTS</h1>


      {/* ya to loader show hoga ya to posts */}
      {loading ? (
        <div className="loading">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          < PostsList />
          <Pagination />
        </>
      )}
    </div>
  );
}

export default App;
