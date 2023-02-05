import { Link } from "react-router-dom";

const MovieCard = ({ movieData }) => {
  const { original_title, poster_path, overview, id } = movieData;
  let imgSrc = `https://image.tmdb.org/t/p/w400${poster_path}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group overflow-hidden">
      <div
        className="h-[380px] group-hover:scale-[102%] transition-all"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="p-3 grid grid-rows-3 items-center">
        <h3 className="text-xl  font-bold tracking-tight text-gray-900 dark:text-white">
          {original_title}
        </h3>
        <p className="font-normal my-3 text-sm text-gray-700 dark:text-gray-400">
          {overview.substr(0, 100)}...
        </p>
        <Link
          to={`../movie/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 transition dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
