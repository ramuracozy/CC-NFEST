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
    <aside className="hidden lg:flex flex-col rounded-xl bg-[#181f2a] text-white w-64 min-h-[calc(100vh-6rem)] py-8 px-4 rounded-l-lg shadow-lg mt-10 ml-8">
      <nav className="flex flex-col gap-4 mt-8">
        <button
          className="flex items-center gap-4 px-6 py-4 rounded-lg hover:bg-[#232b3b] transition"
          onClick={() => navigate('/')}
        >
          <img src="/img/home.png" className="w-7" alt="Home" />
          <span className="font-semibold">Beranda</span>
        </button>
        <button
          className="flex items-center gap-4 px-6 py-4 rounded-lg hover:bg-[#232b3b] transition"
          onClick={() => navigate('/coming-soon')}
        >
          <img src="/img/notif.png" className="w-7" alt="Pemberitahuan" />
          <span className="font-semibold">Pemberitahuan</span>
        </button>
        <button
          className="flex items-center gap-4 px-6 py-4 rounded-lg hover:bg-[#232b3b] transition"
          onClick={() => navigate('/coming-soon')}
        >
          <img src="/img/setting.png" className="w-7" alt="Pengaturan" />
          <span className="font-semibold">Pengaturan</span>
        </button>
        <button
          className="flex items-center gap-4 px-6 py-4 rounded-lg hover:bg-[#232b3b] transition"
          onClick={() => navigate('/coming-soon')}
        >
          <img src="/img/help.png" className="w-7" alt="Bantuan" />
          <span className="font-semibold">Bantuan</span>
        </button>
        <button
          className="flex items-center gap-4 px-6 py-4 rounded-lg hover:bg-[#232b3b] transition"
          onClick={() => navigate('/tentang')}
        >
          <img src="/img/info.png" className="w-7" alt="Tentang" />
          <span className="font-semibold">Tentang</span>
        </button>
      </nav>
    </aside>
  );
}

export default LeftBar;