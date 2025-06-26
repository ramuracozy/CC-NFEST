import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function RightBar() {
  return (
    <aside className="hidden lg:flex flex-col w-72 rounded-xl bg-[#181f2a] text-white min-h-[calc(100vh-6rem)] py-8 px-4 rounded-r-lg shadow-lg mt-10 mr-8">
      <input
        type="text"
        placeholder="Cari..."
        className="w-full mb-6 px-4 py-2 rounded bg-[#232b3b] text-white focus:outline-none"
      />
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center bg-[#232b3b] rounded-lg px-3 py-2">
            <FontAwesomeIcon icon={faUser} className="w-8 h-8 bg-gray-500 rounded-full mr-3 p-2" />
            <div className="flex-1">
              <p className="font-semibold">NFEST Media</p>
              <p className="text-gray-400 text-xs">@nfestmedia</p>
            </div>
            <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold">
              {i === 1 ? 'Mengikuti' : 'Ikuti'}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default RightBar;