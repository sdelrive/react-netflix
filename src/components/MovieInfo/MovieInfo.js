import "./MovieInfo.scss";
import { useParams } from "react-router";

import { useEffect, useState } from "react";
import { getMovieById } from "../../utils/getMovies";
import { basicURL, KEY } from "../../utils/constants";
import moment from "moment";
import MovieList from "../MovieList/MovieList";

export default function MovieInfo() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function get() {
      const movie = await getMovieById(id);
      setMovie(movie);
      setGenres(movie.genres.map((el) => el.name));
      console.log(movie);
    }

    get();
  }, [id]);
  const backdropPath = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  const posterPath = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
  return (
    <>
      <div
        className="movieInfo"
        style={{ backgroundImage: `url("${backdropPath}")` }}
      >
        <div className="background"></div>
        <div className="movie">
          <div className="movie-poster">
            <img src={posterPath} />
          </div>
          <div className="movie-info">
            <div className="movie-info__title">
              <h1>{movie.title}</h1>
              <p>{moment(movie.release_date).format("yyyy")}</p>
            </div>
            <p>{movie.overview}</p>
            <ul className="movie-info__genres">
              {genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <MovieList
        label="Peliculas relacionadas"
        moviesType="recommended"
        page={1}
      />
    </>
  );
}
