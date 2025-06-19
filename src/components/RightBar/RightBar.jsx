import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function RightBar() {
  return (
    <div className="w-64 p-4 m-10 bg-gray-800">
      <input type="text" placeholder="Cari..." className="w-full p-2 mb-4 bg-gray-700 rounded" />
      <div className="space-y-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="w-5 h-5 bg-gray-500 rounded-full mr-1 p-1" />
          <div>
            <p>Lelana Studio</p>
            <p className="text-gray-200">@lelana.studio</p>
          </div>
          <button className="ml-auto bg-blue-600 p-0 rounded">Mengikuti</button>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="w-5 h-5 bg-gray-500 rounded-full mr-1 p-0" />
          <div>
            <p>Lelana Studio</p>
            <p className="text-gray-400">@lelana.studio</p>
          </div>
          <button className="ml-auto bg-blue-600 p-0 rounded">Ikuti</button>
        </div>
      </div>
    </div>
  );
}

export default RightBar;