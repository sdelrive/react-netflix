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
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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

  const [sliderIndex, setSliderIndex] = useState(0);
  const handleScrollRight = () => {
    setSliderIndex(sliderIndex + 5);
  };
  const handleScrollLeft = () => {
    setSliderIndex(sliderIndex - 5);
  };

  return (
    <div className="row">
      <h3>{label}</h3>
      <div className="container">
        <button className="scroll scroll-left" onClick={handleScrollLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="movies-container onClick">
          {lists.map((movie) => (
            <MovieCard
              sliderIndex={sliderIndex}
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
        {/* Uso  un button en lugar de div, para mayor accesibilidad */}
        <button className="scroll scroll-right" onClick={handleScrollRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
