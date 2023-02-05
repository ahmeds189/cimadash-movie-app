import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleMovie = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const fetchDetails = async () => {
    const resposne = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&language=en-US`
    );

    if (resposne.status === 200) {
      setDetails(resposne.data);
    }
  };

  useEffect(() => {
    fetchDetails();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const {
    original_title,
    poster_path,
    overview,
    genres,
    vote_average,
    vote_count,
    runtime,
    release_date,
    imdb_id,
  } = details;
  const imgSrc = `https://image.tmdb.org/t/p/w400${poster_path}`;

  if (!details) {
    return (
      <h1 className="text-zinc-900 dark:text-white text-4xl">Loading...</h1>
    );
  } else {
    return (
      <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-3">
        <img
          className="rounded-lg border shadow w-96 dark:border-gray-700 border-slate-300"
          src={imgSrc}
          alt={original_title}
        />
        <div className="max-w-md flex flex-col gap-4">
          <h1 className="dark:text-white text-zinc-800 text-2xl font-bold">
            {original_title}
          </h1>
          <p className="font-normal my-3 text-sm text-gray-700 dark:text-gray-400">
            {overview}
          </p>
          <ul className="flex flex-wrap gap-2 text-gray-700 dark:text-gray-400">
            {genres &&
              genres.map((item) => (
                <li
                  className="py-2 px-3 rounded-lg border dark:border-gray-700 border-slate-300"
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
          </ul>
          <h5 className="flex items-center gap-1 text-lg  dark:text-white text-slate-800">
            <svg
              className="fill-orange-400 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            {Number(vote_average).toFixed(2).toString()} - {vote_count} Reviews
          </h5>
          <h5 className="text-lg dark:text-white text-slate-800">
            Duration: {runtime}min.
          </h5>
          <h5 className="text-lg dark:text-white text-slate-800">
            Release Date: {release_date}
          </h5>
          <button className="text-white bg-blue-600 hover:bg-blue-700 transition rounded-md self-start py-2 px-8 text-base font-semibold mt-2 flex gap-2 items-center">
            <a href={`https://www.imdb.com/title/${imdb_id}`} target="_blanck">
              IMDb
            </a>
            <svg
              className="fill-white w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
};

export default SingleMovie;
