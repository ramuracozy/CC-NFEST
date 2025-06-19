import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [activeTab, setActiveTab] = useState('signup');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup submitted', { username, email, password });
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
            <button
              className={`flex-1 p-2 font-bold text-sm text-blue-900 ${
                activeTab === 'login' ? 'bg-blue-900 text-white rounded' : 'bg-transparent'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Log In
            </button>
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
                    className="p-2 w-full rounded border border-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-blue-900">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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