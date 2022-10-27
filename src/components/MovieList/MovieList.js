import { useEffect, useState } from "react";

import { getPopularMovies } from "../../utils/getMovies";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

  const handleScrollRight = () => {};
  return (
    <div>
      <h3>{label}</h3>
      <div className="movies-container onClick">
        {popMovies.map((movie) => (
          <MovieCard
            className="item"
            title={movie.title}
            img={movie.poster_path}
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
