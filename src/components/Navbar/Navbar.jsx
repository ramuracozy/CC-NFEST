import { useState } from 'react';

function Navbar({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setUser({ name: username, handle: `@${username}` });
      setShowLogin(false);
    }
  };

  return (
    <nav className="bg-blue-900 p-4">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-8">
        <div className="text-2xl font-bold">NFEST</div>
        <div className="flex items-center">
          {user ? (
            <div className="flex items-center">
              <span>{user.handle}</span>
              <div className="w-8 h-8 bg-gray-300 rounded-full ml-2"></div>
            </div>
          ) : (
            <button onClick={() => setShowLogin(true)} className="bg-blue-600 p-2 rounded">
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;