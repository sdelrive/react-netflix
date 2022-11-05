import React, { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

import "../../components/MovieCard/MovieCard.scss";
import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";

// estudiando contexto
import { ResultsContext } from "../../App";

export default function Home() {
  const [results, setResults] = useState([]);
  const [resultados, setResultados] = useContext(ResultsContext);
  // useEffect(() => {
  //   // console.log(results);
  // }, [results]);

  // const contextoObtenido = useContext(Contexto);
  // console.log(contextoObtenido);

  return (
    <>
      <Layout results={results} setResults={setResults}>
        {resultados ? (
          <MoviesSearch results={resultados} />
        ) : (
          <>
            <MovieList label="Mi Lista" moviesType="popular" />
            <MovieList label="Tendencias" moviesType="tendencies" />
            <MovieList label="Mias" moviesType="tendencies" />
          </>
        )}
      </Layout>
    </>
  );
}
