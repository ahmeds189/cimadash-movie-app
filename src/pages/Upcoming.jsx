import { MovieCard } from "../components";
import { useLoaderData } from "react-router-dom";

const Upcoming = ({ apiUrl }) => {
  const movies = useLoaderData();

  return (
    <div className="grid place-items-center">
      <div className="grid gap-4 grid-cols-1  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieData={movie} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
