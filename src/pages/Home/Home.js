import React from "react";
import Layout from "../../components/Layout/Layout";
import MovieList from "../../components/MovieList/MovieList";

export default function Home() {
  return (
    <>
      <Layout>
        <MovieList label="Mi Lista" moviesType="popular" />
        <MovieList label="Tendencias" moviesType="tendencies" />
        <MovieList label="Mias" />
      </Layout>
    </>
  );
}
