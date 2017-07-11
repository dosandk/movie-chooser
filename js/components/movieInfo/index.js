import React from 'react';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import styles from './movieInfo.scss';

const MovieInfo = ({movie, goBack}) => {
  return (
    <figure className={styles['movie-info']}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={styles.poster}/>
      <figcaption className={styles['text-info']}>
        <NavigationClose hoverColor='#000' color='#ddd' onClick={goBack} className={styles['close-icon']}/>
        <p className={styles['movie-title']}>{movie.title}</p>
        <p>{movie.overview}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Release date: {movie.release_date}</p>
      </figcaption>
    </figure>
  );
};

export default MovieInfo;
