import React from 'react';

const MovieDetails = ({movie}) => {
  return (
    <div>
      <div>Hello from MovieDetails</div>
      <div>{movie.Title}</div>
      <img src={movie.Poster} />
    </div>
  );
};

export default MovieDetails;
