import { basicURL, KEY } from "./constants";
export const getPopularMovies = async () => {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=es-ES&page=1`
  );
  const data = await (await res).json();

  return data;
};

export const getTendenciesMovies = async () => {
  const res = fetch(
    `${basicURL}/movie/top_rated?api_key=${KEY}&language=es-ES&page=1`
  );
  const data = await (await res).json();

  return data;
};

export const getMovieById = async (id) => {
  const res = fetch(`${basicURL}/movie/${id}?api_key=${KEY}&language=es-ES`);
  const data = await (await res).json();
  return data;
};
