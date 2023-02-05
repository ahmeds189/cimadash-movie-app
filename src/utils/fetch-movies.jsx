import axios from "axios";

const fetchMovies = async (apiPath) => {
  const resposne = await axios.get(
    `https://api.themoviedb.org/3/movie/${apiPath}?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&language=en-US&page=1`
  );
  return resposne.data.results;
};

export default fetchMovies;
