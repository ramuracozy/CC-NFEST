import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faShare, faImage, faVideo, faTag, faSmile } from '@fortawesome/free-solid-svg-icons';

function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [postImage, setPostImage] = useState(null);
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/posts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          setPosts([]);
          console.error('API response is not array:', data);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto p-2">
      {/* Post Input Box */}
      <div className="bg-[#232b3b] rounded-xl shadow p-4 mb-6">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 bg-gray-400 rounded-full mr-3"></div>
          <div
            className="flex-1 bg-[#232b3b] rounded-full px-4 py-2 text-gray-200 cursor-pointer hover:bg-[#2d3648] border border-[#232b3b]"
            onClick={() => setShowModal(true)}
          >
            Apa yang Anda pikirkan, Bon?
          </div>
        </div>
        <hr className="my-2 border-[#2d3648]" />
        <div className="flex justify-between text-gray-400 text-sm">
          <div className="flex items-center gap-1 cursor-pointer">
            <FontAwesomeIcon icon={faImage} className="mr-1" /> Photos
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FontAwesomeIcon icon={faVideo} className="mr-1" /> Videos
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FontAwesomeIcon icon={faTag} className="mr-1" /> Tag
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <FontAwesomeIcon icon={faSmile} className="mr-1" /> Feelings
          </div>
        </div>
      </div>

      {/* Modal Post */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-[#232b3b] rounded-xl w-full max-w-md p-6 relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-2xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-white">Buat postingan</h2>
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-gray-400 rounded-full mr-3"></div>
              <div>
                <div className="font-semibold text-gray-100">Bon Bon</div>
                <div className="text-xs text-gray-400 bg-gray-700 rounded px-2 py-1 inline-block">Teman</div>
              </div>
            </div>
            <textarea
              className="w-full border-none outline-none text-2xl text-gray-100 bg-[#232b3b] resize-none mb-4"
              placeholder="Apa yang Anda pikirkan, Bon?"
              rows={4}
              value={postText}
              onChange={e => setPostText(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={e => setPostImage(e.target.files[0])}
              className="mb-4"
            />
            <div className="flex items-center gap-2 mb-4">
              <button className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white px-3 py-1 rounded font-bold">Aa</button>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="flex items-center gap-1 px-2 py-1 rounded bg-green-100 text-green-700">
                <FontAwesomeIcon icon={faImage} />
              </button>
              <button className="flex items-center gap-1 px-2 py-1 rounded bg-blue-100 text-blue-700">
                <FontAwesomeIcon icon={faTag} />
              </button>
              <button className="flex items-center gap-1 px-2 py-1 rounded bg-yellow-100 text-yellow-700">
                <FontAwesomeIcon icon={faSmile} />
              </button>
            </div>
           <button
            className="w-full bg-blue-600 text-white py-2 rounded font-bold disabled:opacity-50"
            disabled={!postText.trim() && !postImage}
            onClick={async () => {
              const formData = new FormData();
              formData.append('caption', postText);
              if (postImage) formData.append('image', postImage);

              // Ambil token dari localStorage (saat login simpan token ke localStorage)
              const token = localStorage.getItem('token');

              await fetch('http://localhost:3000/api/posts', {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                body: formData,
              });

              setShowModal(false);
              setPostText('');
              setPostImage(null);

              // Refresh feed
              // Panggil ulang fetchPosts
              const response = await fetch('http://localhost:3000/api/posts', {
                headers: { Authorization: `Bearer ${token}` }
              });
              const data = await response.json();
              if (Array.isArray(data)) {
                setPosts(data);
              } else {
                setPosts([]);
                console.error('API response is not array:', data);
              }
            }}
          >
            Kirim
          </button>
          </div>
        </div>
      )}

      {/* Feed List */}
      {posts.map((post) => (
        <div key={post.id} className="bg-[#232b3b] p-6 mb-6 w-full rounded-xl shadow">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-gray-200 font-semibold">{post.username}</span>
          </div>
          <p className="mb-2 text-gray-100">{post.caption}</p>
          {post.image_url && (
            <img
              src={`http://localhost:3000${post.image_url}`}
              alt="Post"
              className="w-full h-[320px] object-cover rounded-lg mb-2"
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