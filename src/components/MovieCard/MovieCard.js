import React from "react";
import { imgURL } from "../../utils/constants";

import moment from "moment";

import "./MovieCard.scss";
import { Link } from "react-router-dom";

export default function MovieCard({ img, title, date, id, sliderIndex }) {
  const src = imgURL + img;

  const scrollStyles = {
    transform: `translateX(calc(${sliderIndex} * -100%))`,
  };
  return (
    <Link className="movie-card-container card-item" to={`/movies/${id}`}>
      <div style={scrollStyles} className="movie-card className">
        <img src={src} />
        {/* <div>
          <h2>{title}</h2>
          <p>{moment(date).format("yyyy")}</p>
        </div> */}
      </div>
    </Link>
  );
}
