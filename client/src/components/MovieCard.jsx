import React from "react";
import "../assets/styles/populars.css";

export const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const posterUrl = movie.poster_path
    ? baseUrl + movie.poster_path
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <div className="movie-container">
      <h4>{movie.title}</h4>
      <a href={`/detail/${movie.id}`}>
        <div className="movie-card">
          <img src={posterUrl} alt={`Poster de ${movie.title}`} />
        </div>
      </a>
    </div>
  );
};
