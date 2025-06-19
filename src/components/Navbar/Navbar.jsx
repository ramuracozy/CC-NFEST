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
    <nav className="bg-blue-900 p-4 flex justify-between items-center">
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
        {showLogin && (
          <form onSubmit={handleLogin} className="absolute top-16 right-4 bg-gray-800 p-4 rounded shadow max-w-sm">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 mb-2 w-full bg-gray-700 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 mb-2 w-full bg-gray-700 rounded"
            />
            <button type="submit" className="bg-blue-600 p-2 rounded w-full">Login</button>
          </form>
        )}
      </div>
    </nav>
  );
}

export default Navbar;