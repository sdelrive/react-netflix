import { useEffect, useState } from "react";
import { useParams } from "react-router";
//Servicios
import {
  getPopularMovies,
  getRecommendedMovies,
  getTendenciesMovies,
} from "../../utils/getMovies";
//Componentes
import MovieCard from "../MovieCard/MovieCard";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
//Estilos
import "./MovieList.scss";

export default function MovieList({ label, moviesType, page }) {
  const { id } = useParams();
  const [popMovies, setPopMovies] = useState([]);
  const [tendenciesMovies, setTendenciesMovies] = useState([]);
  const [recMovies, setRecMovies] = useState([]);

  useEffect(() => {
    async function get() {
      await getPopularMovies((page = 2)).then((re) => setPopMovies(re.results));
      await getTendenciesMovies().then((re) => setTendenciesMovies(re.results));
      await getRecommendedMovies(id).then((re) => setRecMovies(re.results));
    }

    get();
  }, []);

  const lists =
    moviesType === "popular"
      ? popMovies
      : moviesType === "tendencies"
      ? tendenciesMovies
      : moviesType === "recommended"
      ? recMovies
      : popMovies;

  const handleScrollRight = () => {};
  return (
    <div>
      <h3>{label}</h3>
      <div className="movies-container onClick">
        {lists.map((movie) => (
          <MovieCard
            page={page}
            key={movie.id}
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
