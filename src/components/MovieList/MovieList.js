import { useEffect, useState } from "react";

import { getPopularMovies } from "../../utils/getMovies";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

//getMovies

export default function MovieList({ label }) {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    async function get() {
      await getPopularMovies().then((re) => setPopMovies(re.results));
    }
    get();
    console.log(popMovies);
  }, []);

  return (
    <div>
      <h2>{label}</h2>
      <div className="movies-container">
        {popMovies.map((movie) => (
          <MovieCard img={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}
