import MovieCard from "../MovieCard/MovieCard";
import "./MoviesSearch.scss";

export default function MoviesSearch(results) {
  console.log(results);
  return (
    <div className="movies-search-container">
      {results.results.length > 0 ? (
        results.results.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              className="item"
              title={movie.title}
              img={movie.poster_path}
              date={movie.release_date}
              id={movie.id}
            />
          );
        })
      ) : (
        <h1>No encontramos resultados para su busqueda</h1>
      )}
    </div>
  );
}
