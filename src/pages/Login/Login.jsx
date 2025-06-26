import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';


function Login({ setUser, user }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      });
      setUser(res.data.user);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-600 flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-5">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex w-full mb-5">
            <Link
              to="/signup"
              className={`flex-1 p-2 font-bold text-sm text-blue-900 ${
                location.pathname === '/signup' ? 'bg-blue-900 text-white rounded' : 'bg-transparent'
              } text-center`}
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className={`flex-1 p-2 font-bold text-sm text-blue-900 ${
                location.pathname === '/login' ? 'bg-blue-900 text-white rounded' : 'bg-transparent'
              } text-center`}
            >
              Log In
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-5">Log in</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-bold text-blue-900">Username or Email</label>
              <input
                type="text"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 w-full rounded border border-black bg-white text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-blue-900">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 w-full rounded border border-black bg-white text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="bg-gray-400 text-white px-4 py-2 rounded font-bold hover:bg-gray-500 transition mt-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;