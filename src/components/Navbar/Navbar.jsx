import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLoginClick = () => navigate('/login');

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-b from-purple-700 to-blue-500 bg-opacity-75 p-4">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-8">
        <div className="text-2xl font-bold">NFEST</div>
        <div className="flex items-center relative">
          {user ? (
            <div className="flex items-center cursor-pointer" onClick={handleProfileClick}>
              <span>@{user.username}</span>
              <div className="w-8 h-8 bg-gray-300 rounded-full ml-2"></div>
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={handleLoginClick} className="bg-blue-600 p-2 rounded text-white font-bold">
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;