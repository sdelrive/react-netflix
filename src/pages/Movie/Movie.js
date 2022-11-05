import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";

import { ResultsContext } from "../../App";
export default function Movie() {
  const [resultados, setResultados] = useContext(ResultsContext);
  return (
    <Layout>
      {resultados ? <MoviesSearch results={resultados} /> : <MovieInfo />}
    </Layout>
  );
}
