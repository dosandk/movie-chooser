import React from 'react';
import styles from './movieDetails.scss';
import Poster from '../poster';

const MovieDetails = ({movie, movieLikeHandler, movieDislikeHandler}) => {
  return (
    <div className={styles['movie-details']}>
      {movie &&
      <div>
        <div>{movie.title}</div>
        <Poster movie={movie} movieLikeHandler={movieLikeHandler} movieDislikeHandler={movieDislikeHandler}/>
        <div>Description</div>
      </div>}
    </div>
  );
};

export default MovieDetails;
