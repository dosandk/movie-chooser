import React from 'react';
import styles from './movieDetails.scss';
import Poster from '../poster';

const MovieDetails = ({movie}) => {
  return (
    <div className={styles['movie-details']}>
      {movie &&
      <div>
        <div>{movie.title}</div>
        <Poster movie={movie}/>
        <div>Description</div>
      </div>}
    </div>
  );
};

export default MovieDetails;
