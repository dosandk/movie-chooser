import React from 'react';
import styles from './movieDetails.scss';

const MovieDetails = ({movie}) => {
  return (
    <div className={styles['movie-details']}>
      <div>Hello from MovieDetails</div>
      {movie && (
      <div>
        <div>{movie.title}</div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie['poster_path']}`} />
      </div>
        )}
    </div>
  );
};

export default MovieDetails;
