import React from "react";
import { imgURL } from "../../utils/constants";

import "./MovieCard.scss";

export default function MovieCard({ img, title }) {
  const src = imgURL + img;
  return (
    <div className="movie-card className">
      <img src={src} />
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
