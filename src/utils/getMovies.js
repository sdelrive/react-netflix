import { basicURL, KEY } from "./constants";
export const getPopularMovies = async (page = 1) => {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=es-ES&page=${page}`
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
// https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=<<api_key>>&language=en-US&page=1
export const getRecommendedMovies = async (id, page = 1) => {
  const res = fetch(
    `${basicURL}/movie/${id}/recommendations?api_key=${KEY}&language=es-ES&page=${page}`
  );
  const data = await (await res).json();
  return data;
};
export const getSearchByName = async (name = "Joker") => {
  const res = fetch(
    `${basicURL}/search/movie?api_key=${KEY}&language=es-ES&query=${name}`
  );
  const data = await (await res).json();
  return data;
};
