import { useEffect, useState } from "react";

import { getPopularMovies, getTendenciesMovies } from "../../utils/getMovies";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

//getMovies

export default function MovieList({ label, moviesType }) {
  const [popMovies, setPopMovies] = useState([]);
  const [tendenciesMovies, setTendenciesMovies] = useState([]);

  useEffect(() => {
    async function get() {
      await getPopularMovies().then((re) => setPopMovies(re.results));
      await getTendenciesMovies().then((re) => setTendenciesMovies(re.results));
      console.log(tendenciesMovies);
    }

    get();
  }, []);

  const handleScrollRight = () => {};
  return (
    <div>
      <h3>{label}</h3>
      <div className="movies-container onClick">
        {moviesType == "popular"
          ? popMovies.map((movie) => (
              <MovieCard
                className="item"
                title={movie.title}
                img={movie.poster_path}
                date={movie.release_date}
                id={movie.id}
              />
            ))
          : tendenciesMovies.map((movie) => (
              <MovieCard
                className="item"
                title={movie.title}
                img={movie.poster_path}
                date={movie.release_date}
                id={movie.id}
              />
            ))}
      </div>
      <div className="scroll">
        <FontAwesomeIcon
          onClick={handleScrollRight}
          className="scroll-right"
          icon={faChevronRight}
        />
      </div>
    </div>
  );
}
