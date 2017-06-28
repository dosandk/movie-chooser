import React from 'react';
import styles from './collectionDetailsItem.scss';

const CollectionDetailsItem = ({movie}) => {
  return (
    <div className={styles['collection-item']}>
       <img src={movie.poster_path}/>
       <p>{movie.title}</p>
       <p>{movie.overview}</p>
       <div>Rating: {movie.vote_average}</div>
    </div>
  );
};

export default CollectionDetailsItem;
