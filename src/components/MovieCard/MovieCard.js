import React from "react";
import { imgURL } from "../../utils/constants";

import moment from "moment";

import "./MovieCard.scss";
import { Link } from "react-router-dom";

export default function MovieCard({ img, title, date, id }) {
  const src = imgURL + img;
  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card className">
        <img src={src} />
        <div>
          <h2>{title}</h2>
          <p>{moment(date).format("yyyy")}</p>
        </div>
      </div>
    </Link>
  );
}
