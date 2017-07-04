import React from 'react';
import styles from './collectionDetailsItem.scss';

const CollectionDetailsItem = ({movie}) => {
  return (
    <div className={styles['collection-item']}>
       <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
       <p className={styles['movie-title']}>{movie.title}</p>
       <p className={styles['movie-description']}>{movie.overview}</p>
       <div className={styles.rating}>Rating: {movie.vote_average}</div>
    </div>
  );
};

export default CollectionDetailsItem;
