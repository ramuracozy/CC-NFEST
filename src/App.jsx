import Navbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import HomePage from './pages/HomePage/Homepage';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Tentang from './pages/Tentang/Tentang';

function App() {
  const [user, setUser] = useState(null);
  console.log('user:', user);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3000/api/me', {
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
        <Route path="/login" element={!user ? <Login setUser={setUser} user={user} /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup user={user} /> : <Navigate to="/" />} />
        <Route path="/coming-soon" element={user ? <ComingSoon /> : <Navigate to="/login" />} />
        <Route path="/tentang" element={user ? <Tentang /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;