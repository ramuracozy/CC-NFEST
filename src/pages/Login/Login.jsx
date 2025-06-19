import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find(u => u.username === username && u.password === password);
    if (userExists) {
      localStorage.setItem('currentUser', JSON.stringify({ name: username, handle: `@${username}` }));
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-600 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl p-5">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between mb-5">
            <button
              className={`flex-1 p-2 font-bold text-sm text-blue-900 ${
                activeTab === 'signup' ? 'bg-transparent' : 'bg-blue-900 text-white rounded'
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
            <button
              className={`flex-1 p-2 font-bold text-sm text-blue-900 ${
                activeTab === 'login' ? 'bg-blue-900 text-white rounded' : 'bg-transparent'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Log In
            </button>
          </div>
          {activeTab === 'login' && (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 text-center mb-5">Log in</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-bold text-blue-900">Username or Email</label>
                  <input
                    type="text"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 w-full rounded border border-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-blue-900">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 w-full rounded border border-black"
                  />
                </div>
                <a href="#" className="text-xs text-blue-900 hover:underline mb-4">
                  Forgot Password?
                </a>
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition"
                >
                  Log in
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;