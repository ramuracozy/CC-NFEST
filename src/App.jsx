import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage/Homepage';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Tentang from './pages/Tentang/Tentang';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3000/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => setUser(res.data.user))
      .catch(() => setUser(null));
    }
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setUser={setUser} user={user} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </div>
  );
}

export default App;