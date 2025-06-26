import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Signup({ user }) { // pastikan menerima prop user
  const [activeTab, setActiveTab] = useState('signup');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/'); // redirect ke halaman utama jika sudah login
    }
  }, [user, navigate]);


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:3000/api/signup', {
      username,
      email,
      password,
    });
    alert(res.data.message);
    // Jika ingin redirect ke login, bisa tambahkan navigasi di sini
  } catch (err) {
    alert(err.response?.data?.message || 'Signup failed');
  }
};

  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-600 flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-5">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between mb-5">
            <button
              className={`flex-1 p-2 font-bold text-sm text-blue-900 ${
                activeTab === 'signup' ? 'bg-blue-900 text-white rounded' : 'bg-transparent'
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
            <Link
              to="/login"
              className={`flex-1 p-2 font-bold text-sm text-blue-900 ${
                activeTab === 'login' ? 'bg-blue-900 text-white rounded' : 'bg-transparent'
              } text-center`}
              style={{ display: 'block' }}
            >
              Log In
            </Link>
          </div>
          {activeTab === 'signup' && (
            <div>
              <h2 className="text-2xl font-bold text-blue-900 text-center mb-5">Create an Account</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-bold text-blue-900">Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 w-full rounded border border-black text-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-blue-900">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 w-full rounded border border-black text-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-blue-900">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 w-full rounded border border-black text-black text-black"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition"
                >
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;