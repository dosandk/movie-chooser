import React from 'react';
import styles from './movieDetails.scss';

const MovieDetails = ({movie}) => {
  return (
    <div className={styles['movie-details']}>
      <div>Hello from MovieDetails</div>
      <div>{movie.Title}</div>
      <img src={movie.Poster} />
    </div>
  );
};

export default MovieDetails;
