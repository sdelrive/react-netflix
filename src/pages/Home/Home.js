import React from "react";
import Layout from "../../components/Layout/Layout";
import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

import "../../components/MovieCard/MovieCard.scss";
import MoviesSearch from "../../components/MoviesSearch/MoviesSearch";

export default function Home() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    // console.log(results);
  }, [results]);

  return (
    <>
      <Layout results={results} setResults={setResults}>
        {results ? (
          <MoviesSearch results={results} />
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
