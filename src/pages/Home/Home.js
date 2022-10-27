import React from "react";
import Layout from "../../components/Layout/Layout";
import MovieList from "../../components/MovieList/MovieList";

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Home</h1>
        <MovieList label="Tendencia" />
        <MovieList label="Mias" />
        <MovieList label="Mias" />
      </Layout>
    </>
  );
}
