import React from 'react';
import { Link } from 'react-router-dom';
import CollectionDetailsItem from '../components/collectionDetailsItem';
import styles from '../components/moviesCollections/moviesCollections.scss';

const CollectionDetailsItemContainer = ({match, movie}) => {
  return (
    <Link to={`${match.url}/${movie.id}`} className={styles['collection-item']}>
      <CollectionDetailsItem movie={movie}/>
    </Link>
  );
};

export default CollectionDetailsItemContainer;
