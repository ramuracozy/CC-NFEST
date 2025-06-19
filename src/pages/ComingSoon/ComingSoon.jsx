import { Link } from 'react-router-dom';

function ComingSoon() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-purple-700 flex justify-center items-center min-h-screen">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-5">Coming Soon!</h1>
        <div className="flex justify-center">
          <Link
            to="/"
            className="border border-white text-white px-4 py-2 rounded text-sm font-light hover:bg-white hover:text-blue-900 transition"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;