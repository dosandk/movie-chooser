import React from 'react';
import CollectionDetailsContainer from '../../containers/collectionDetails';
import styles from './moviesCollections.scss';

const MoviesCollections = () => (
  <div>
    <CollectionDetailsContainer className={styles['collection-details']}/>
  </div>
);

export default MoviesCollections;
