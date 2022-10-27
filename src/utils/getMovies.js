import { basicURL, KEY } from "./constants";

export const getPopularMovies = async () => {
  const res = fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=es-ES&page=1`
  );
  const data = await (await res).json();

  return data;
};
