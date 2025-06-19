import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';

function Feed() {
  return (
    <div className="flex-1 p-4">
      <div className="bg-gray-800 p-6 m-5 rounded-lg shadow">
        <div className="flex items-center mb-2">
          <div className="w-5 h-5 bg-gray-500 rounded-full mr-2"></div>
          <span className="text-gray-300">Ramuracozy</span>
        </div>
        <p className="mb-2 text-gray-200"></p>
        <div className="bg-gray-600 h-32 rounded-lg mb-2"></div>
        <div className="flex justify-around mt-2 text-gray-400">
          <FontAwesomeIcon icon={faThumbsUp} />
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faRetweet} />
        </div>
      </div>
    </div>
  );
}

export default Feed;