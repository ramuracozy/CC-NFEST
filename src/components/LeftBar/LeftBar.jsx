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
          <img src="../public/img/home.png" className="w-6 mr-5" /> Beranda
        </div>
        <div
          className="flex items-center p-4 font-bold cursor-pointer"
          onClick={handleNotificationClick}
        >
          <img src="../public/img/notif.png" className="w-6 mr-5" /> Pemberitahuan
        </div>
        <div
          className="flex items-center p-4 font-bold cursor-pointer"
          onClick={handlePostClick}
        >
          <img src="../public/img/add.png" className="w-6 mr-5" /> Posting
        </div>
        <div
          className="flex items-center p-4 font-bold cursor-pointer"
          onClick={handleSettingsClick}
        >
          <img src="../public/img/setting.png" className="w-6 mr-5" /> Pengaturan
        </div>
        <div
          className="flex items-center p-4 font-bold cursor-pointer"
          onClick={handleHelpClick}
        >
          <img src="../public/img/help.png" className="w-6 mr-5" /> Bantuan
        </div>
        <div className="flex items-center p-4 font-bold">
          <img src="../public/img/info.png" className="w-6 mr-5" /> Tentang
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-white text-xl font-bold mb-4">Create New Post</h2>
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
                accept="image/*,video/*"
                onChange={handleImageUpload}
                className="mb-4 text-white"
              />
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeftBar;