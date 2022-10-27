import React from "react";
import { imgURL } from "../../utils/constants";

import "./MovieCard.scss";

export default function MovieCard({ img }) {
  const src = imgURL + img;
  return (
    <div className="movie-card">
      <img src={src} />
    </div>
  );
}
