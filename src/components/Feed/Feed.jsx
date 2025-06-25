import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto p-2">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-800 p-6 m-5 w-full rounded-lg shadow">
          <div className="flex items-center mb-2">
            <div className="w-5 h-5 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-gray-300">{post.username}</span>
          </div>
          <p className="mb-2 text-gray-200">{post.caption}</p>
          {post.image_url && (
            <img
              src={`http://localhost:5000${post.image_url}`}
              alt="Post"
              className="w-full h-[480px] object-cover rounded-lg mb-2"
            />
          )}
          <div className="flex justify-around mt-2 text-gray-400">
            <FontAwesomeIcon icon={faThumbsUp} />
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;