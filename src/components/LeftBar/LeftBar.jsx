import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LeftBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handlePostClick = () => {
    setIsModalOpen(true);
  };

  const handleNotificationClick = () => {
    navigate('/coming-soon');
  };

  const handleSettingsClick = () => {
    navigate('/coming-soon');
  };

  const handleHelpClick = () => {
    navigate('/coming-soon');
  };

  const handleAboutClick = () => {
    navigate('/tentang');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="w-64 p-10 m-10 bg-gray-800 rounded-lg flex justify-center">
      <div className="space-y-4">
        <div className="flex items-center p-4 font-bold">
          <img src="../public/img/home.png" className="w-6 mr-5" alt="Home" /> Beranda
        </div>
        <div
          className="flex items-center p-4 font-bold cursor-pointer"
          onClick={handleNotificationClick}
        >
          <img src="../public/img/notif.png" className="w-6 mr-5" alt="Pemberitahuan" /> Pemberitahuan
        </div>
        <div
          className="flex items-center p-4 font-bold cursor-pointer"
          onClick={handlePostClick}
        >
          <img src="../public/img/add.png" className="w-6 mr-5" alt="Posting" /> Posting
        </div>
        <div
          className="flex items-center p-4 font-bold cursor-pointer"
          onClick={handleSettingsClick}
        >
          <img src="../public/img/setting.png" className="w-6 mr-5" alt="Pengaturan" /> Pengaturan
        </div>
        <div
          className="flex items-center p-4 font-bold cursor-pointer"
          onClick={handleHelpClick}
        >
          <img src="../public/img/help.png" className="w-6 mr-5" alt="Bantuan" /> Bantuan
        </div>
        <div
          className="flex items-center p-4 font-bold cursor-pointer"
          onClick={handleAboutClick}
        >
          <img src="../public/img/info.png" className="w-6 mr-5" alt="Tentang" /> Tentang
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-white text-xl font-bold mb-4">Create New Post</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData();
                formData.append('caption', e.target.caption.value);
                if (e.target.image.files[0]) {
                  formData.append('image', e.target.image.files[0]);
                }

                try {
                  const response = await fetch('http://localhost:5000/api/posts', {
                    method: 'POST',
                    body: formData,
                  });
                  if (response.ok) {
                    closeModal();
                    // Optionally, trigger a refresh of Feed.jsx
                  } else {
                    alert('Failed to create post');
                  }
                } catch (error) {
                  console.error('Error posting:', error);
                  alert('Error posting');
                }
              }}
            >
              <div className="flex flex-col items-center">
                {selectedImage ? (
                  <img src={selectedImage} alt="Selected" className="w-full h-64 object-cover mb-4 rounded" />
                ) : (
                  <div className="w-full h-64 bg-gray-700 flex items-center justify-center text-white mb-4">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  onChange={handleImageUpload}
                  className="mb-4 text-white"
                />
                <textarea
                  name="caption"
                  placeholder="Write a caption..."
                  className="w-full p-2 mb-4 text-white bg-gray-700 rounded"
                  rows="4"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-600 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeftBar;