import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import HomePage from './pages/HomePage/Homepage';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import ComingSoon from './pages/ComingSoon/ComingSoon';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;