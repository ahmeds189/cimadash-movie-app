import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard, Skeleton } from "../components";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const queryTerm = searchParams.get("q");

  const searchMovies = async () => {
    setLoading(true);
    const resposne = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&language=en-US&query=${queryTerm}`
    );

    setLoading(false);
    setMovies(resposne.data.results);
  };

  useEffect(() => {
    searchMovies();
  }, [queryTerm]);

  return (
    <div className="grid place-items-center">
      <div className="grid gap-4 grid-cols-1  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) =>
          loading ? (
            <Skeleton />
          ) : (
            <MovieCard key={movie.id} movieData={movie} />
          )
        )}
      </div>
    </div>
  );
};

export default Search;
