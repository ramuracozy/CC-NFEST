import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import HomePage from './pages/HomePage/Homepage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden">
      <Navbar user={user} setUser={setUser} />
      <div className="flex flex-1 overflow-hidden">
        <HomePage />
      </div>
    </div>
  );
}

export default App;